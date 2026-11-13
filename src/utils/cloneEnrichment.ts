import type { EmojiBatchEnrichment } from "@/data/emojiEditorialBatches/types";

/** Phrases that mean the enrichment is a slot-fill clone, not unique editorial. */
export const CLONE_ENRICHMENT_MARKERS = [
  "Just posted my new photo",
  "Can't wait to see you",
  "That's amazing",
  "faster visual shorthand than spelling it out",
  "nationality, travel, sports support, and cultural pride",
  "During international tournaments and national holidays",
  "functions as input symbols and Latin letters",
  "functions as media playback controls",
] as const;

export const isCloneEnrichment = (batch: EmojiBatchEnrichment | undefined | null): boolean => {
  if (!batch) return false;
  const blob = [
    batch.snippetAnswer,
    ...(batch.detailedParagraphs ?? []),
    ...(batch.examples?.map((example) => example.text) ?? []),
  ]
    .filter(Boolean)
    .join("\n");

  return CLONE_ENRICHMENT_MARKERS.some((marker) => blob.includes(marker));
};
