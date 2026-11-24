import { Platform } from "react-native";
import { pdfMaterials } from "../data/pdfCatalog.generated";

const localPdfPort = process.env.EXPO_PUBLIC_LOCAL_PDF_PORT || "4317";
const FREE_MATERIALS_PER_SUBJECT = 2;

function getLocalPdfBaseUrl() {
  if (Platform.OS === "web" && typeof window !== "undefined") {
    return `${window.location.protocol}//${window.location.hostname}:${localPdfPort}`;
  }

  if (process.env.EXPO_PUBLIC_LOCAL_PDF_BASE_URL) {
    return process.env.EXPO_PUBLIC_LOCAL_PDF_BASE_URL.replace(/\/+$/, "");
  }

  return null;
}

function sortMaterials(materials) {
  return materials.sort((first, second) => {
    const institutionOrder = first.institution.localeCompare(
      second.institution,
      "pt-BR",
    );
    if (institutionOrder !== 0) return institutionOrder;
    return first.institution === "ENEM"
      ? first.subject.localeCompare(second.subject, "pt-BR") ||
          first.sourcePath.localeCompare(second.sourcePath, "pt-BR")
      : first.title.localeCompare(second.title, "pt-BR");
  });
}

function getFreeMaterialIds(institution) {
  const materialsBySubject = new Map();
  sortMaterials(
    pdfMaterials.filter((material) => material.institution === institution),
  ).forEach((material) => {
    const subjectMaterials = materialsBySubject.get(material.subject) || [];
    if (subjectMaterials.length < FREE_MATERIALS_PER_SUBJECT) {
      subjectMaterials.push(material.id);
      materialsBySubject.set(material.subject, subjectMaterials);
    }
  });
  return new Set([...materialsBySubject.values()].flat());
}

export function getFreeMaterials(institution) {
  const freeMaterialIds = getFreeMaterialIds(institution);
  return sortMaterials(
    pdfMaterials.filter(
      (material) =>
        material.institution === institution && freeMaterialIds.has(material.id),
    ),
  );
}

export function getProMaterials() {
  const freeMaterialIds = new Set(
    [...new Set(pdfMaterials.map((material) => material.institution))].flatMap(
      (institution) => [...getFreeMaterialIds(institution)],
    ),
  );
  return sortMaterials(
    pdfMaterials.filter((material) => !freeMaterialIds.has(material.id)),
  );
}

export async function getMaterials(institution, isPro = false) {
  const data = isPro
    ? sortMaterials(
        pdfMaterials.filter((material) => material.institution === institution),
      )
    : getFreeMaterials(institution);
  return { data, error: null };
}

export async function getMaterialDetails(materialId) {
  const material = pdfMaterials.find((item) => item.id === materialId) || null;
  const pdfBaseUrl = getLocalPdfBaseUrl();
  const originalPdfUrl = material && pdfBaseUrl
    ? `${pdfBaseUrl}/pdf?path=${encodeURIComponent(material.sourcePath)}`
    : null;
  const viewerUrl = material && pdfBaseUrl
    ? `${pdfBaseUrl}/viewer?path=${encodeURIComponent(material.sourcePath)}`
    : null;

  return {
    data: material ? { ...material, originalPdfUrl, viewerUrl } : null,
    error: null,
  };
}
