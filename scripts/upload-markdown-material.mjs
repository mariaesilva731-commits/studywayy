import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createClient } from "@supabase/supabase-js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
try {
  process.loadEnvFile?.(path.join(root, ".env"));
} catch {
  // Environment variables may also be supplied by the shell.
}

const args = new Map(process.argv.slice(2).map((argument) => {
  const separator = argument.indexOf("=");
  return separator < 0
    ? [argument.replace(/^--/, ""), "true"]
    : [argument.slice(2, separator), argument.slice(separator + 1)];
}));
const fileArgument = args.get("file");
const title = args.get("title")?.trim();
const subject = args.get("subject")?.trim();
const institution = args.get("institution")?.trim();
const url = process.env.EXPO_PUBLIC_SUPABASE_URL || "https://vrprmzhkumngjusujith.supabase.co";
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const bucket = "studyway-materials";

if (!fileArgument || !title || !subject || !institution) {
  throw new Error("Uso: npm run upload:markdown -- --file=CAMINHO.md --title=Titulo --subject=Disciplina --institution=ENEM");
}
if (!serviceRoleKey) {
  throw new Error("Defina SUPABASE_SERVICE_ROLE_KEY em .env. Nunca use essa chave no app.");
}
if (!fileArgument.toLowerCase().endsWith(".md")) {
  throw new Error("O arquivo informado precisa ter extensão .md.");
}

const sourcePath = path.resolve(root, fileArgument);
if (!sourcePath.startsWith(`${root}${path.sep}`)) {
  throw new Error("O arquivo precisa estar dentro da pasta do projeto.");
}
const markdown = await readFile(sourcePath);
if (!markdown.length) throw new Error("O arquivo Markdown está vazio.");

const sha = createHash("sha256").update(markdown).digest("hex");
const slug = (value) => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const markdownPath = `manual/${sha.slice(0, 2)}/${sha}.md`;
const id = `manual/${slug(institution)}/${slug(subject)}/${sha.slice(0, 16)}`;
const supabase = createClient(url, serviceRoleKey, {
  auth: { persistSession: false, autoRefreshToken: false },
});

const upload = await supabase.storage.from(bucket).upload(markdownPath, markdown, {
  contentType: "text/markdown; charset=utf-8",
  upsert: true,
});
if (upload.error) throw upload.error;

const now = new Date().toISOString();
const result = await supabase.from("studyway_materials").upsert({
  id,
  institution,
  subject,
  title,
  filename: path.basename(sourcePath),
  source_path: `manual/${path.relative(root, sourcePath).split(path.sep).join("/")}`,
  markdown_path: markdownPath,
  original_storage_path: null,
  source_size_bytes: 0,
  markdown_size_bytes: markdown.byteLength,
  source_sha256: sha,
  conversion_status: "converted",
  review_notes: null,
  converted_at: now,
  updated_at: now,
}, { onConflict: "id" });
if (result.error) throw result.error;
console.log(`Material cadastrado: ${title} (${institution} / ${subject})`);
