import { getCollection, type CollectionEntry } from "astro:content";

export type Post = CollectionEntry<"blog">;
export const postUrl = (p: Post) => `/blog/${p.id}/`;
export const iso = (d: Date) => d.toISOString().slice(0, 10);
export const readMinutes = (p: Post) => Math.max(1, Math.round((p.body ?? "").split(/\s+/).length / 220));
export const heroChars = (s: string) => [...new Intl.Segmenter("en", { granularity: "grapheme" }).segment(s)].map((x) => x.segment).filter((x) => x.trim());
/** Newest first. */
export const allPosts = async () => (await getCollection("blog")).sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime() || a.id.localeCompare(b.id));
