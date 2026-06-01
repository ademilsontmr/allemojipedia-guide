import type { Emoji } from "@/data/emojis";
import type { EmojiBatchEnrichment } from "./types";
import { batch00TopLaugh } from "./batch00-top-laugh";
import { batch01FoodAndDrink } from "./batch01-food-and-drink";
import { batch02AnimalsNature } from "./batch02-animals-nature";
import { batch10TopSmileysTravel } from "./batch10-top-smileys-travel";
import { batch11TopSmileysEmotion } from "./batch11-top-smileys-emotion";
import { batch12TopSmileysEmotion } from "./batch12-top-smileys-emotion";
import { batch14SmileysAndEmotionComplete } from "./batch14-smileys-and-emotion-complete";
import { batch15AnimalsAndNatureComplete } from "./batch15-animals-and-nature-complete";
import { batch16FoodAndDrinkComplete } from "./batch16-food-and-drink-complete";
import { generateBatchEnrichment } from "./generators/generateForEmoji";

const handWrittenBatches: Record<string, EmojiBatchEnrichment> = {
  ...batch00TopLaugh,
  ...batch01FoodAndDrink,
  ...batch02AnimalsNature,
  ...batch10TopSmileysTravel,
  ...batch11TopSmileysEmotion,
  ...batch12TopSmileysEmotion,
  ...batch14SmileysAndEmotionComplete,
  ...batch15AnimalsAndNatureComplete,
  ...batch16FoodAndDrinkComplete,
};

const generatedCache = new Map<string, EmojiBatchEnrichment>();

export type { EmojiBatchEnrichment, EditorialBatchMeta } from "./types";
export { editorialBatchRegistry, getEditorialBatchStats } from "./batchRegistry";
export { categoryEditorialRoadmap, getNextCategoryToComplete } from "./batchCategoryRoadmap";
export { isThinContentEmoji } from "./generators/shared";

/** Hand-written overrides (00–02, 10–12, 14–16) plus premium enrichment for all remaining thin pages. */
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
