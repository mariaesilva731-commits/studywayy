import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createClient } from "@supabase/supabase-js";

try {
  process.loadEnvFile?.(path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", ".env"));
} catch {
  // Environment variables can also be supplied by the shell or deployment host.
}

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const manifestPath = path.join(root, "materials", "conversion-manifest.json");
const markdownRoot = path.join(root, "materials", "markdown");
const pdfRoot = path.join(root, "PDF's");
const url = process.env.EXPO_PUBLIC_SUPABASE_URL || "https://vrprmzhkumngjusujith.supabase.co";
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const includeOriginals = process.argv.includes("--include-originals");
const bucket = "studyway-materials";

if (!serviceRoleKey) {
  throw new Error("Defina SUPABASE_SERVICE_ROLE_KEY em .env para executar o envio administrativo. Nunca use essa chave no app.");
}

const supabase = createClient(url, serviceRoleKey, {
  auth: { persistSession: false, autoRefreshToken: false },
});
const manifest = JSON.parse(await readFile(manifestPath, "utf8"));
const counts = { uploadedMarkdown: 0, uploadedOriginals: 0, metadataRows: 0, skippedMarkdown: 0, failed: 0 };

for (let index = 0; index < manifest.materials.length; index += 1) {
  const material = manifest.materials[index];
  console.log(`[${index + 1}/${manifest.materials.length}] ${material.title}`);

  let markdownPath = null;
  let markdownSizeBytes = 0;
  if (material.markdownPath && material.status !== "failed") {
    const localPath = path.join(markdownRoot, ...material.markdownPath.split("/"));
    try {
      const markdown = await readFile(localPath);
      const upload = await supabase.storage.from(bucket).upload(material.markdownPath, markdown, {
        contentType: "text/markdown; charset=utf-8",
        upsert: true,
      });
      if (upload.error) throw upload.error;
      markdownPath = material.markdownPath;
      markdownSizeBytes = markdown.byteLength;
      counts.uploadedMarkdown += 1;
    } catch (error) {
      console.error(`Markdown não enviado: ${error.message}`);
      counts.failed += 1;
    }
  } else {
    counts.skippedMarkdown += 1;
  }

  let originalStoragePath;
  const { data: existing } = await supabase
    .from("studyway_materials")
    .select("original_storage_path")
    .eq("id", material.id)
    .maybeSingle();
  originalStoragePath = existing?.original_storage_path || null;

  if (includeOriginals) {
    const originalPath = path.join(pdfRoot, ...material.sourcePath.split("/"));
    try {
      const pdf = await readFile(originalPath);
      const upload = await supabase.storage.from(bucket).upload(material.originalStoragePath, pdf, {
        contentType: "application/pdf",
        upsert: true,
      });
      if (upload.error) throw upload.error;
      originalStoragePath = material.originalStoragePath;
      counts.uploadedOriginals += 1;
    } catch (error) {
      console.error(`PDF original não enviado: ${error.message}`);
      counts.failed += 1;
    }
  }

  const row = {
    id: material.id,
    institution: material.institution,
    subject: material.subject,
    title: material.title,
    filename: material.filename,
    source_path: material.sourcePath,
    source_size_bytes: material.sourceSizeBytes || 0,
    markdown_size_bytes: markdownSizeBytes,
    source_sha256: material.sourceSha256 || null,
    markdown_path: markdownPath,
    conversion_status: markdownPath ? material.status : (material.status === "failed" ? "failed" : "review_required"),
    review_notes: material.reviewNotes || null,
    converted_at: markdownPath ? new Date().toISOString() : null,
    updated_at: new Date().toISOString(),
  };
  if (originalStoragePath) row.original_storage_path = originalStoragePath;

  const saved = await supabase.from("studyway_materials").upsert(row, { onConflict: "id" });
  if (saved.error) {
    console.error(`Metadados não salvos: ${saved.error.message}`);
    counts.failed += 1;
  } else {
    counts.metadataRows += 1;
  }
}

console.log(JSON.stringify({ ...counts, originalsIncluded: includeOriginals }, null, 2));
