import { Platform } from "react-native";
import { pdfMaterials } from "../data/pdfCatalog.generated";

const localPdfPort = process.env.EXPO_PUBLIC_LOCAL_PDF_PORT || "4317";

function getLocalPdfBaseUrl() {
  if (process.env.EXPO_PUBLIC_LOCAL_PDF_BASE_URL) {
    return process.env.EXPO_PUBLIC_LOCAL_PDF_BASE_URL.replace(/\/+$/, "");
  }

  if (Platform.OS === "web" && typeof window !== "undefined") {
    return `${window.location.protocol}//${window.location.hostname}:${localPdfPort}`;
  }

  return null;
}

export async function getMaterials(institution) {
  const data = pdfMaterials
    .filter((material) => material.institution === institution)
    .sort((first, second) => institution === "ENEM"
      ? first.subject.localeCompare(second.subject, "pt-BR") ||
        first.sourcePath.localeCompare(second.sourcePath, "pt-BR")
      : first.title.localeCompare(second.title, "pt-BR"));
  return { data, error: null };
}

export async function getMaterialDetails(materialId) {
  const material = pdfMaterials.find((item) => item.id === materialId) || null;
  const pdfBaseUrl = getLocalPdfBaseUrl();
  const originalPdfUrl = material && pdfBaseUrl
    ? `${pdfBaseUrl}/pdf?path=${encodeURIComponent(material.sourcePath)}`
    : null;

  return {
    data: material ? { ...material, originalPdfUrl } : null,
    error: null,
  };
}
