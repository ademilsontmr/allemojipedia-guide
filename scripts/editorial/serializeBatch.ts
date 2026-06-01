import { writeFileSync } from "fs";
import type { EmojiBatchEnrichment } from "../../src/data/emojiEditorialBatches/types";

export const esc = (s: string) => s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');

export const serializeEntry = (slug: string, spec: EmojiBatchEnrichment) => {
  const lines = [
    `  "${slug}": {`,
    `    batchId: BATCH_ID,`,
    `    searchTitle: "${esc(spec.searchTitle!)}",`,
    `    snippetAnswer: "${esc(spec.snippetAnswer!)}",`,
    `    detailedParagraphs: [${(spec.detailedParagraphs ?? []).map((p) => `"${esc(p)}"`).join(", ")}],`,
    `    textingMeaning: "${esc(spec.textingMeaning!)}",`,
    `    socialMeaning: "${esc(spec.socialMeaning!)}",`,
    `    caution: "${esc(spec.caution!)}",`,
    `    examples: [${(spec.examples ?? []).map((e) => `{ context: "${esc(e.context)}", text: "${esc(e.text)}" }`).join(", ")}],`,
    `    contextBlocks: [${(spec.contextBlocks ?? []).map((b) => `{ title: "${esc(b.title)}", body: "${esc(b.body)}" }`).join(", ")}],`,
    `    searchIntents: [${(spec.searchIntents ?? []).map((s) => `"${esc(s)}"`).join(", ")}],`,
    `    whenNotToUse: [${(spec.whenNotToUse ?? []).map((s) => `"${esc(s)}"`).join(", ")}],`,
    `    faqs: [${(spec.faqs ?? []).map((f) => `{ question: "${esc(f.question)}", answer: "${esc(f.answer)}" }`).join(", ")}],`,
    `  },`,
  ];
  return lines.join("\n");
};

export const writeBatchFile = (
  file: string,
  exportName: string,
  batchId: string,
  comment: string,
  entries: Record<string, EmojiBatchEnrichment>,
) => {
  const body = Object.entries(entries)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([slug, spec]) => serializeEntry(slug, spec))
    .join("\n");
  writeFileSync(
    `src/data/emojiEditorialBatches/${file}`,
    `import type { EmojiBatchEnrichment } from "./types";

const BATCH_ID = "${batchId}";

/** ${comment} */
export const ${exportName}: Record<string, EmojiBatchEnrichment> = {
${body}
};
`,
  );
  console.log(`Wrote ${file} (${Object.keys(entries).length} slugs)`);
};
