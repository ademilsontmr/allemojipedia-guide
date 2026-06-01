/**
 * Editorial completion roadmap — one category at a time (site order).
 * Status: manual = hand-written batch covers all thin slugs in category.
 */
export type CategoryEditorialStatus = {
  slug: string;
  name: string;
  order: number;
  thinRemaining: number;
  status: "complete" | "in-progress" | "pending";
  batchFile?: string;
  notes?: string;
};

export const categoryEditorialRoadmap: CategoryEditorialStatus[] = [
  {
    slug: "smileys-and-emotion",
    name: "Smileys & Emotion",
    order: 1,
    thinRemaining: 0,
    status: "complete",
    batchFile: "batch14-smileys-and-emotion-complete.ts",
    notes: "Batches 00, 10–12, 14 — category fully manual for thin pages.",
  },
  {
    slug: "people-and-body",
    name: "People & Body",
    order: 2,
    thinRemaining: 0,
    status: "complete",
    batchFile: "batch25–34-people-body + skin-tone inherit",
    notes: "385 manual bases (batches 25–34); all thin skin-tone inherit from bases — category complete.",
  },
  {
    slug: "animals-and-nature",
    name: "Animals & Nature",
    order: 3,
    thinRemaining: 0,
    status: "complete",
    batchFile: "batch02-animals-nature.ts + batch15-animals-and-nature-complete.ts",
    notes: "44/44 thin manual — category complete.",
  },
  {
    slug: "food-and-drink",
    name: "Food & Drink",
    order: 4,
    thinRemaining: 0,
    status: "complete",
    batchFile: "batch01-food-and-drink.ts + batch16-food-and-drink-complete.ts",
    notes: "17/17 thin manual — category complete.",
  },
  {
    slug: "travel-and-places",
    name: "Travel & Places",
    order: 5,
    thinRemaining: 37,
    status: "in-progress",
    batchFile: "batch10 + batch13 + batch18 + batch19-travel-places-buildings.ts",
    notes: "77 manual travel pages; 37 clock/moon/astro deferred to premium.",
  },
  {
    slug: "objects",
    name: "Objects",
    order: 7,
    thinRemaining: 0,
    status: "complete",
    batchFile: "batch13 + batch20–24-objects",
    notes: "140/140 thin manual — Objects category complete.",
  },
  {
    slug: "activities",
    name: "Activities",
    order: 6,
    thinRemaining: 0,
    status: "complete",
    batchFile: "batch17-activities-complete.ts",
    notes: "35/35 thin manual — batch 17 + jack-o-lantern (batch 12). Category complete.",
  },
  {
    slug: "symbols",
    name: "Symbols",
    order: 8,
    thinRemaining: 132,
    status: "pending",
  },
  {
    slug: "flags",
    name: "Flags",
    order: 9,
    thinRemaining: 126,
    status: "pending",
    notes: "Country-specific manual possible; high volume.",
  },
];

export const getNextCategoryToComplete = () =>
  categoryEditorialRoadmap.find((c) => c.status !== "complete");
