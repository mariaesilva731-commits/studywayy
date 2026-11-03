import { createHash } from "node:crypto";
import { mkdir, readFile, readdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { getDocument, OPS } from "pdfjs-dist/legacy/build/pdf.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const pdfRoot = path.join(root, "PDF's");
const markdownRoot = path.join(root, "materials", "markdown");
const catalogPath = path.join(root, "src", "data", "pdfCatalog.generated.json");
const manifestPath = path.join(root, "materials", "conversion-manifest.json");
const reportPath = path.join(root, "materials", "conversion-report.md");
const converterVersion = 3;
const force = process.argv.includes("--force");
const requestedId = process.argv.find((argument) => argument.startsWith("--id="))?.slice(5);
const requestedLimit = Number(process.argv.find((argument) => argument.startsWith("--limit="))?.slice(8)) || Infinity;

function sha256(value) {
  return createHash("sha256").update(value).digest("hex");
}

function median(values) {
  if (!values.length) return 0;
  const sorted = [...values].sort((a, b) => a - b);
  return sorted[Math.floor(sorted.length / 2)];
}

function lineText(items) {
  const sorted = [...items].sort((a, b) => a.x - b.x);
  let text = "";
  let previous = null;
  let wideGaps = 0;
  for (const item of sorted) {
    const value = item.str.replace(/\s+/g, " ").trim();
    if (!value) continue;
    const gap = previous ? item.x - previous.endX : 0;
    if (previous && gap > Math.max(1.5, item.fontSize * 0.16)) {
      text += " ";
    }
    if (previous && gap > Math.max(18, item.fontSize * 2.5)) wideGaps += 1;
    text += value;
    previous = { endX: item.x + item.width, fontSize: item.fontSize };
  }
  return {
    text: text.trim(),
    fontSize: median(sorted.map((item) => item.fontSize).filter(Boolean)),
    bold: sorted.some((item) => /bold|black|demi/i.test(item.fontName)),
    y: median(sorted.map((item) => item.y)),
    possibleColumns: wideGaps > 0,
  };
}

function markdownLine(line, bodySize) {
  const text = line.text;
  if (!text) return "";
  if (/^[•●▪◦‣]\s*/.test(text)) return `- ${text.replace(/^[•●▪◦‣]\s*/, "")}`;
  if (/^\d{1,3}[.)]\s+/.test(text)) return text;
  if (line.fontSize >= bodySize * 1.55 && text.length < 180) return `# ${text}`;
  if ((line.fontSize >= bodySize * 1.22 || line.bold) && text.length < 180) return `## ${text}`;
  return text;
}

function groupTextLines(items) {
  const fragments = items
    .filter((item) => typeof item.str === "string" && item.str.trim())
    .map((item) => ({
      str: item.str,
      x: item.transform?.[4] || 0,
      y: item.transform?.[5] || 0,
      width: item.width || 0,
      fontSize: Math.hypot(item.transform?.[0] || 0, item.transform?.[1] || 0),
      fontName: item.fontName || "",
      hasEOL: Boolean(item.hasEOL),
    }))
    .sort((a, b) => b.y - a.y || a.x - b.x);
  const groups = [];
  for (const fragment of fragments) {
    const last = groups[groups.length - 1];
    const tolerance = Math.max(1.8, fragment.fontSize * 0.24);
    if (last && Math.abs(last[0].y - fragment.y) <= tolerance) {
      last.push(fragment);
    } else {
      groups.push([fragment]);
    }
  }
  const lines = groups.map(lineText).filter((line) => line.text);
  const bodySize = median(lines.map((line) => line.fontSize).filter(Boolean)) || 10;
  const possibleTable = lines.filter((line) => line.possibleColumns).length >= 3;
  let previousY = null;
  const formattedLines = lines.map((line) => {
    const gap = previousY === null ? 0 : Math.abs(previousY - line.y);
    previousY = line.y;
    return { markdown: markdownLine(line, bodySize), gap };
  });
  return { lines: formattedLines, possibleTable };
}

function detectImages(operatorList) {
  const imageOperators = [
    OPS.paintImageXObject,
    OPS.paintInlineImageXObject,
    OPS.paintImageMaskXObject,
    OPS.paintImageXObjectRepeat,
    OPS.paintImageMaskXObjectRepeat,
  ].filter((operator) => operator !== undefined);
  return operatorList.fnArray.some((operator) => imageOperators.includes(operator));
}

async function findPdfIds(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map(async (entry) => {
    const itemPath = path.join(directory, entry.name);
    if (entry.isDirectory()) return findPdfIds(itemPath);
    if (!entry.isFile() || !entry.name.toLowerCase().endsWith(".pdf")) return [];
    return [path.relative(pdfRoot, itemPath).split(path.sep).join("/")];
  }));
  return nested.flat();
}

let previousManifest = { materials: [] };
try {
  previousManifest = JSON.parse(await readFile(manifestPath, "utf8"));
} catch {
  // The first run starts with an empty conversion cache.
}
const previousById = new Map(previousManifest.materials.map((record) => [record.id, record]));
const catalog = JSON.parse(await readFile(catalogPath, "utf8"));
const sourceIds = new Set(await findPdfIds(pdfRoot));
const manifest = { generatedAt: new Date().toISOString(), materials: [] };
const materialsToConvert = catalog
  .filter((material) => !requestedId || material.id === requestedId)
  .slice(0, requestedLimit);

for (let index = 0; index < materialsToConvert.length; index += 1) {
  const material = materialsToConvert[index];
  const sourcePath = path.join(pdfRoot, ...material.sourcePath.split("/"));
  const previous = previousById.get(material.id);
  const sourceInfo = await stat(sourcePath).catch(() => null);
  if (!sourceIds.has(material.sourcePath) || !sourceInfo) {
    manifest.materials.push({
      ...material,
      converterVersion,
      status: "failed",
      reviewNotes: "O PDF de origem não foi encontrado.",
      markdownPath: null,
    });
    continue;
  }

  if (!force && previous?.converterVersion === converterVersion && previous?.sourceSizeBytes === sourceInfo.size && previous?.sourceMtimeMs === sourceInfo.mtimeMs && previous?.status && previous.status !== "failed") {
    const markdownExists = previous.markdownPath
      ? await stat(path.join(markdownRoot, ...previous.markdownPath.split("/"))).then(() => true).catch(() => false)
      : previous.status === "review_required";
    if (markdownExists) {
      manifest.materials.push(previous);
      continue;
    }
  }

  console.log(`[${index + 1}/${materialsToConvert.length}] ${material.institution} / ${material.subject} / ${material.filename}`);
  const pdfBuffer = await readFile(sourcePath);
  const sourceHash = sha256(pdfBuffer);
  let pdfDocument;
  let pdfLoadingTask;
  try {
    pdfLoadingTask = getDocument({
      data: new Uint8Array(pdfBuffer),
      useSystemFonts: true,
      isEvalSupported: false,
      verbosity: 0,
    });
    pdfDocument = await pdfLoadingTask.promise;
    const pageMarkdown = [];
    let emptyPages = 0;
    let pagesWithImages = 0;
    let pagesWithTables = 0;

    for (let pageNumber = 1; pageNumber <= pdfDocument.numPages; pageNumber += 1) {
      const page = await pdfDocument.getPage(pageNumber);
      const content = await page.getTextContent({ includeMarkedContent: true });
      const grouped = groupTextLines(content.items);
      const extractedText = grouped.lines.map((line) => line.markdown).join("\n").trim();
      if (!extractedText) emptyPages += 1;
      if (grouped.possibleTable) pagesWithTables += 1;

      let hasImages = false;
      try {
        hasImages = detectImages(await page.getOperatorList());
      } catch {
        // The source PDF remains available for any unsupported visual content.
      }
      if (hasImages) pagesWithImages += 1;

      let pageText = extractedText || "> Página sem texto extraível; consulte o PDF original.";
      const annotations = await page.getAnnotations();
      const links = annotations.filter((annotation) => annotation.subtype === "Link" && annotation.url);
      if (links.length) {
        pageText += `\n\n### Links\n\n${links.map((annotation, linkIndex) => `- [Link ${linkIndex + 1}](${annotation.url})`).join("\n")}`;
      }
      pageMarkdown.push(`## Página ${pageNumber}\n\n${pageText}`);
      page.cleanup();
    }

    const totalText = pageMarkdown.join("\n\n---\n\n");
    const hasAnyText = pageMarkdown.some((page) => !page.includes("Página sem texto extraível"));
    if (!hasAnyText) {
      manifest.materials.push({
        ...material,
        sourceSha256: sourceHash,
        status: "review_required",
        reviewNotes: "Nenhum texto extraível. OCR não está instalado; o PDF original precisa ser consultado.",
        pageCount: pdfDocument.numPages,
        emptyPages,
        pagesWithImages,
        markdownPath: null,
        markdownSizeBytes: 0,
        sourceMtimeMs: sourceInfo.mtimeMs,
      });
      continue;
    }

    const reviewNotes = [];
    if (emptyPages) reviewNotes.push(`${emptyPages} página(s) sem texto extraível; OCR indisponível.`);
    if (pagesWithImages) reviewNotes.push(`${pagesWithImages} página(s) com imagens/diagramas não extraídos.`);
    if (pagesWithTables) reviewNotes.push(`${pagesWithTables} página(s) com possível estrutura tabular; confira a organização no PDF original.`);
    if (/[∑∫√≤≥≠≈±]|\$[^$]+\$/.test(totalText)) {
      reviewNotes.push("Há fórmulas ou símbolos matemáticos; confira a notação no PDF original.");
    }
    const markdown = `${totalText}\n`;
    const markdownHash = sha256(Buffer.from(markdown, "utf8"));
    const markdownPath = `${markdownHash.slice(0, 2)}/${markdownHash}.md`;
    const outputPath = path.join(markdownRoot, ...markdownPath.split("/"));
    await mkdir(path.dirname(outputPath), { recursive: true });
    if (!(await stat(outputPath).catch(() => null))) {
      await writeFile(outputPath, markdown, "utf8");
    }
    const outputInfo = await stat(outputPath);
    const markdownSizeBytes = outputInfo.size;
    const status = reviewNotes.length ? "review_required" : "converted";
    manifest.materials.push({
      ...material,
      markdownPath,
      sourceSha256: sourceHash,
      status,
      reviewNotes: reviewNotes.join(" "),
      pageCount: pdfDocument.numPages,
      emptyPages,
      pagesWithImages,
      markdownSizeBytes,
      sourceMtimeMs: sourceInfo.mtimeMs,
    });
  } catch (error) {
    manifest.materials.push({
      ...material,
      sourceSha256: sourceHash,
      status: "failed",
      reviewNotes: `Falha na leitura do PDF: ${error.message}`,
      markdownPath: null,
      markdownSizeBytes: 0,
      sourceMtimeMs: sourceInfo.mtimeMs,
    });
  } finally {
    await pdfLoadingTask?.destroy();
    pdfBuffer.fill(0);
  }

  manifest.materials.at(-1).converterVersion = converterVersion;
  await mkdir(path.dirname(manifestPath), { recursive: true });
  await writeFile(manifestPath, JSON.stringify({ ...manifest, generatedAt: new Date().toISOString() }, null, 2), "utf8");
}

await mkdir(path.dirname(manifestPath), { recursive: true });
await writeFile(manifestPath, JSON.stringify({ ...manifest, generatedAt: new Date().toISOString() }, null, 2), "utf8");
const summary = manifest.materials.reduce((counts, material) => {
  counts[material.status] = (counts[material.status] || 0) + 1;
  counts.sourceBytes += material.sourceSizeBytes || 0;
  return counts;
}, { converted: 0, review_required: 0, failed: 0, sourceBytes: 0, markdownBytes: 0 });
const uniqueMarkdown = new Map();
for (const material of manifest.materials) {
  if (material.markdownPath && !uniqueMarkdown.has(material.markdownPath)) {
    uniqueMarkdown.set(material.markdownPath, {
      markdownSizeBytes: material.markdownSizeBytes || 0,
      sourceSizeBytes: material.sourceSizeBytes || 0,
    });
  }
}
summary.markdownFiles = uniqueMarkdown.size;
summary.markdownBytes = [...uniqueMarkdown.values()].reduce((total, item) => total + item.markdownSizeBytes, 0);
summary.markdownSourceBytes = [...uniqueMarkdown.values()].reduce((total, item) => total + item.sourceSizeBytes, 0);
summary.markdownReductionPercent = summary.markdownSourceBytes
  ? Number(((1 - summary.markdownBytes / summary.markdownSourceBytes) * 100).toFixed(2))
  : 0;
summary.localTotalAfterConversionBytes = summary.sourceBytes + summary.markdownBytes;
const reportSections = [
  ["Convertidos", "converted"],
  ["Precisam de revisão", "review_required"],
  ["Falharam", "failed"],
];
const report = [
  "# Relatório de conversão dos materiais",
  "",
  `- Materiais: ${manifest.materials.length}`,
  `- PDFs originais: ${summary.sourceBytes} bytes (mantidos sem alteracao)`,
  `- Arquivos Markdown unicos: ${summary.markdownFiles}`,
  `- Markdown gerado: ${summary.markdownBytes} bytes`,
  `- Redução nas fontes únicas com Markdown: ${summary.markdownReductionPercent}%`,
  `- PDFs + Markdown mantidos no projeto: ${summary.localTotalAfterConversionBytes} bytes`,
  "- A comparação de redução considera apenas materiais com Markdown gerado; os PDFs originais foram mantidos.",
  "- OCR não estava instalado neste ambiente; arquivos com páginas sem texto foram encaminhados para revisão.",
  "",
  ...reportSections.flatMap(([title, status]) => [
    `## ${title} (${summary[status] || 0})`,
    "",
    ...manifest.materials
      .filter((material) => material.status === status)
      .map((material) => `- ${material.title} — ${material.institution} / ${material.subject}${material.reviewNotes ? ` — ${material.reviewNotes}` : ""}`),
    "",
  ]),
];
await writeFile(reportPath, report.join("\n"), "utf8");
console.log(JSON.stringify(summary, null, 2));
