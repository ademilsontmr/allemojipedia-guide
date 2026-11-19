import type { APIRoute } from "astro";
import { emojiPages, emojis } from "@/lib/emoji";

// Compact index for the client-side search page: [emoji, name, slug, keywords, hasPage]
export const GET: APIRoute = async () => {
  const pages = await emojiPages();
  const rows = emojis.map((e) => [e.emoji, e.name, e.slug, [...e.tags, ...Object.values(e.shortcodes as Record<string, string>)].join(" "), pages.has(e.slug) ? 1 : 0]);
  return new Response(JSON.stringify(rows), { headers: { "Content-Type": "application/json; charset=utf-8" } });
};
