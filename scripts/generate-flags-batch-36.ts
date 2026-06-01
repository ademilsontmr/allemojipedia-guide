/**
 * Batch 36 — all thin Flags manual editorial.
 * Run: npx tsx scripts/generate-flags-batch-36.ts
 */
import { emojis } from "../src/data/emojis";
import { isThinContentEmoji } from "../src/data/emojiEditorialBatches/generators/shared";
import { buildFlagSpec } from "./editorial/buildFlag";
import { writeBatchFile } from "./editorial/serializeBatch";

const BATCH_ID = "36-flags-complete";

const slugs = emojis
  .filter((e) => e.categorySlug === "flags" && isThinContentEmoji(e))
  .map((e) => e.slug)
  .sort();

const entries = Object.fromEntries(
  slugs.map((slug) => {
    const emoji = emojis.find((e) => e.slug === slug)!;
    return [slug, buildFlagSpec(emoji, BATCH_ID)];
  }),
);

writeBatchFile(
  "batch36-flags-complete.ts",
  "batch36FlagsComplete",
  BATCH_ID,
  "Batch 36 — all 126 thin Flag pages manual editorial.",
  entries,
);
