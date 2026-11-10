import { networkInterfaces } from "node:os";
import { spawn } from "node:child_process";
import net from "node:net";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const node = process.execPath;
const pdfServerPath = path.join(root, "scripts", "serve-local-pdfs.mjs");
const expoCliPath = path.join(root, "node_modules", "expo", "bin", "cli");

async function isPortAvailable(port) {
  return new Promise((resolve) => {
    const socket = new net.Socket();
    socket.setTimeout(250);
    socket.once("connect", () => {
      socket.destroy();
      resolve(false);
    });
    socket.once("timeout", () => {
      socket.destroy();
      resolve(true);
    });
    socket.once("error", () => {
      resolve(true);
    });
    socket.connect(port, "localhost");
  });
}

async function findAvailablePort(initialPort, maxAttempts = 25) {
  for (let port = initialPort; port < initialPort + maxAttempts; port += 1) {
    if (await isPortAvailable(port)) {
      return port;
    }
  }
  return initialPort;
}

const pdfPort = await findAvailablePort(Number(process.env.LOCAL_PDF_PORT) || 4317);
const expoPort = await findAvailablePort(Number(process.env.EXPO_PORT) || 8081);
const expoArgs = ["start", "--port", String(expoPort), ...process.argv.slice(2).filter((arg) => !["--port", "-p"].includes(arg))];

function getLocalAddress() {
  const addresses = Object.values(networkInterfaces())
    .flat()
    .filter((address) => address && address.family === "IPv4" && !address.internal)
    .map((address) => address.address);

  return addresses.find((address) => /^192\.168\./.test(address)) ||
    addresses.find((address) => /^10\./.test(address)) ||
    addresses.find((address) => {
      const octets = address.split(".").map(Number);
      return octets[0] === 172 && octets[1] >= 16 && octets[1] <= 31;
    }) ||
    addresses[0] ||
    "127.0.0.1";
}

const pdfServer = spawn(node, [pdfServerPath], {
  cwd: root,
  env: { ...process.env, LOCAL_PDF_PORT: String(pdfPort) },
  stdio: "inherit",
});

let expo = null;
let shuttingDown = false;

function stopChild(child) {
  if (child && child.exitCode === null && child.signalCode === null) {
    child.kill();
  }
}

function shutdown(exitCode = 0) {
  if (shuttingDown) return;
  shuttingDown = true;
  stopChild(expo);
  stopChild(pdfServer);
  process.exitCode = exitCode;
}

async function waitForPdfServer() {
  const healthUrl = `http://127.0.0.1:${pdfPort}/health`;
  const deadline = Date.now() + 20000;

  while (Date.now() < deadline) {
    if (pdfServer.exitCode !== null) {
      throw new Error("O servidor local de PDFs encerrou antes de iniciar.");
    }

    try {
      const response = await fetch(healthUrl);
      if (response.ok) {
        const health = await response.json();
        if (health.status === "ok" && health.pdfCount > 0) return health;
      }
    } catch {
      await new Promise((resolve) => setTimeout(resolve, 250));
    }
  }

  throw new Error(`O servidor local de PDFs não respondeu em ${healthUrl}.`);
}

process.on("SIGINT", () => shutdown(130));
process.on("SIGTERM", () => shutdown(143));
pdfServer.on("error", (error) => {
  console.error(`Não foi possível iniciar o servidor local de PDFs: ${error.message}`);
  shutdown(1);
});
pdfServer.on("exit", (code) => {
  if (!shuttingDown) {
    console.error("O servidor local de PDFs foi encerrado inesperadamente.");
    shutdown(code || 1);
  }
});

try {
  const health = await waitForPdfServer();
  const pdfBaseUrl = `http://${getLocalAddress()}:${pdfPort}`;
  console.log(`PDFs locais prontos: ${health.pdfCount} arquivos em ${pdfBaseUrl}.`);

  expo = spawn(node, [expoCliPath, ...expoArgs], {
    cwd: root,
    env: {
      ...process.env,
      EXPO_PUBLIC_LOCAL_PDF_BASE_URL: pdfBaseUrl,
      EXPO_PUBLIC_LOCAL_PDF_PORT: String(pdfPort),
    },
    stdio: "inherit",
  });
  expo.on("error", (error) => {
    console.error(`Não foi possível iniciar o Expo: ${error.message}`);
    shutdown(1);
  });
  expo.on("exit", (code) => shutdown(code || 0));
} catch (error) {
  console.error(error.message);
  shutdown(1);
}
