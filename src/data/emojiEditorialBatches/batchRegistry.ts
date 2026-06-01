import type { EditorialBatchMeta } from "./types";

/** Tracks editorial enrichment progress by batch. Update when adding new batch files. */
export const editorialBatchRegistry: EditorialBatchMeta[] = [
  {
    id: "01-food-and-drink",
    name: "Food & Drink — thin pages",
    category: "food-and-drink",
    emojiCount: 16,
    status: "complete",
    notes: "Fruits, prepared food, utensils, and drink vessels that had generic template copy.",
  },
  {
    id: "02-animals-nature",
    name: "Animals & Nature — thin pages",
    category: "animals-and-nature",
    emojiCount: 37,
    status: "complete",
    notes: "Mammals, birds, marine life, insects, and plants with placeholder descriptions.",
  },
];

export const getEditorialBatchStats = () => {
  const enriched = editorialBatchRegistry.reduce((sum, batch) => sum + batch.emojiCount, 0);
  const complete = editorialBatchRegistry.filter((b) => b.status === "complete").length;
  return {
    totalBatches: editorialBatchRegistry.length,
    completeBatches: complete,
    enrichedEmojiCount: enriched,
    batches: editorialBatchRegistry,
  };
};
