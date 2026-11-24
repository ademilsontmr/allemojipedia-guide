import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const emoji = defineCollection({
  loader: glob({ pattern: "*.json", base: "./src/content/emoji" }),
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    description: z.string(),
    summary: z.string(),
    meaning: z.array(z.string()).min(1),
    contexts: z.array(z.object({ label: z.string(), body: z.string() })),
    examples: z.array(z.object({ text: z.string(), meaning: z.string() })),
    combos: z.array(z.object({ combo: z.string(), meaning: z.string() })),
    confusedWith: z.array(z.object({ slug: z.string(), difference: z.string() })),
    avoid: z.array(z.string()),
    design: z.string(),
    faqs: z.array(z.object({ q: z.string(), a: z.string() })),
    related: z.array(z.string()),
    /** ISO date the page first went live; pages from the 2026-11-19 relaunch omit it. */
    published: z.string().optional(),
    /** ISO date of the last real editorial change; falls back to the launch date. */
    updated: z.string().optional(),
  }),
});

const guides = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/guides" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    excerpt: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.enum(["Meanings", "Platforms", "How-to", "Culture", "Flags", "Holidays"]),
    heroEmoji: z.string(),
    keyTakeaways: z.array(z.string()),
    faqs: z.array(z.object({ q: z.string(), a: z.string() })),
    related: z.array(z.string()).default([]),
    /** Search terms this guide targets; the first is its unique primary keyword (see scripts/guide-keywords.json). */
    keywords: z.array(z.string()).min(1),
    /** Optional copy-and-paste sets shown above the article (holiday and collection guides). */
    copyList: z.array(z.object({ title: z.string(), emojis: z.string() })).optional(),
  }),
});

/** Copy-and-paste pages for text symbols and kaomoji, served at /<slug>/. Brief: docs/symbol-page-brief.md */
const symbols = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/symbols" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    h1: z.string(),
    /** Two or three sentences that answer the search directly; shown above the sets. */
    lead: z.string(),
    hero: z.string(),
    keywords: z.array(z.string()).min(1),
    published: z.string(),
    updated: z.string().optional(),
    sets: z.array(z.object({
      id: z.string(),
      title: z.string(),
      note: z.string().optional(),
      /** Single symbols separated by spaces. */
      chars: z.string().optional(),
      /** Multi-character items such as kaomoji, one per entry. */
      items: z.array(z.string()).optional(),
    })).min(4),
    faqs: z.array(z.object({ q: z.string(), a: z.string() })),
    related: z.array(z.string()).default([]),
  }),
});

/** News blog at /blog/<slug>/: dated reporting on Unicode releases, platform updates and site news. Brief: docs/blog-brief.md */
const blog = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    /** One or two sentences under the headline and on the listing card. */
    dek: z.string(),
    category: z.enum(["Unicode Emoji Update", "Platform Emoji Update", "Emoji Culture", "Allemojipedia News"]),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    /** 3-8 emojis for the header collage and social image; must have Twemoji artwork. */
    hero: z.string(),
    keywords: z.array(z.string()).min(1),
    sources: z.array(z.object({ name: z.string(), url: z.string().url() })).default([]),
    related: z.array(z.string()).default([]),
  }),
});

export const collections = { emoji, guides, symbols, blog };
