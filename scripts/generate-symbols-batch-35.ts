/**
 * Batch 35 — all thin Symbols manual editorial.
 * Run: npx tsx scripts/generate-symbols-batch-35.ts
 */
import { emojis } from "../src/data/emojis";
import { isThinContentEmoji } from "../src/data/emojiEditorialBatches/generators/shared";
import { buildSymbolSpec } from "./editorial/buildSymbol";
import { writeBatchFile } from "./editorial/serializeBatch";

const BATCH_ID = "35-symbols-complete";

const slugs = emojis
  .filter((e) => e.categorySlug === "symbols" && isThinContentEmoji(e))
  .map((e) => e.slug)
  .sort();

const entries = Object.fromEntries(
  slugs.map((slug) => {
    const emoji = emojis.find((e) => e.slug === slug)!;
    return [slug, buildSymbolSpec(emoji, BATCH_ID)];
  }),
);

writeBatchFile(
  "batch35-symbols-complete.ts",
  "batch35SymbolsComplete",
  BATCH_ID,
  "Batch 35 — all 132 thin Symbols pages manual editorial.",
  entries,
);
