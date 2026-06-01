import type { EditorialBatchMeta } from "./types";

/**
 * Editorial enrichment batches.
 * Lots 00–02: hand-written TypeScript files (highest quality).
 * Lots 03–09: premium engine in premium/ — emoji-specific copy per slug (lazy-loaded).
 */
export const editorialBatchRegistry: EditorialBatchMeta[] = [
  {
    id: "00-top-priority",
    name: "Top priority emojis — hand-written",
    category: "smileys-and-emotion",
    emojiCount: 2,
    status: "complete",
    notes: "Standalone editorial for 😂 and 💀 — same page pattern as other emojis.",
  },
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
    name: "Activities — premium generated",
    category: "activities",
    emojiCount: 35,
    status: "complete",
    notes: "Sports, games, and events with slug-specific premium copy.",
  },
  {
    id: "04-travel-places",
    name: "Travel & Places — premium generated",
    category: "travel-and-places",
    emojiCount: 114,
    status: "complete",
    notes: "Transport, buildings, weather — emoji-specific narratives.",
  },
  {
    id: "05-objects",
    name: "Objects — premium generated",
    category: "objects",
    emojiCount: 140,
    status: "complete",
    notes: "Tech, clothing, tools — contextual examples per object.",
  },
  {
    id: "06-symbols",
    name: "Symbols — premium generated",
    category: "symbols",
    emojiCount: 132,
    status: "complete",
    notes: "Arrows, warnings, zodiac — intent-aware premium copy.",
  },
  {
    id: "07-smileys-emotion",
    name: "Smileys & Emotion — premium generated",
    category: "smileys-and-emotion",
    emojiCount: 84,
    status: "complete",
    notes: "Faces and hearts with emotion parsing from slug and name.",
  },
  {
    id: "08-flags",
    name: "Flags — premium generated",
    category: "flags",
    emojiCount: 126,
    status: "complete",
    notes: "Country-specific flag meaning, travel, sports, and diaspora context.",
  },
  {
    id: "09-people-body",
    name: "People & Body — premium generated",
    category: "people-and-body",
    emojiCount: 2135,
    status: "complete",
    notes: "Gesture knowledge base plus skin-tone guidance per slug.",
  },
  {
    id: "10-top-smileys-travel",
    name: "Top smileys & travel — hand-written",
    category: "mixed",
    emojiCount: 17,
    status: "complete",
    notes: "Manual premium for high-search smileys and thin travel pages (GSC priority).",
  },
  {
    id: "11-top-smileys-emotion",
    name: "Top smileys & emotion — hand-written",
    category: "smileys-and-emotion",
    emojiCount: 20,
    status: "complete",
    notes: "Manual premium for awkward, negative, and playful face emojis from topEmojiSlugs.",
  },
  {
    id: "12-top-smileys-emotion",
    name: "Top smileys & emotion (final) — hand-written",
    category: "smileys-and-emotion",
    emojiCount: 24,
    status: "complete",
    notes: "Completes all remaining thin topEmojiSlugs — tired, angry, seasonal, and symbol faces.",
  },
  {
    id: "14-smileys-and-emotion-complete",
    name: "Smileys & Emotion — category complete",
    category: "smileys-and-emotion",
    emojiCount: 32,
    status: "complete",
    notes: "Final 32 thin smileys — cats, monkeys, speech bubbles, distressed faces. Category 1 fully manual.",
  },
  {
    id: "15-animals-and-nature-complete",
    name: "Animals & Nature — category complete",
    category: "animals-and-nature",
    emojiCount: 7,
    status: "complete",
    notes: "Final thin animals: badger, dove, wing, t-rex, coral, beetle, microbe. Category 3 fully manual.",
  },
  {
    id: "16-food-and-drink-complete",
    name: "Food & Drink — category complete",
    category: "food-and-drink",
    emojiCount: 1,
    status: "complete",
    notes: "Ear of corn — final thin food page. Category 4 fully manual.",
  },
];

export const getEditorialBatchStats = () => {
  const enriched = editorialBatchRegistry.reduce((sum, batch) => sum + batch.emojiCount, 0);
  const complete = editorialBatchRegistry.filter((b) => b.status === "complete").length;
  const handWritten = editorialBatchRegistry
    .filter((b) => b.id.startsWith("00") || b.id.startsWith("01") || b.id.startsWith("02") || b.id.startsWith("10") || b.id.startsWith("11") || b.id.startsWith("12") || b.id.startsWith("14") || b.id.startsWith("15") || b.id.startsWith("16"))
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
