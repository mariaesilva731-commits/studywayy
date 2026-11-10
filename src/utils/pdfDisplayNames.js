import { pdfMaterials } from "../data/pdfCatalog.generated";
import { enemDisplayTitles } from "../data/enemDisplayTitles";

function cleanText(value) {
  return String(value || "").replace(/\s+/g, " ").trim();
}

function getFileName(material) {
  const filename = String(material?.filename || "")
    .split(/[\\/]/)
    .pop()
    .replace(/\.pdf$/i, "")
    .replace(/[+_]+/g, " ")
    .replace(/\s+/g, " ")
    .replace(/^[\s.-]+|[\s.-]+$/g, "");

  return cleanText(filename);
}

function isUuid(value) {
  return /^[\da-f]{8}-[\da-f-]{27,}$/i.test(value);
}

function isGenericTitle(value) {
  return /^(?:untitled|document|documento|scan)(?:\s+\d+)?$/i.test(value) ||
    /^(?:documento|document|scan)\s+\d+\s*[•-]/i.test(value);
}

export function getPdfDisplayName(material) {
  const title = cleanText(material?.title);
  const filename = getFileName(material);

  if (material?.institution === "ENEM") {
    return enemDisplayTitles[material.filename] || `Conteúdo de ${material.subject || "estudo"}`;
  }

  if (filename && !isUuid(filename) && !isGenericTitle(filename)) {
    return filename;
  }
  if (title && !isUuid(title) && !isGenericTitle(title)) return title;

  const documentNumber = title.match(/^(?:documento|document|scan)\s+(\d+)/i)?.[1];
  if (documentNumber) return `Documento ${documentNumber} • ${material?.subject || "Material"}`;

  return `Material de ${material?.subject || "estudo"}`;
}

export function getPdfDisplaySubtitle(material) {
  if (material?.institution === "ENEM") {
    return `${cleanText(material.subject || "ENEM").toLocaleUpperCase("pt-BR")} • Arquivo PDF`;
  }

  const filename = getFileName(material);
  const displayName = getPdfDisplayName(material);
  const fileLabel = filename && !isUuid(filename) && filename !== displayName
    ? filename
    : "Arquivo PDF";
  return `${material?.subject || "Material"} • ${fileLabel}`;
}
