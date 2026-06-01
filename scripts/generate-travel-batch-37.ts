/**
 * Batch 37 — Travel clocks, moon phases, and sky (final thin Travel pages).
 * Run: npx tsx scripts/generate-travel-batch-37.ts
 */
import { emojis } from "../src/data/emojis";
import { buildTravelSpec } from "./editorial/buildTravel";
import { writeBatchFile } from "./editorial/serializeBatch";

const BATCH_ID = "37-travel-clocks-moon-astro";

/** Fixed queue — deferred from batches 18–19 (clocks/moon/astro). */
const BATCH37_SLUGS = [
  "eight-oclock", "eight-thirty", "eleven-oclock", "eleven-thirty",
  "first-quarter-moon", "first-quarter-moon-face", "five-oclock", "five-thirty",
  "four-oclock", "four-thirty", "full-moon-face", "last-quarter-moon",
  "last-quarter-moon-face", "new-moon-face", "nine-oclock", "nine-thirty",
  "one-oclock", "one-thirty", "ringed-planet", "seven-oclock", "seven-thirty",
  "six-oclock", "six-thirty", "sun-with-face", "ten-oclock", "ten-thirty",
  "three-oclock", "three-thirty", "twelve-oclock", "twelve-thirty",
  "two-oclock", "two-thirty", "waning-crescent-moon", "waning-gibbous-moon",
  "waxing-crescent-moon", "waxing-gibbous-moon", "wind-face",
] as const;

const entries = Object.fromEntries(
  BATCH37_SLUGS.map((slug) => {
    const emoji = emojis.find((e) => e.slug === slug)!;
    if (!emoji) throw new Error(`Missing emoji: ${slug}`);
    return [slug, buildTravelSpec(emoji, BATCH_ID)];
  }),
);

writeBatchFile(
  "batch37-travel-clocks-moon-astro.ts",
  "batch37TravelClocksMoonAstro",
  BATCH_ID,
  "Batch 37 — clocks, moon phases, sun/planet/wind; completes Travel thin editorial.",
  entries,
);
console.log("Slugs:", BATCH37_SLUGS.length);
