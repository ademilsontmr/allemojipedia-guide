import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";
import toIco from "to-ico";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "..", "public");
const sourcePath = path.join(publicDir, "favicon-source.png");
const canvasSize = 512;
const emojiScale = 0.78;

const trimmed = await sharp(sourcePath).trim({ threshold: 24 }).png().toBuffer();
const { width = 1, height = 1 } = await sharp(trimmed).metadata();
const emojiSize = Math.round(canvasSize * emojiScale);
const resizedEmoji = await sharp(trimmed)
  .resize(emojiSize, emojiSize, {
    fit: "contain",
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  })
  .png()
  .toBuffer();

const left = Math.round((canvasSize - emojiSize) / 2);
const top = Math.round((canvasSize - emojiSize) / 2);

const baseIcon = await sharp({
  create: {
    width: canvasSize,
    height: canvasSize,
    channels: 4,
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  },
})
  .composite([{ input: resizedEmoji, left, top }])
  .png()
  .toBuffer();

const sizes = [
  { name: "favicon-48x48.png", size: 48 },
  { name: "apple-touch-icon.png", size: 180 },
  { name: "icon-192.png", size: 192 },
  { name: "icon-512.png", size: 512 },
];

for (const { name, size } of sizes) {
  await sharp(baseIcon)
    .resize(size, size)
    .png({ compressionLevel: 9, palette: size <= 48 })
    .toFile(path.join(publicDir, name));
  console.log(`Wrote ${name}`);
}

const png48 = await sharp(baseIcon)
  .resize(48, 48)
  .png({ compressionLevel: 9, palette: true })
  .toBuffer();
fs.writeFileSync(path.join(publicDir, "favicon-48x48.png"), png48);

const ico = await toIco([png48]);
fs.writeFileSync(path.join(publicDir, "favicon.ico"), ico);
console.log("Wrote favicon.ico");
