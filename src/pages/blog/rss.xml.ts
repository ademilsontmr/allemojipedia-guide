import type { APIRoute } from "astro";
import { SITE, abs } from "@/lib/site";
import { allPosts, postUrl } from "@/lib/blog";

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export const GET: APIRoute = async () => {
  const posts = await allPosts();
  const items = posts.map((p) => `    <item>
      <title>${esc(p.data.title)}</title>
      <link>${abs(postUrl(p))}</link>
      <guid isPermaLink="true">${abs(postUrl(p))}</guid>
      <description>${esc(p.data.dek)}</description>
      <category>${esc(p.data.category)}</category>
      <pubDate>${p.data.pubDate.toUTCString()}</pubDate>
    </item>`).join("\n");
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${SITE.name} Blog: emoji news</title>
    <link>${abs("/blog/")}</link>
    <atom:link href="${abs("/blog/rss.xml")}" rel="self" type="application/rss+xml" />
    <description>Emoji news from the ${SITE.name} editors: Unicode releases, platform updates and site news.</description>
    <language>en</language>
${items}
  </channel>
</rss>
`;
  return new Response(body, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
};
