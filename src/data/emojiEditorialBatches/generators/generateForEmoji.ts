import type { Emoji } from "@/data/emojis";
import type { EmojiBatchEnrichment } from "../types";
import { buildPremiumEnrichment } from "../premium/buildPremiumEnrichment";
import { getBatchIdForCategory, isThinContentEmoji } from "./shared";

export { getBatchIdForCategory };

export const generateBatchEnrichment = (emoji: Emoji): EmojiBatchEnrichment | undefined => {
  if (!isThinContentEmoji(emoji)) return undefined;
  return buildPremiumEnrichment(emoji);
};
