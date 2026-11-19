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
    /** Optional copy-and-paste sets shown above the article (holiday and collection guides). */
    copyList: z.array(z.object({ title: z.string(), emojis: z.string() })).optional(),
  }),
});

export const collections = { emoji, guides };
