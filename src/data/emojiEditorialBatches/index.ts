import type { EmojiBatchEnrichment } from "./types";
import { batch01FoodAndDrink } from "./batch01-food-and-drink";
import { batch02AnimalsNature } from "./batch02-animals-nature";

const batchEnrichments: Record<string, EmojiBatchEnrichment> = {
  ...batch01FoodAndDrink,
  ...batch02AnimalsNature,
};

export type { EmojiBatchEnrichment, EditorialBatchMeta } from "./types";
export { editorialBatchRegistry, getEditorialBatchStats } from "./batchRegistry";

export const getEmojiBatchEnrichment = (slug: string): EmojiBatchEnrichment | undefined =>
  batchEnrichments[slug];

export const isBatchEnrichedEmoji = (slug: string): boolean => slug in batchEnrichments;

export const getBatchEnrichedSlugs = (): string[] => Object.keys(batchEnrichments);
