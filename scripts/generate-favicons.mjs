import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { createCanvas } from "@napi-rs/canvas";
import sharp from "sharp";
import toIco from "to-ico";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "..", "public");
const canvasSize = 512;

const renderEmojiIcon = () => {
  const canvas = createCanvas(canvasSize, canvasSize);
  const ctx = canvas.getContext("2d");

  ctx.clearRect(0, 0, canvasSize, canvasSize);
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font =
    '380px "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", "EmojiOne Color", sans-serif';
  ctx.fillText("\u{1F4DA}", canvasSize / 2, canvasSize / 2 + 18);

  return canvas.toBuffer("image/png");
};

const baseIcon = renderEmojiIcon();

const sizes = [
  { name: "favicon-48x48.png", size: 48 },
  { name: "apple-touch-icon.png", size: 180 },
  { name: "icon-192.png", size: 192 },
  { name: "icon-512.png", size: 512 },
];

for (const { name, size } of sizes) {
  await sharp(baseIcon)
    .resize(size, size, { kernel: sharp.kernel.lanczos3 })
    .png({ compressionLevel: 9 })
    .toFile(path.join(publicDir, name));
  console.log(`Wrote ${name}`);
}

const png48 = await sharp(baseIcon)
  .resize(48, 48, { kernel: sharp.kernel.lanczos3 })
  .png()
  .toBuffer();
fs.writeFileSync(path.join(publicDir, "favicon-48x48.png"), png48);

const png32 = await sharp(baseIcon).resize(32, 32, { kernel: sharp.kernel.lanczos3 }).png().toBuffer();
const ico = await toIco([png48, png32]);
fs.writeFileSync(path.join(publicDir, "favicon.ico"), ico);
console.log("Wrote favicon.ico");
