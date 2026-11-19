import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { SITE, abs } from "@/lib/site";

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export const GET: APIRoute = async () => {
  const guides = (await getCollection("guides")).sort((a, b) => +(b.data.updatedDate ?? b.data.pubDate) - +(a.data.updatedDate ?? a.data.pubDate));
  const items = guides.map((g) => `    <item>
      <title>${esc(g.data.title)}</title>
      <link>${abs(`/guides/${g.id}/`)}</link>
      <guid isPermaLink="true">${abs(`/guides/${g.id}/`)}</guid>
      <description>${esc(g.data.description)}</description>
      <category>${esc(g.data.category)}</category>
      <pubDate>${g.data.pubDate.toUTCString()}</pubDate>
    </item>`).join("\n");
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${SITE.name} guides</title>
    <link>${abs("/guides/")}</link>
    <atom:link href="${abs("/guides/rss.xml")}" rel="self" type="application/rss+xml" />
    <description>${esc(SITE.description)}</description>
    <language>en</language>
${items}
  </channel>
</rss>
`;
  return new Response(body, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
};
