import type { Emoji } from "@/data/emojis";
import type { EmojiBatchEnrichment } from "./types";
import { batch00TopLaugh } from "./batch00-top-laugh";
import { batch01FoodAndDrink } from "./batch01-food-and-drink";
import { batch02AnimalsNature } from "./batch02-animals-nature";
import { batch10TopSmileysTravel } from "./batch10-top-smileys-travel";
import { batch11TopSmileysEmotion } from "./batch11-top-smileys-emotion";
import { batch12TopSmileysEmotion } from "./batch12-top-smileys-emotion";
import { batch13TopTravelObjects } from "./batch13-top-travel-objects";
import { batch14SmileysAndEmotionComplete } from "./batch14-smileys-and-emotion-complete";
import { batch15AnimalsAndNatureComplete } from "./batch15-animals-and-nature-complete";
import { batch16FoodAndDrinkComplete } from "./batch16-food-and-drink-complete";
import { batch17ActivitiesComplete } from "./batch17-activities-complete";
import { batch18TravelPlacesTransit } from "./batch18-travel-places-transit";
import { batch19TravelPlacesBuildings } from "./batch19-travel-places-buildings";
import { batch20ObjectsMailOfficeMedia } from "./batch20-objects-mail-office-media";
import { batch21ObjectsFashionClothing } from "./batch21-objects-fashion-clothing";
import { batch22ObjectsMusicMediaBooks } from "./batch22-objects-music-media-books";
import { batch23ObjectsOfficeHousehold } from "./batch23-objects-office-household";
import { batch24ObjectsWeaponsScienceMisc } from "./batch24-objects-weapons-science-misc";
import { batch25PeopleBodyRolesGestures } from "./batch25-people-body-roles-gestures";
import { batch26PeopleBodyPartsRoles } from "./batch26-people-body-parts-roles";
import { batch27PeopleBodyActivitySport } from "./batch27-people-body-activity-sport";
import { batch28PeopleBodyAccessibilityRoles } from "./batch28-people-body-accessibility-roles";
import { batch29PeopleBodyCouplesFamilyGestures } from "./batch29-people-body-couples-family-gestures";
import { batch30PeopleBodyFamilyGestures } from "./batch30-people-body-family-gestures";
import { batch31PeopleBodyBase100 } from "./batch31-people-body-base-100";
import { batch32PeopleBodyBaseComplete } from "./batch32-people-body-base-complete";
import { batch33PeopleBodyRichGestures } from "./batch33-people-body-rich-gestures";
import { batch34PeopleBodyRichComplete } from "./batch34-people-body-rich-complete";
import { batch35SymbolsComplete } from "./batch35-symbols-complete";
import { batch36FlagsComplete } from "./batch36-flags-complete";
import { batch37TravelClocksMoonAstro } from "./batch37-travel-clocks-moon-astro";
import { batch38P0Wave1TopSearch } from "./batch38-p0-wave1-top-search";
import { batch39P0Wave2HeartsReactions } from "./batch39-p0-wave2-hearts-reactions";
import { batch40P0Wave3Top50Close } from "./batch40-p0-wave3-top50-close";
import { batch41P1Wave1TopExtend } from "./batch41-p1-wave1-top-extend";
import { batch42P1Wave2FacesExtend } from "./batch42-p1-wave2-faces-extend";
import { generateBatchEnrichment } from "./generators/generateForEmoji";
import { inheritSkinToneEnrichment, resolveManualBaseForEmoji } from "./inheritSkinToneFromManual";

const handWrittenBatches: Record<string, EmojiBatchEnrichment> = {
  ...batch00TopLaugh,
  ...batch01FoodAndDrink,
  ...batch02AnimalsNature,
  ...batch10TopSmileysTravel,
  ...batch11TopSmileysEmotion,
  ...batch12TopSmileysEmotion,
  ...batch13TopTravelObjects,
  ...batch14SmileysAndEmotionComplete,
  ...batch15AnimalsAndNatureComplete,
  ...batch16FoodAndDrinkComplete,
  ...batch17ActivitiesComplete,
  ...batch18TravelPlacesTransit,
  ...batch19TravelPlacesBuildings,
  ...batch20ObjectsMailOfficeMedia,
  ...batch21ObjectsFashionClothing,
  ...batch22ObjectsMusicMediaBooks,
  ...batch23ObjectsOfficeHousehold,
  ...batch24ObjectsWeaponsScienceMisc,
  ...batch25PeopleBodyRolesGestures,
  ...batch26PeopleBodyPartsRoles,
  ...batch27PeopleBodyActivitySport,
  ...batch28PeopleBodyAccessibilityRoles,
  ...batch29PeopleBodyCouplesFamilyGestures,
  ...batch30PeopleBodyFamilyGestures,
  ...batch31PeopleBodyBase100,
  ...batch32PeopleBodyBaseComplete,
  ...batch33PeopleBodyRichGestures,
  ...batch34PeopleBodyRichComplete,
  ...batch35SymbolsComplete,
  ...batch36FlagsComplete,
  ...batch37TravelClocksMoonAstro,
  // P0/P1 overrides must spread last so Wave exclusivity wins over earlier batches.
  ...batch38P0Wave1TopSearch,
  ...batch39P0Wave2HeartsReactions,
  ...batch40P0Wave3Top50Close,
  ...batch41P1Wave1TopExtend,
  ...batch42P1Wave2FacesExtend,
};

const generatedCache = new Map<string, EmojiBatchEnrichment>();
const skinToneInheritedCache = new Map<string, EmojiBatchEnrichment>();

export type { EmojiBatchEnrichment, EditorialBatchMeta } from "./types";
export { editorialBatchRegistry, getEditorialBatchStats } from "./batchRegistry";
export { categoryEditorialRoadmap, getNextCategoryToComplete } from "./batchCategoryRoadmap";
export { isThinContentEmoji } from "./generators/shared";

/** Hand-written overrides (00–02, 10–13, 14–37), skin-tone inherit, plus premium for remaining thin pages. */
export const getEmojiBatchEnrichment = (emoji: Emoji): EmojiBatchEnrichment | undefined => {
  const manual = handWrittenBatches[emoji.slug];
  if (manual) return manual;

  const inherited = skinToneInheritedCache.get(emoji.slug);
  if (inherited) return inherited;

  const cached = generatedCache.get(emoji.slug);
  if (cached) return cached;

  if (emoji.categorySlug === "people-and-body") {
    const resolved = resolveManualBaseForEmoji(emoji, handWrittenBatches);
    if (resolved) {
      const derived = inheritSkinToneEnrichment(
        emoji,
        handWrittenBatches[resolved.resolvedSlug],
        resolved.resolvedSlug,
        { skinTone: resolved.skinTone ?? undefined },
      );
      skinToneInheritedCache.set(emoji.slug, derived);
      return derived;
    }
  }

  const generated = generateBatchEnrichment(emoji);
  if (generated) {
    generatedCache.set(emoji.slug, generated);
  }
  return generated;
};

export const isBatchEnrichedEmoji = (slug: string): boolean =>
  slug in handWrittenBatches || skinToneInheritedCache.has(slug) || generatedCache.has(slug);

export const getHandWrittenBatchSlugs = (): string[] => Object.keys(handWrittenBatches);

export const getSkinToneInheritedSlugs = (): string[] => [...skinToneInheritedCache.keys()];

export const getBatchEnrichedSlugs = (): string[] => [
  ...Object.keys(handWrittenBatches),
  ...skinToneInheritedCache.keys(),
  ...generatedCache.keys(),
];
