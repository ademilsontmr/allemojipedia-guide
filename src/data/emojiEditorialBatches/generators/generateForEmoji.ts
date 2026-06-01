import type { Emoji } from "@/data/emojis";
import type { EmojiBatchEnrichment } from "../types";
import { generateActivitiesBatch } from "./activities";
import { generateFlagsBatch } from "./flags";
import { generateObjectsBatch } from "./objects";
import { generatePeopleBatch } from "./people";
import { generateSmileysBatch } from "./smileys";
import { generateSymbolsBatch } from "./symbols";
import { generateTravelBatch } from "./travel";
import { generateAnimalsBatch } from "./animals";
import { generateFoodBatch } from "./food";
import { isThinContentEmoji } from "./shared";

const generatorByCategory: Record<string, (emoji: Emoji) => EmojiBatchEnrichment> = {
  "food-and-drink": generateFoodBatch,
  "animals-and-nature": generateAnimalsBatch,
  activities: generateActivitiesBatch,
  "travel-and-places": generateTravelBatch,
  objects: generateObjectsBatch,
  symbols: generateSymbolsBatch,
  "smileys-and-emotion": generateSmileysBatch,
  flags: generateFlagsBatch,
  "people-and-body": generatePeopleBatch,
};

export const generateBatchEnrichment = (emoji: Emoji): EmojiBatchEnrichment | undefined => {
  if (!isThinContentEmoji(emoji)) return undefined;
  const generator = generatorByCategory[emoji.categorySlug];
  if (!generator) return undefined;
  return generator(emoji);
};

export const getBatchIdForCategory = (categorySlug: string): string | undefined => {
  const map: Record<string, string> = {
    "food-and-drink": "03-food-remaining",
    "animals-and-nature": "02-animals-remaining",
    activities: "03-activities",
    "travel-and-places": "04-travel-places",
    objects: "05-objects",
    symbols: "06-symbols",
    "smileys-and-emotion": "07-smileys-emotion",
    flags: "08-flags",
    "people-and-body": "09-people-body",
  };
  return map[categorySlug];
};
