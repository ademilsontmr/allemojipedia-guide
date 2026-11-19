import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { SITE, abs } from "@/lib/site";
import { emojiPages, categories, emojiUrl, categoryUrl, getEmoji } from "@/lib/emoji";

// One flat sitemap. lastmod is the real content date of each page, never the build date.
export const GET: APIRoute = async () => {
  const pages = await emojiPages();
  const guides = await getCollection("guides");
  const iso = (d: Date) => d.toISOString().slice(0, 10);
  const emojiDates = [...pages.values()].map((e) => e.data.updated ?? SITE.launched);
  const guideDates = guides.map((g) => iso(g.data.updatedDate ?? g.data.pubDate));
  const latest = (dates: string[]) => dates.reduce((a, b) => (a > b ? a : b), SITE.launched);
  const urls: [string, string][] = [
    ["/", latest([...emojiDates, ...guideDates])],
    ["/emojis/", latest(emojiDates)],
    ["/categories/", SITE.launched],
    ...categories.map((c): [string, string] => [categoryUrl(c.slug), latest([...pages.values()].filter((e) => getEmoji(e.data.slug)?.category === c.slug).map((e) => e.data.updated ?? SITE.launched))]),
    ...[...pages.values()].map((e): [string, string] => [emojiUrl(e.data.slug), e.data.updated ?? SITE.launched]),
    ["/guides/", latest(guideDates)],
    ...guides.map((g): [string, string] => [`/guides/${g.id}/`, iso(g.data.updatedDate ?? g.data.pubDate)]),
    ["/emoji-copy-and-paste/", SITE.launched],
    ["/flag-emoji-quiz/", SITE.launched],
    ["/about/", SITE.launched],
    ["/editorial-policy/", SITE.launched],
    ["/contact/", SITE.launched],
    ["/privacy/", SITE.launched],
  ];
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map(([p, d]) => `  <url><loc>${abs(p)}</loc><lastmod>${d}</lastmod></url>`).join("\n")}\n</urlset>\n`;
  return new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
