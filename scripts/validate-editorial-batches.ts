import { emojis } from "../src/data/emojis";
import { getEmojiBatchEnrichment, getHandWrittenBatchSlugs } from "../src/data/emojiEditorialBatches";
import { isThinContentEmoji } from "../src/data/emojiEditorialBatches/generators/shared";

const handWritten = new Set(getHandWrittenBatchSlugs());
const thin = emojis.filter(isThinContentEmoji);
const covered = thin.filter((e) => getEmojiBatchEnrichment(e));
const missing = thin.filter((e) => !getEmojiBatchEnrichment(e));

const byBatch = new Map<string, number>();
for (const emoji of covered) {
  const batch = getEmojiBatchEnrichment(emoji)!;
  byBatch.set(batch.batchId, (byBatch.get(batch.batchId) ?? 0) + 1);
}

console.log("Thin emojis:", thin.length);
console.log("Hand-written slugs:", handWritten.size);
console.log("Batch-covered thin:", covered.length);
console.log("Missing:", missing.length);
console.log("\nBy batch:");
for (const [id, count] of [...byBatch.entries()].sort()) {
  console.log(`  ${id}: ${count}`);
}
if (missing.length > 0) {
  console.log("\nMissing slugs (first 20):");
  console.log(missing.slice(0, 20).map((e) => e.slug).join(", "));
  process.exit(1);
}
console.log("\nAll thin emojis have batch enrichment.");
