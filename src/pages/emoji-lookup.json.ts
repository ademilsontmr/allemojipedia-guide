import type { APIRoute } from "astro";
import { emojiPages, emojis, getCategory, addedLabel } from "@/lib/emoji";

// Data for the "What does this emoji mean?" tool.
// e: [emoji, name, slug, category name, added, summary or "" when the emoji has no meaning page]
// s: skin-tone variant -> index of its base emoji in e
export const GET: APIRoute = async () => {
  const pages = await emojiPages();
  const e = emojis.map((x) => [x.emoji, x.name, x.slug, getCategory(x.category).name, addedLabel(x.version, x.year), pages.get(x.slug)?.data.summary ?? ""]);
  const s: Record<string, number> = {};
  emojis.forEach((x, i) => x.skins.forEach((v) => { s[v.emoji] = i; }));
  return new Response(JSON.stringify({ e, s }), { headers: { "Content-Type": "application/json; charset=utf-8" } });
};
