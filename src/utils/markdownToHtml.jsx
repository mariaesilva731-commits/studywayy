function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function safeUrl(value) {
  const url = value.trim();
  return /^(https?:|mailto:|\/|\.\.?\/|#)/i.test(url) ? url : "#";
}

function inlineMarkdown(value) {
  let text = escapeHtml(value);
  text = text.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (_match, alt, url) =>
    `<img src="${escapeHtml(safeUrl(url))}" alt="${alt}" loading="lazy" />`,
  );
  text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_match, label, url) =>
    `<a href="${escapeHtml(safeUrl(url))}" target="_blank" rel="noopener noreferrer">${label}</a>`,
  );
  text = text
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/__([^_]+)__/g, "<strong>$1</strong>")
    .replace(/\*([^*]+)\*/g, "<em>$1</em>")
    .replace(/_([^_]+)_/g, "<em>$1</em>")
    .replace(/\$([^$]+)\$/g, '<span class="formula">$1</span>');
  return text;
}

function isTableDivider(line) {
  return /^\s*\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?\s*$/.test(line);
}

function renderTable(lines) {
  const rows = lines
    .filter((line) => !isTableDivider(line))
    .map((line) => line.trim().replace(/^\||\|$/g, "").split("|").map((cell) => cell.trim()));
  if (!rows.length) return "";
  const header = rows.shift();
  return `<div class="table-scroll"><table><thead><tr>${header.map((cell) => `<th>${inlineMarkdown(cell)}</th>`).join("")}</tr></thead><tbody>${rows.map((row) => `<tr>${header.map((_cell, index) => `<td>${inlineMarkdown(row[index] || "")}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
}

export function markdownToHtml(markdown) {
  const lines = markdown.replace(/\r/g, "").split("\n");
  const html = [];
  let paragraph = [];
  let listType = null;
  let code = null;

  const closeParagraph = () => {
    if (paragraph.length) html.push(`<p>${inlineMarkdown(paragraph.join(" "))}</p>`);
    paragraph = [];
  };
  const closeList = () => {
    if (listType) html.push(`</${listType}>`);
    listType = null;
  };

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    if (line.startsWith("```")) {
      closeParagraph();
      closeList();
      if (code === null) code = [];
      else {
        html.push(`<pre><code>${escapeHtml(code.join("\n"))}</code></pre>`);
        code = null;
      }
      continue;
    }
    if (code !== null) {
      code.push(line);
      continue;
    }

    if (line.includes("|") && index + 1 < lines.length && isTableDivider(lines[index + 1])) {
      closeParagraph();
      closeList();
      const tableLines = [line, lines[index + 1]];
      index += 2;
      while (index < lines.length && lines[index].includes("|")) tableLines.push(lines[index++]);
      index -= 1;
      html.push(renderTable(tableLines));
      continue;
    }

    const heading = line.match(/^(#{1,6})\s+(.+)$/);
    if (heading) {
      closeParagraph();
      closeList();
      const level = heading[1].length;
      html.push(`<h${level}>${inlineMarkdown(heading[2])}</h${level}>`);
      continue;
    }
    if (/^\s*---+\s*$/.test(line)) {
      closeParagraph();
      closeList();
      html.push("<hr />");
      continue;
    }
    const quote = line.match(/^\s*>\s?(.*)$/);
    if (quote) {
      closeParagraph();
      closeList();
      html.push(`<blockquote>${inlineMarkdown(quote[1])}</blockquote>`);
      continue;
    }
    const unordered = line.match(/^\s*[-*+]\s+(.+)$/);
    const ordered = line.match(/^\s*\d+[.)]\s+(.+)$/);
    const list = unordered || ordered;
    if (list) {
      closeParagraph();
      const nextListType = unordered ? "ul" : "ol";
      if (listType !== nextListType) {
        closeList();
        listType = nextListType;
        html.push(`<${listType}>`);
      }
      html.push(`<li>${inlineMarkdown(list[1])}</li>`);
      continue;
    }
    if (!line.trim()) {
      closeParagraph();
      closeList();
      continue;
    }
    closeList();
    paragraph.push(line.trim());
  }

  closeParagraph();
  closeList();
  if (code !== null) html.push(`<pre><code>${escapeHtml(code.join("\n"))}</code></pre>`);
  return html.join("\n");
}

export function markdownDocumentHtml(markdown) {
  return `<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1" /><meta charset="utf-8" /><style>
    :root{color-scheme:light}*{box-sizing:border-box}body{margin:0;padding:24px 20px 48px;background:#fff;color:#17233d;font:16px/1.72 system-ui,-apple-system,"Segoe UI",sans-serif;overflow-wrap:anywhere}article{max-width:900px;margin:0 auto}h1,h2,h3,h4,h5,h6{line-height:1.3;color:#111b35;margin:1.7em 0 .65em}h1{font-size:1.8rem}h2{font-size:1.45rem;border-bottom:1px solid #e3eaf5;padding-bottom:.35em}h3{font-size:1.2rem}p{margin:.7em 0}ul,ol{padding-left:1.5em}li{padding:.12em 0}blockquote{margin:1em 0;padding:.65em 1em;border-left:4px solid #7c3aed;background:#f6f4ff;color:#45516a}a{color:#2563eb;text-decoration:underline}img{display:block;max-width:100%;height:auto;margin:1rem auto}hr{border:0;border-top:1px solid #d7e0ee;margin:2em 0}.table-scroll{overflow-x:auto;margin:1.2em 0}table{border-collapse:collapse;width:100%;min-width:480px}th,td{border:1px solid #cbd6e6;padding:.55em .7em;text-align:left;vertical-align:top}th{background:#f1f5fb}pre{overflow-x:auto;background:#111b35;color:#f4f7ff;border-radius:8px;padding:14px;font:13px/1.6 ui-monospace,monospace}code,.formula{font-family:ui-monospace,SFMono-Regular,Consolas,monospace;background:#f1f4fa;border-radius:4px;padding:.1em .25em}.formula{white-space:normal} @media(max-width:600px){body{padding:18px 15px 36px;font-size:15px}h1{font-size:1.55rem}h2{font-size:1.3rem}}
  </style></head><body><article>${markdownToHtml(markdown)}</article></body></html>`;
}
