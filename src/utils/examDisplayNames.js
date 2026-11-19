function getFilename(filename) {
  return String(filename || "")
    .replace(/\.pdf$/i, "")
    .trim();
}

function cleanFilename(filename) {
  return getFilename(filename).replace(/[+_]+/g, " ").replace(/\s+/g, " ");
}

function getSubjectLabel(subject) {
  const labels = {
    biologia: "Biologia",
    fisica: "Física",
    geografia: "Geografia",
    historia: "História",
    matematica: "Matemática",
    portugues: "Português",
    quimica: "Química",
  };
  return labels[String(subject || "").toLocaleLowerCase("pt-BR")] || subject;
}

function getFuvestTitle(filename) {
  let match = filename.match(/^fuvest-2026-1-fase-prova-(\d+)$/i);
  if (match) return `FUVEST 2026 • 1ª fase • Prova ${match[1]}`;

  if (/^gabarito-fuvest-2026-1-fase$/i.test(filename)) {
    return "FUVEST 2026 • 1ª fase • Gabarito";
  }

  match = filename.match(/^prova-fuvest-2-fase-2026-dia-(\d+)$/i);
  if (match) return `FUVEST 2026 • 2ª fase • Dia ${match[1]}`;
  if (/^prova-fuvest-2-fase-2026-redacao$/i.test(filename)) {
    return "FUVEST 2026 • 2ª fase • Redação";
  }

  match = filename.match(
    /^respostas-esperadas-fuvest-2-fase-2026-(.+)$/i,
  );
  if (match) {
    const subject = match[1]
      .replace(/-/g, " ")
      .replace(/\b\w/g, (letter) => letter.toLocaleUpperCase("pt-BR"));
    return `FUVEST 2026 • 2ª fase • Respostas esperadas • ${subject}`;
  }

  match = filename.match(/^fuvest2025_primeira_fase_prova_v(\d+)$/i);
  if (match) return `FUVEST 2025 • 1ª fase • Versão ${match[1]}`;

  match = filename.match(/^fuvest2025_prova_2fase_dia(\d+)$/i);
  if (match) return `FUVEST 2025 • 2ª fase • Dia ${match[1]}`;

  return null;
}

export function getExamDisplayName(material) {
  const filename = getFilename(material.filename);
  const displayFilename = cleanFilename(filename);
  const sourcePath = String(material.sourcePath || "").replace(/\\/g, "/");

  if (material.institution === "ENEM") {
    const match = filename.match(/^2025_(PV|GB)_impresso_D(\d)_CD(\d+)$/i);
    if (match) {
      const examType = match[1].toUpperCase() === "GB" ? "Gabarito" : "Prova";
      return `ENEM 2025 • ${match[2]}º dia • Caderno ${match[3]} • ${examType}`;
    }
    return null;
  }

  if (material.institution === "USP") {
    const fuvestTitle = getFuvestTitle(filename);
    if (fuvestTitle) return fuvestTitle;
    if (sourcePath.toLocaleLowerCase("pt-BR").includes("/fuvest/")) {
      return `${getSubjectLabel(material.subject) || "FUVEST"} • ${displayFilename}`;
    }
    return null;
  }

  if (material.institution === "UNESP") {
    if (/^prova-unesp-2024-1-fase$/i.test(filename)) {
      return "UNESP 2024 • 1ª fase • Prova";
    }
    if (/^gabarito-unesp-2024$/i.test(filename)) {
      return "UNESP 2024 • 1ª fase • Gabarito";
    }
    if (/^prova-unesp-2024-meio-ano$/i.test(filename)) {
      return "UNESP 2024 • Meio do ano • Prova";
    }
    if (/^gabarito-unesp-2024-meio-ano$/i.test(filename)) {
      return "UNESP 2024 • Meio do ano • Gabarito";
    }
    if (/^caderno-provas-1-fase-unesp-2025$/i.test(filename)) {
      return "UNESP 2025 • 1ª fase • Prova";
    }
    if (/^gabarito-1-fase-unesp-2025$/i.test(filename)) {
      return "UNESP 2025 • 1ª fase • Gabarito";
    }
  }

  return null;
}

export function getExamDisplaySubtitle(material) {
  const institution =
    material.institution === "USP" &&
    String(material.sourcePath || "")
      .toLocaleLowerCase("pt-BR")
      .includes("/fuvest/")
      ? "USP • FUVEST"
      : material.institution;
  return `${institution} • ${getSubjectLabel(material.subject)}`;
}

export function getExamDisplaySubject(material) {
  return getSubjectLabel(material.subject);
}
