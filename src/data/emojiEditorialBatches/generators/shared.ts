import type { Emoji } from "@/data/emojis";
import type { EmojiBatchEnrichment } from "../types";

export const hash = (value: string) =>
  [...value].reduce((acc, char) => ((acc << 5) - acc + char.charCodeAt(0)) | 0, 0);

export const pick = <T>(slug: string, items: T[], salt = 0): T =>
  items[Math.abs(hash(`${slug}:${salt}`)) % items.length];

export const pickN = <T>(slug: string, items: T[], count: number, salt = 0): T[] => {
  if (items.length === 0) return [];
  const start = Math.abs(hash(`${slug}:${salt}`)) % items.length;
  const result: T[] = [];
  for (let i = 0; i < count; i++) {
    result.push(items[(start + i) % items.length]);
  }
  return result;
};

export const lowerFirst = (value: string) =>
  value ? value.charAt(0).toLowerCase() + value.slice(1) : value;

export const humanize = (slug: string) =>
  slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");

export const humanizeSubgroup = (subgroup: string) =>
  subgroup.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

export const isThinContentEmoji = (emoji: Emoji): boolean => {
  const thinMarkers = [
    "is used in digital communication to express",
    "is commonly used in texting, social media, and online communication",
    "Context matters - meaning can vary by platform and conversation",
    "Just posted my new photo",
    "Can't wait to see you",
    "That's amazing",
    "is a versatile symbol used in digital communication",
  ];

  return thinMarkers.some(
    (marker) =>
      emoji.detailedMeaning.includes(marker) ||
      emoji.shortMeaning.includes(marker) ||
      emoji.examples.some((example) => example.text.includes(marker))
  );
};

export const countryFromFlagSlug = (slug: string): string | null => {
  if (!slug.startsWith("flag-")) return null;
  return slug
    .replace(/^flag-/, "")
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
};

const SKIN_TONE_SUFFIXES = [
  "light-skin-tone",
  "medium-light-skin-tone",
  "medium-skin-tone",
  "medium-dark-skin-tone",
  "dark-skin-tone",
] as const;

export type ParsedPeopleSlug = {
  base: string;
  skinTone: (typeof SKIN_TONE_SUFFIXES)[number] | null;
};

export const parsePeopleSlug = (slug: string): ParsedPeopleSlug => {
  for (const tone of SKIN_TONE_SUFFIXES) {
    if (slug.endsWith(`-${tone}`)) {
      return { base: slug.slice(0, -(tone.length + 1)), skinTone: tone };
    }
  }
  return { base: slug, skinTone: null };
};

export const skinToneLabel = (tone: ParsedPeopleSlug["skinTone"]): string | null => {
  if (!tone) return null;
  const labels: Record<(typeof SKIN_TONE_SUFFIXES)[number], string> = {
    "light-skin-tone": "light skin tone",
    "medium-light-skin-tone": "medium-light skin tone",
    "medium-skin-tone": "medium skin tone",
    "medium-dark-skin-tone": "medium-dark skin tone",
    "dark-skin-tone": "dark skin tone",
  };
  return labels[tone];
};

export const cleanKeywords = (emoji: Emoji) =>
  emoji.keywords.filter(
    (k) =>
      !["unicode", "copy paste", "emoji meaning", "copy and paste"].some((skip) =>
        k.toLowerCase().includes(skip)
      )
  );

export const buildBatch = (
  emoji: Emoji,
  batchId: string,
  fields: Omit<EmojiBatchEnrichment, "batchId">
): EmojiBatchEnrichment => ({
  batchId,
  ...fields,
});

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
