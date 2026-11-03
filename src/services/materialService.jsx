import { pdfMaterials } from "../data/pdfCatalog.generated";
import { supabase } from "./supabase";

const MATERIALS_TABLE = "studyway_materials";
const MATERIALS_BUCKET = "studyway-materials";
const materialFields = "id, institution, subject, title, filename, source_path, markdown_path, original_storage_path, source_size_bytes, markdown_size_bytes, conversion_status, review_notes";
const markdownCache = new Map();

export async function getMaterials(institution) {
  const { data, error } = await supabase
    .from(MATERIALS_TABLE)
    .select(materialFields)
    .eq("institution", institution)
    .order("title")
    .limit(1000);

  if (!error && data?.length) {
    return { data: data.map(mapMaterial), error: null };
  }

  return {
    data: pdfMaterials.filter((material) => material.institution === institution),
    error: error || null,
  };
}

function mapMaterial(material) {
  return {
    ...material,
    sourcePath: material.source_path ?? material.sourcePath,
    markdownPath: material.markdown_path ?? material.markdownPath,
    originalStoragePath: material.original_storage_path ?? material.originalStoragePath,
    sourceSizeBytes: material.source_size_bytes ?? material.sourceSizeBytes,
    markdownSizeBytes: material.markdown_size_bytes ?? material.markdownSizeBytes,
    conversionStatus: material.conversion_status ?? material.conversionStatus,
    reviewNotes: material.review_notes ?? material.reviewNotes,
  };
}

export async function getMaterialDetails(materialId) {
  const { data, error } = await supabase
    .from(MATERIALS_TABLE)
    .select(materialFields)
    .eq("id", materialId)
    .maybeSingle();
  const fallback = pdfMaterials.find((material) => material.id === materialId) || null;
  const material = data ? mapMaterial(data) : fallback;
  const publishedOriginalPath = data?.original_storage_path || null;
  const originalPdfUrl = publishedOriginalPath
    ? supabase.storage.from(MATERIALS_BUCKET).getPublicUrl(publishedOriginalPath).data.publicUrl
    : null;

  return { data: material ? { ...material, originalPdfUrl } : null, error };
}

export async function loadMaterialMarkdown(material) {
  if (!material?.markdownPath) {
    return {
      data: null,
      error: new Error(material?.conversionStatus === "review_required"
        ? "Este material precisa de revisão e ainda não tem uma versão Markdown disponível."
        : "A versão Markdown deste material ainda não foi publicada no armazenamento."),
    };
  }

  if (markdownCache.has(material.markdownPath)) {
    const cached = markdownCache.get(material.markdownPath);
    markdownCache.delete(material.markdownPath);
    markdownCache.set(material.markdownPath, cached);
    return { data: cached, error: null };
  }

  const { data: file, error } = await supabase.storage
    .from(MATERIALS_BUCKET)
    .download(material.markdownPath);
  if (error) return { data: null, error };

  try {
    const markdown = await file.text();
    if (markdown.length <= 1_500_000) {
      markdownCache.set(material.markdownPath, markdown);
      if (markdownCache.size > 3) markdownCache.delete(markdownCache.keys().next().value);
    }
    return { data: markdown, error: null };
  } catch (readError) {
    return { data: null, error: readError };
  }
}
