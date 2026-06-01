export type EmojiBatchExample = { context: string; text: string };

export type EmojiBatchContextBlock = { title: string; body: string };

export type EmojiBatchFaq = { question: string; answer: string };

/** Hand-written enrichment for a single emoji page (one batch entry). */
export type EmojiBatchEnrichment = {
  batchId: string;
  searchTitle?: string;
  snippetAnswer?: string;
  detailedParagraphs?: string[];
  textingMeaning?: string;
  socialMeaning?: string;
  caution?: string;
  examples?: EmojiBatchExample[];
  contextBlocks?: EmojiBatchContextBlock[];
  searchIntents?: string[];
  whenNotToUse?: string[];
  faqs?: EmojiBatchFaq[];
};

export type EditorialBatchMeta = {
  id: string;
  name: string;
  category: string;
  emojiCount: number;
  status: "complete" | "in-progress";
  notes?: string;
};
