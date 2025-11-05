const fs = require("fs");
const path = require("path");

const source = ".";
const target = "./dist";

function copyFiles(src, dest) {
  if (!fs.existsSync(dest)) fs.mkdirSync(dest);
  const files = fs.readdirSync(src);
  for (const file of files) {
    if (file === "dist" || file === "ci" || file === "node_modules") continue;
    const srcPath = path.join(src, file);
    const destPath = path.join(dest, file);
    const stats = fs.statSync(srcPath);
    if (stats.isDirectory()) copyFiles(srcPath, destPath);
    else fs.copyFileSync(srcPath, destPath);
  }
}

if (fs.existsSync(target)) fs.rmSync(target, { recursive: true });
copyFiles(source, target);
console.log("🧱 Build complete. Files copied to /dist folder.");
