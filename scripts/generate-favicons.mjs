import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";
import toIco from "to-ico";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "..", "public");
const svgPath = path.join(publicDir, "favicon.svg");
const svg = fs.readFileSync(svgPath);

const sizes = [
  { name: "favicon-48x48.png", size: 48 },
  { name: "apple-touch-icon.png", size: 180 },
  { name: "icon-192.png", size: 192 },
  { name: "icon-512.png", size: 512 },
];

for (const { name, size } of sizes) {
  await sharp(svg).resize(size, size).png().toFile(path.join(publicDir, name));
  console.log(`Wrote ${name}`);
}

const png48 = fs.readFileSync(path.join(publicDir, "favicon-48x48.png"));
const ico = await toIco([png48]);
fs.writeFileSync(path.join(publicDir, "favicon.ico"), ico);
console.log("Wrote favicon.ico");
