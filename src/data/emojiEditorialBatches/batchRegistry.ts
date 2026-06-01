import type { EditorialBatchMeta } from "./types";

/**
 * Editorial enrichment batches.
 * Lots 01–02: hand-written TypeScript files (highest quality).
 * Lots 03–09: category generators in generators/ (unique per slug, lazy-loaded).
 */
export const editorialBatchRegistry: EditorialBatchMeta[] = [
  {
    id: "01-food-and-drink",
    name: "Food & Drink — hand-written",
    category: "food-and-drink",
    emojiCount: 16,
    status: "complete",
    notes: "Manual editorial for thin food pages.",
  },
  {
    id: "02-animals-nature",
    name: "Animals & Nature — hand-written",
    category: "animals-and-nature",
    emojiCount: 37,
    status: "complete",
    notes: "Manual editorial for thin animal and plant pages.",
  },
  {
    id: "03-activities",
    name: "Activities — generated",
    category: "activities",
    emojiCount: 35,
    status: "complete",
    notes: "Sports, games, events, and crafts with subgroup-specific copy.",
  },
  {
    id: "04-travel-places",
    name: "Travel & Places — generated",
    category: "travel-and-places",
    emojiCount: 114,
    status: "complete",
    notes: "Transport, buildings, weather, and geography emojis.",
  },
  {
    id: "05-objects",
    name: "Objects — generated",
    category: "objects",
    emojiCount: 140,
    status: "complete",
    notes: "Tech, clothing, tools, medical, and household items.",
  },
  {
    id: "06-symbols",
    name: "Symbols — generated",
    category: "symbols",
    emojiCount: 132,
    status: "complete",
    notes: "Arrows, warnings, zodiac, math, and signage.",
  },
  {
    id: "07-smileys-emotion",
    name: "Smileys & Emotion — generated",
    category: "smileys-and-emotion",
    emojiCount: 84,
    status: "complete",
    notes: "Faces, hearts, and emotion symbols with tone guidance.",
  },
  {
    id: "08-flags",
    name: "Flags — generated",
    category: "flags",
    emojiCount: 126,
    status: "complete",
    notes: "Country-specific flag meaning and travel/sports context.",
  },
  {
    id: "09-people-body",
    name: "People & Body — generated",
    category: "people-and-body",
    emojiCount: 2135,
    status: "complete",
    notes: "Gestures and skin-tone variants with inclusive guidance per slug.",
  },
];

export const getEditorialBatchStats = () => {
  const enriched = editorialBatchRegistry.reduce((sum, batch) => sum + batch.emojiCount, 0);
  const complete = editorialBatchRegistry.filter((b) => b.status === "complete").length;
  const handWritten = editorialBatchRegistry
    .filter((b) => b.id.startsWith("01") || b.id.startsWith("02"))
    .reduce((sum, b) => sum + b.emojiCount, 0);
  const generated = enriched - handWritten;

  return {
    totalBatches: editorialBatchRegistry.length,
    completeBatches: complete,
    enrichedEmojiCount: enriched,
    handWrittenCount: handWritten,
    generatedCount: generated,
    batches: editorialBatchRegistry,
  };
};
