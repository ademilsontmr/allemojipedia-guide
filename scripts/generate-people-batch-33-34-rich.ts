/**
 * Regenerate batch 33–34 with improved editorial (native-rich + gesture knowledge).
 * Run: npx tsx scripts/generate-people-batch-33-34-rich.ts
 */
import { batch33PeopleBodyRichGestures } from "../src/data/emojiEditorialBatches/batch33-people-body-rich-gestures";
import { batch34PeopleBodyRichComplete } from "../src/data/emojiEditorialBatches/batch34-people-body-rich-complete";
import { buildPeopleRichSpec } from "./editorial/buildPeopleRich";
import { writeBatchFile } from "./editorial/serializeBatch";

const BATCH33_ID = "33-people-body-rich-gestures";
const BATCH34_ID = "34-people-body-rich-complete";

const BATCH33 = Object.keys(batch33PeopleBodyRichGestures);
const BATCH34 = Object.keys(batch34PeopleBodyRichComplete);

const batch33Entries = Object.fromEntries(
  BATCH33.map((slug) => [slug, buildPeopleRichSpec(slug, BATCH33_ID)]),
);
const batch34Entries = Object.fromEntries(
  BATCH34.map((slug) => [slug, buildPeopleRichSpec(slug, BATCH34_ID)]),
);

writeBatchFile(
  "batch33-people-body-rich-gestures.ts",
  "batch33PeopleBodyRichGestures",
  BATCH33_ID,
  "Batch 33 — 100 RICH People bases; improved manual editorial (gestures, roles, family).",
  batch33Entries,
);
writeBatchFile(
  "batch34-people-body-rich-complete.ts",
  "batch34PeopleBodyRichComplete",
  BATCH34_ID,
  "Batch 34 — remaining RICH People bases; improved manual editorial.",
  batch34Entries,
);
console.log("Regenerated batches 33–34:", BATCH33.length + BATCH34.length, "slugs");
