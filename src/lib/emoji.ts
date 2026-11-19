import all from "@/data/emojis.json";
import curatedSlugs from "@/data/curated.json";
import categoriesData from "@/data/categories.json";
import { getCollection, type CollectionEntry } from "astro:content";

export type Emoji = (typeof all)[number];
export type Category = (typeof categoriesData)[number];
export type EmojiEntry = CollectionEntry<"emoji">;

export const emojis: Emoji[] = all;
export const categories: Category[] = categoriesData;
const bySlug = new Map(emojis.map((e) => [e.slug, e]));
export const getEmoji = (slug: string) => bySlug.get(slug);
export const getCategory = (slug: string) => categories.find((c) => c.slug === slug)!;

let pageCache: Map<string, EmojiEntry> | undefined;
/** Emojis that have an in-depth page: listed in curated.json AND written in src/content/emoji. */
export async function emojiPages(): Promise<Map<string, EmojiEntry>> {
  if (!pageCache) {
    const entries = await getCollection("emoji");
    const allowed = new Set(curatedSlugs);
    pageCache = new Map(entries.filter((e) => allowed.has(e.data.slug) && bySlug.has(e.data.slug)).map((e) => [e.data.slug, e]));
  }
  return pageCache;
}

export const emojiUrl = (slug: string) => `/emojis/${slug}/`;
export const categoryUrl = (slug: string) => `/categories/${slug}/`;

const SUBGROUP_LABELS: Record<string, string> = {
  "face-neutral-skeptical": "Neutral & skeptical faces", "face-hand": "Faces with hands", "face-hat": "Faces with hats",
  "face-glasses": "Faces with glasses", "face-costume": "Costume faces", "hand-fingers-open": "Open hands",
  "hand-fingers-partial": "Finger gestures", "hand-single-finger": "Pointing fingers", "hand-fingers-closed": "Fists & thumbs",
  "hand-prop": "Hands with objects", "person-symbol": "People symbols", "plant-flower": "Flowers", "plant-other": "Plants & leaves",
  "food-asian": "Asian food", "food-marine": "Seafood", "food-sweet": "Sweets & desserts", "food-prepared": "Prepared food",
  "place-map": "Globes & maps", "place-geographic": "Landscapes", "place-building": "Buildings", "place-religious": "Places of worship",
  "place-other": "Other places", "transport-ground": "Ground transport", "transport-water": "Water transport", "transport-air": "Air transport",
  "sky-weather": "Sky & weather", "award-medal": "Awards & medals", "arts-crafts": "Arts & crafts", "light-video": "Light & video",
  "book-paper": "Books & paper", "other-object": "Other objects", "transport-sign": "Transport signs", "av-symbol": "Media controls",
  "other-symbol": "Other symbols", "country-flag": "Country flags", "subdivision-flag": "Subdivision flags", "flag": "Special flags",
};
export const subgroupLabel = (id: string) =>
  SUBGROUP_LABELS[id] ?? id.replace(/-/g, " ").replace(/^face /, "").replace(/^\w/, (c) => c.toUpperCase()).replace(/^(\w+)$/, "$1") + (id.startsWith("face-") ? " faces" : "");

/** "1F44D-1F3FB" → "U+1F44D U+1F3FB" */
export const codepoints = (hex: string) => hex.split("-").map((h) => `U+${h}`).join(" ");
export const htmlEntity = (hex: string) => hex.split("-").map((h) => `&#x${h};`).join("");
export const cssEscape = (hex: string) => hex.split("-").map((h) => `\\${h}`).join("");
export const jsEscape = (hex: string) => hex.split("-").map((h) => `\\u{${h}}`).join("");
/** Emoji versions before 2.0 were assigned retroactively, so only the 0.6 set (Unicode 6.0) has a clean year. */
export const emojiVersion = (v: number) => (v < 1 ? `Emoji ${v}` : `Emoji ${Number.isInteger(v) ? v.toFixed(1) : v}`);
export const addedLabel = (v: number, year: number | null) => (!year ? "Recently" : v > 0.6 && v <= 1 ? `${year} or earlier` : String(year));
export const SKIN_TONES = ["", "Light", "Medium-light", "Medium", "Medium-dark", "Dark"];
