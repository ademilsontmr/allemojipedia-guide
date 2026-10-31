import type { Emoji } from "../data/emojis";
import { editorialMeta } from "../data/editorialMeta";
import { editorialBatchRegistry, getEmojiBatchEnrichment } from "../data/emojiEditorialBatches";

const batchUpdatedIso = new Map(editorialBatchRegistry.map((batch) => [batch.id, batch.updatedIso]));

const latestIso = (...dates: string[]): string => dates.reduce((a, b) => (b > a ? b : a));

/** Newest of the emoji's editorial batch and the shared page template. */
export const getEmojiLastmod = (emoji: Emoji): string => {
  const batchId = getEmojiBatchEnrichment(emoji)?.batchId;
  const batchDate = (batchId && batchUpdatedIso.get(batchId)) || editorialMeta.lastUpdatedIso;
  return latestIso(batchDate, editorialMeta.emojiTemplateUpdatedIso);
};
