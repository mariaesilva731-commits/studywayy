import { createReadStream } from "node:fs";
import { readFile, stat } from "node:fs/promises";
import { createServer } from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const pdfRoot = path.join(root, "PDF's");
const catalogPath = path.join(root, "src", "data", "pdfCatalog.generated.json");
const port = Number(process.env.LOCAL_PDF_PORT) || 4317;
const catalog = JSON.parse(await readFile(catalogPath, "utf8"));
const allowedPdfPaths = new Set(catalog.map((material) => material.sourcePath));

function sendError(response, statusCode, message) {
  const body = JSON.stringify({ error: message });
  response.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Content-Length": Buffer.byteLength(body),
    "Cache-Control": "no-store",
  });
  response.end(body);
}

const server = createServer(async (request, response) => {
  const requestUrl = new URL(request.url || "/", "http://localhost");
  if (requestUrl.pathname === "/health") {
    const body = JSON.stringify({ status: "ok", pdfCount: allowedPdfPaths.size });
    response.writeHead(200, {
      "Content-Type": "application/json; charset=utf-8",
      "Content-Length": Buffer.byteLength(body),
      "Cache-Control": "no-store",
    });
    response.end(body);
    return;
  }

  if (requestUrl.pathname !== "/pdf" || !["GET", "HEAD"].includes(request.method || "")) {
    sendError(response, request.method === "GET" || request.method === "HEAD" ? 404 : 405, "PDF não encontrado.");
    return;
  }

  const sourcePath = requestUrl.searchParams.get("path");
  if (!sourcePath || !allowedPdfPaths.has(sourcePath)) {
    sendError(response, 404, "PDF não encontrado no catálogo local.");
    return;
  }

  const absolutePath = path.resolve(pdfRoot, ...sourcePath.split("/"));
  if (!absolutePath.startsWith(`${pdfRoot}${path.sep}`)) {
    sendError(response, 404, "PDF não encontrado no catálogo local.");
    return;
  }

  let fileInfo;
  try {
    fileInfo = await stat(absolutePath);
  } catch (error) {
    if (error.code === "ENOENT") {
      sendError(response, 404, "Arquivo PDF não encontrado na pasta local.");
      return;
    }
    sendError(response, 500, "Não foi possível acessar o arquivo PDF local.");
    return;
  }

  const headers = {
    "Content-Type": "application/pdf",
    "Accept-Ranges": "bytes",
    "Cache-Control": "no-store",
    "X-Content-Type-Options": "nosniff",
    "Content-Disposition": `inline; filename*=UTF-8''${encodeURIComponent(path.basename(absolutePath))}`,
  };
  let start = 0;
  let end = fileInfo.size - 1;
  let statusCode = 200;
  const range = request.headers.range;

  if (range) {
    const match = /^bytes=(\d*)-(\d*)$/.exec(range);
    if (!match || (!match[1] && !match[2])) {
      response.writeHead(416, { ...headers, "Content-Range": `bytes */${fileInfo.size}` });
      response.end();
      return;
    }

    if (!match[1]) {
      const suffixLength = Number(match[2]);
      start = Math.max(fileInfo.size - suffixLength, 0);
    } else {
      start = Number(match[1]);
      end = match[2] ? Math.min(Number(match[2]), end) : end;
    }

    if (!Number.isSafeInteger(start) || !Number.isSafeInteger(end) || start > end || start >= fileInfo.size) {
      response.writeHead(416, { ...headers, "Content-Range": `bytes */${fileInfo.size}` });
      response.end();
      return;
    }

    statusCode = 206;
    headers["Content-Range"] = `bytes ${start}-${end}/${fileInfo.size}`;
  }

  headers["Content-Length"] = end - start + 1;
  response.writeHead(statusCode, headers);
  if (request.method === "HEAD") {
    response.end();
    return;
  }

  const stream = createReadStream(absolutePath, { start, end });
  stream.on("error", () => response.destroy());
  stream.pipe(response);
});

server.on("error", (error) => {
  console.error(`Não foi possível iniciar o servidor de PDFs na porta ${port}: ${error.message}`);
  process.exitCode = 1;
});

server.listen(port, "0.0.0.0", () => {
  console.log(`Servindo ${allowedPdfPaths.size} PDFs locais na porta ${port}.`);
});

function closeServer() {
  server.close(() => process.exit(0));
}

process.on("SIGINT", closeServer);
process.on("SIGTERM", closeServer);
