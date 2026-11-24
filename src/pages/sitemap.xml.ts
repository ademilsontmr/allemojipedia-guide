import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { SITE, abs } from "@/lib/site";
import { emojiPages, categories, emojiUrl, categoryUrl, getEmoji, getEmojiByChar } from "@/lib/emoji";
import { hasTwemoji, emojiImagePath, ogPath } from "@/lib/twemoji.mjs";
import { allPosts, postUrl } from "@/lib/blog";

// One flat sitemap. lastmod is the real content date of each page, never the build date.
export const GET: APIRoute = async () => {
  const pages = await emojiPages();
  const guides = await getCollection("guides");
  const symbolSets = await getCollection("symbols");
  const posts = await allPosts();
  const iso = (d: Date) => d.toISOString().slice(0, 10);
  const postDates = posts.map((p) => iso(p.data.updatedDate ?? p.data.pubDate));
  const emojiDates = [...pages.values()].map((e) => e.data.updated ?? e.data.published ?? SITE.launched);
  const guideDates = guides.map((g) => iso(g.data.updatedDate ?? g.data.pubDate));
  const latest = (dates: string[]) => dates.reduce((a, b) => (a > b ? a : b), SITE.launched);
  const urls: [string, string][] = [
    ["/", latest([...emojiDates, ...guideDates])],
    ["/emojis/", latest(emojiDates)],
    ["/categories/", SITE.launched],
    ...categories.map((c): [string, string] => [categoryUrl(c.slug), latest([...pages.values()].filter((e) => getEmoji(e.data.slug)?.category === c.slug).map((e) => e.data.updated ?? e.data.published ?? SITE.launched))]),
    ...[...pages.values()].map((e): [string, string] => [emojiUrl(e.data.slug), e.data.updated ?? e.data.published ?? SITE.launched]),
    ["/guides/", latest(guideDates)],
    ...(posts.length ? [["/blog/", latest(postDates)] as [string, string]] : []),
    ...posts.map((p): [string, string] => [postUrl(p), iso(p.data.updatedDate ?? p.data.pubDate)]),
    ...guides.map((g): [string, string] => [`/guides/${g.id}/`, iso(g.data.updatedDate ?? g.data.pubDate)]),
    ["/what-does-this-emoji-mean/", "2026-11-24"],
    ...symbolSets.map((x): [string, string] => [`/${x.id}/`, x.data.updated ?? x.data.published]),
    ["/emoji-copy-and-paste/", SITE.launched],
    ["/flag-emoji-quiz/", SITE.launched],
    ["/about/", SITE.launched],
    ["/editorial-policy/", SITE.launched],
    ["/contact/", SITE.launched],
    ["/privacy/", SITE.launched],
  ];
  // Image sitemap entries: the social card and, for emoji pages, the Twemoji drawing. Only files the
  // image build (scripts/build-images.mjs) really writes are listed.
  const images = new Map<string, string[]>();
  for (const e of pages.values()) { const x = getEmoji(e.data.slug); if (x && hasTwemoji(x.hex)) images.set(emojiUrl(x.slug), [ogPath("emojis", x.slug), emojiImagePath(x.slug)]); }
  for (const g of guides) { const h = getEmojiByChar(g.data.heroEmoji); if (h && hasTwemoji(h.hex)) images.set(`/guides/${g.id}/`, [ogPath("guides", g.id)]); }
  for (const p of posts) images.set(postUrl(p), [`/og/blog/${p.id}.png`]);
  images.set("/what-does-this-emoji-mean/", ["/og/pages/what-does-this-emoji-mean.png"]);
  const imgXml = (p: string) => (images.get(p) ?? []).map((i) => `<image:image><image:loc>${abs(i)}</image:loc></image:image>`).join("");
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${urls
    .map(([p, d]) => `  <url><loc>${abs(p)}</loc><lastmod>${d}</lastmod>${imgXml(p)}</url>`).join("\n")}\n</urlset>\n`;
  return new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
