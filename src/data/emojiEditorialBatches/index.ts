import type { Emoji } from "@/data/emojis";
import type { EmojiBatchEnrichment } from "./types";
import { batch01FoodAndDrink } from "./batch01-food-and-drink";
import { batch02AnimalsNature } from "./batch02-animals-nature";
import { generateBatchEnrichment } from "./generators/generateForEmoji";

const handWrittenBatches: Record<string, EmojiBatchEnrichment> = {
  ...batch01FoodAndDrink,
  ...batch02AnimalsNature,
};

const generatedCache = new Map<string, EmojiBatchEnrichment>();

export type { EmojiBatchEnrichment, EditorialBatchMeta } from "./types";
export { editorialBatchRegistry, getEditorialBatchStats } from "./batchRegistry";
export { isThinContentEmoji } from "./generators/shared";

/** Hand-written overrides (lots 01–02) plus generated enrichment for all remaining thin pages. */
export const getEmojiBatchEnrichment = (emoji: Emoji): EmojiBatchEnrichment | undefined => {
  const manual = handWrittenBatches[emoji.slug];
  if (manual) return manual;

  const cached = generatedCache.get(emoji.slug);
  if (cached) return cached;

  const generated = generateBatchEnrichment(emoji);
  if (generated) {
    generatedCache.set(emoji.slug, generated);
  }
  return generated;
};

export const isBatchEnrichedEmoji = (slug: string): boolean =>
  slug in handWrittenBatches || generatedCache.has(slug);

export const getHandWrittenBatchSlugs = (): string[] => Object.keys(handWrittenBatches);

export const getBatchEnrichedSlugs = (): string[] => [
  ...Object.keys(handWrittenBatches),
  ...generatedCache.keys(),
];
