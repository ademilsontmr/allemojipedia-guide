/**
 * Generates emojiContextPages.generated.ts — top 50 emojis × 5 contexts.
 * Manual entries in emojiContextPages.ts take precedence on merge.
 *
 * Run: npm run generate:context-pages
 */
import fs from "fs";
import path from "path";
import { emojis, getEmojiBySlug } from "../src/data/emojis";
import { topSearchEmojiSlugs } from "../src/data/topSearchEmojiSlugs";
import type { EmojiContextPage, EmojiContextType } from "../src/data/emojiContextPages";
import { buildUniqueContextPage } from "../src/utils/emojiContextPageContent";

const CONTEXTS: EmojiContextType[] = ["from-a-girl", "from-a-guy", "whatsapp", "instagram", "tiktok"];

const validateUniqueness = (pages: EmojiContextPage[]) => {
  const answerCounts = new Map<string, string[]>();
  const signalCounts = new Map<string, string[]>();
  const exampleCounts = new Map<string, string[]>();

  for (const page of pages) {
    const id = `${page.emojiSlug}/${page.context}`;

    const answerKey = page.answer.trim();
    const answers = answerCounts.get(answerKey) ?? [];
    answers.push(id);
    answerCounts.set(answerKey, answers);

    for (const signal of page.signals) {
      const key = signal.trim();
      const ids = signalCounts.get(key) ?? [];
      ids.push(id);
      signalCounts.set(key, ids);
    }

    for (const example of page.examples) {
      const key = example.trim();
      const ids = exampleCounts.get(key) ?? [];
      ids.push(id);
      exampleCounts.set(key, ids);
    }
  }

  const dupAnswers = [...answerCounts.entries()].filter(([, ids]) => ids.length > 1);
  const dupSignals = [...signalCounts.entries()].filter(([, ids]) => ids.length > 5);
  const dupExamples = [...exampleCounts.entries()].filter(([, ids]) => ids.length > 3);

  if (dupAnswers.length) {
    console.warn(`⚠ ${dupAnswers.length} duplicate answer(s) detected`);
    dupAnswers.slice(0, 3).forEach(([text, ids]) => {
      console.warn(`  "${text.slice(0, 60)}..." → ${ids.join(", ")}`);
    });
  }

  if (dupSignals.length) {
    console.warn(`⚠ ${dupSignals.length} heavily repeated signal(s)`);
  }

  if (dupExamples.length) {
    console.warn(`⚠ ${dupExamples.length} heavily repeated example(s)`);
  }

  if (!dupAnswers.length && !dupSignals.length && !dupExamples.length) {
    console.log("✓ Content uniqueness check passed");
  }
};

const pages: EmojiContextPage[] = [];
const emojiSlugs = new Set(emojis.map((e) => e.slug));

for (const slug of topSearchEmojiSlugs) {
  if (!emojiSlugs.has(slug)) {
    console.warn(`Skipping missing slug: ${slug}`);
    continue;
  }
  const emoji = getEmojiBySlug(slug);
  if (!emoji) continue;

  for (const context of CONTEXTS) {
    pages.push(buildUniqueContextPage(emoji, context));
  }
}

validateUniqueness(pages);

const out = `// AUTO-GENERATED — do not edit. Run: npm run generate:context-pages
import type { EmojiContextPage } from "./emojiContextPages";

export const emojiContextPagesGenerated: EmojiContextPage[] = ${JSON.stringify(pages, null, 2)};
`;

const outPath = path.join(process.cwd(), "src/data/emojiContextPages.generated.ts");
fs.writeFileSync(outPath, out);
console.log(`Generated ${pages.length} context pages → ${outPath}`);
