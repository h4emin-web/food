const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const outDir = path.join(root, "public");
const includeExtensions = new Set([
  ".html",
  ".css",
  ".js",
  ".json",
  ".txt",
  ".xml",
  ".svg",
  ".png",
  ".ico",
  ".webmanifest",
]);
const includeFiles = new Set(["robots.txt", "sitemap.xml", "rss.xml"]);
const excludeDirs = new Set([".git", ".vercel", ".github", "node_modules", "public", "scripts"]);

function resetOutput() {
  fs.rmSync(outDir, { recursive: true, force: true });
  fs.mkdirSync(outDir, { recursive: true });
}

function copyStaticFiles(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const source = path.join(dir, entry.name);
    const relative = path.relative(root, source);
    if (entry.isDirectory()) {
      if (!excludeDirs.has(entry.name)) copyStaticFiles(source);
      continue;
    }

    const ext = path.extname(entry.name);
    if (!includeExtensions.has(ext) && !includeFiles.has(entry.name)) continue;

    const target = path.join(outDir, relative);
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.copyFileSync(source, target);
  }
}

resetOutput();
copyStaticFiles(root);
