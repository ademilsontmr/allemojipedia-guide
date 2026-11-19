// Shared by Astro pages and scripts/build-images.mjs.
// Twemoji graphics (c) Twitter, Inc and other contributors, CC-BY 4.0 (https://github.com/jdecked/twemoji).
import { existsSync } from "node:fs";

export const TWEMOJI_DIR = "node_modules/@twemoji/svg";

/** Twemoji file name for an emojibase hexcode: FE0F is dropped unless the sequence has a ZWJ. */
export function twemojiFile(hex) {
  let parts = hex.toLowerCase().split("-");
  if (!parts.includes("200d")) parts = parts.filter((p) => p !== "fe0f");
  return `${TWEMOJI_DIR}/${parts.join("-")}.svg`;
}

export const hasTwemoji = (hex) => existsSync(twemojiFile(hex));
export const emojiImagePath = (slug) => `/img/emoji/${slug}.svg`;
export const ogPath = (kind, slug) => `/og/${kind}/${slug}.png`;
