import { readFile, readdir, stat, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import { getDocument } from "pdfjs-dist/legacy/build/pdf.mjs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const pdfRoot = path.join(projectRoot, "PDF's");
const titleCachePath = path.join(projectRoot, "pdf-catalog-titles.json");
const outputPath = path.join(projectRoot, "src", "data", "pdfCatalog.generated.js");
const jsonOutputPath = path.join(projectRoot, "src", "data", "pdfCatalog.generated.json");
const collections = [
  ["ENEM", path.join(pdfRoot, "Arquivos ENEM")],
  ["UNESP", path.join(pdfRoot, "Arquivos UNESP")],
  ["USP", path.join(pdfRoot, "Arquivos USP")],
];
let titleCache = {};

try {
  titleCache = JSON.parse(await readFile(titleCachePath, "utf8"));
} catch {
  titleCache = {};
}

async function findPdfs(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map(async (entry) => {
      const entryPath = path.join(directory, entry.name);
      if (entry.isDirectory()) return findPdfs(entryPath);
      return entry.isFile() && entry.name.toLowerCase().endsWith(".pdf")
        ? [entryPath]
        : [];
    }),
  );
  return nested.flat();
}

function getSubject(directory) {
  return path
    .basename(directory)
    .replace(/^pdf['’]s\s*/i, "")
    .replace(/\s+pdf['’]s$/i, "")
    .trim();
}

function getTitle(filename) {
  return path
    .basename(filename, path.extname(filename))
    .replace(/[+_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function isUsefulTitle(value) {
  const title = value?.replace(/\s+/g, " ").trim();
  return Boolean(
    title &&
      title.length > 2 &&
      !/^[\da-f]{8}-[\da-f-]{27,}$/i.test(title) &&
    !/^(untitled|document\s*\d*|scan\s*\d*|freeimages.*)$/i.test(title),
  );
}

function firstTextHeading(items) {
  const parts = items
    .map((item) => item.str?.replace(/\s+/g, " ").trim())
    .filter(
      (item) =>
        item &&
        item.length > 2 &&
        !/^\d{1,4}$/.test(item) &&
        !/^(freeimages|www\.|https?:|page\s+\d+)/i.test(item),
    );
  const heading = parts.slice(0, 5).join(" ").replace(/\s+/g, " ").trim();
  if (!isUsefulTitle(heading)) return null;
  return heading.length > 110 ? `${heading.slice(0, 107).trimEnd()}...` : heading;
}

async function getPdfTitle(filePath, institution, subject, fallbackIndex) {
  const relativeSource = path.relative(pdfRoot, filePath);
  const cacheKey = `${relativeSource}|title-v2`;
  const fileInfo = await stat(filePath);
  const cached = titleCache[cacheKey];
  if (
    cached?.size === fileInfo.size &&
    cached?.mtimeMs === fileInfo.mtimeMs &&
    cached?.title
  ) {
    return cached.title;
  }

  let title = getTitle(filePath);
  if (!isUsefulTitle(title)) title = null;
  try {
    if (!title) {
      const data = new Uint8Array(await readFile(filePath));
      const document = await getDocument({
        data,
        useSystemFonts: true,
        isEvalSupported: false,
        verbosity: 0,
      }).promise;
      const metadata = await document.getMetadata();
      if (isUsefulTitle(metadata.info?.Title)) {
        title = metadata.info.Title.replace(/\s+/g, " ").trim();
      }
      if (!title) {
        const page = await document.getPage(1);
        title = firstTextHeading((await page.getTextContent()).items);
      }
    }
  } catch {
    title = title || null;
  }

  if (!title) {
    const filenameTitle = getTitle(filePath);
    title = isUsefulTitle(filenameTitle)
      ? filenameTitle
      : `Documento ${String(fallbackIndex).padStart(2, "0")} • ${subject}`;
  }

  titleCache[cacheKey] = {
    size: fileInfo.size,
    mtimeMs: fileInfo.mtimeMs,
    title,
  };
  return title;
}

function slug(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

const records = [];
for (const [institution, directory] of collections) {
  const files = (await findPdfs(directory)).sort((first, second) =>
    first.localeCompare(second, "pt-BR"),
  );
  let fallbackIndex = 0;
  for (const filePath of files) {
    const subject = getSubject(path.dirname(filePath));
    fallbackIndex += 1;
    const title = await getPdfTitle(
      filePath,
      institution,
      subject,
      fallbackIndex,
    );
    const relativeSource = path.relative(pdfRoot, filePath);
    const fileInfo = await stat(filePath);
    const digest = createHash("sha1").update(relativeSource).digest("hex").slice(0, 12);
    records.push({
      id: `${institution}/${subject}/${path.basename(filePath)}`,
      institution,
      subject,
      title,
      filename: path.basename(filePath),
      sourcePath: relativeSource.split(path.sep).join("/"),
      markdownPath: `${slug(institution)}/${slug(subject)}/${digest}.md`,
      originalStoragePath: `${slug(institution)}/${slug(subject)}/${digest}.pdf`,
      sourceSizeBytes: fileInfo.size,
    });
  }
}

records.sort((first, second) =>
  `${first.institution}/${first.subject}/${first.title}`.localeCompare(
    `${second.institution}/${second.subject}/${second.title}`,
    "pt-BR",
  ),
);

const serializedRecords = JSON.stringify(records, null, 2);
const output = `export const pdfMaterials = ${JSON.stringify(records)};\n`;

await writeFile(outputPath, output, "utf8");
await writeFile(jsonOutputPath, serializedRecords, "utf8");
await writeFile(titleCachePath, JSON.stringify(titleCache, null, 2), "utf8");
console.log(`Generated ${records.length} lightweight material entries.`);
