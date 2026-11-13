import { createHash } from "node:crypto";
import { emojis } from "../src/data/emojis";
import { blogPosts } from "../src/data/blogPosts";
import { getEmojiBatchEnrichment } from "../src/data/emojiEditorialBatches";
import { shouldIndexEmoji } from "../src/utils/seoPolicy";
import {
  getEnrichedDetailedParagraphs,
  getEnrichedExamples,
  getEmojiEditorial,
} from "../src/utils/emojiUniqueContent";

const CLONE_MARKERS = [
  "just posted my new photo",
  "can't wait to see you",
  "that's amazing",
  "faster visual shorthand than spelling it out",
  "nationality, travel, sports support, and cultural pride",
  "is used in digital communication to express",
  "is commonly used in texting, social media, and online communication",
  "context matters - meaning can vary by platform and conversation",
];

const escapeRegExp = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const skeleton = (text: string, extra: string[]) => {
  let out = text.toLowerCase();
  for (const token of extra) {
    if (!token) continue;
    out = out.replace(new RegExp(escapeRegExp(token.toLowerCase()), "g"), " ");
  }
  return out.replace(/[^\p{L}\p{N}\s]/gu, " ").replace(/\s+/g, " ").trim();
};

const hashText = (value: string) => createHash("sha1").update(value).digest("hex").slice(0, 12);

const wordCount = (value: string) => value.trim().split(/\s+/).filter(Boolean).length;

const indexable = emojis.filter(shouldIndexEmoji);

const clusterMap = new Map<string, string[]>();
let cloneMarkerPages = 0;
let uniqueHandwritten = 0;
let premiumOrGenerated = 0;
let noBatch = 0;
const batchIds = new Map<string, number>();
const categoryClone = new Map<string, { total: number; clone: number; clustered: number }>();

for (const emoji of indexable) {
  const batch = getEmojiBatchEnrichment(emoji);
  const paragraphs = getEnrichedDetailedParagraphs(emoji);
  const examples = getEnrichedExamples(emoji);
  const editorial = getEmojiEditorial(emoji);
  const blob = [editorial.snippetAnswer, ...paragraphs, ...examples.map((ex) => ex.text)].join("\n");
  const isClone = CLONE_MARKERS.some((marker) => blob.toLowerCase().includes(marker));
  if (isClone) cloneMarkerPages += 1;

  if (!batch) noBatch += 1;
  else if (batch.batchId.match(/^\d{2}-/) && Number(batch.batchId.slice(0, 2)) <= 50 && !isClone) {
    uniqueHandwritten += 1;
  } else {
    premiumOrGenerated += 1;
  }

  if (batch) batchIds.set(batch.batchId, (batchIds.get(batch.batchId) ?? 0) + 1);

  const extra = [
    emoji.unicode,
    emoji.name,
    ...emoji.name.split(/[\s:()]+/),
    ...emoji.keywords,
    emoji.slug.replace(/^flag-/, "").replace(/-/g, " "),
  ];
  const key = hashText(skeleton(blob, extra));
  const list = clusterMap.get(key) ?? [];
  list.push(emoji.slug);
  clusterMap.set(key, list);

  const cat = categoryClone.get(emoji.categorySlug) ?? { total: 0, clone: 0, clustered: 0 };
  cat.total += 1;
  if (isClone) cat.clone += 1;
  categoryClone.set(emoji.categorySlug, cat);
}

const clusters = [...clusterMap.entries()]
  .map(([hash, slugs]) => ({ hash, count: slugs.length, sample: slugs.slice(0, 4) }))
  .filter((row) => row.count > 1)
  .sort((a, b) => b.count - a.count);

for (const emoji of indexable) {
  const batch = getEmojiBatchEnrichment(emoji);
  const paragraphs = getEnrichedDetailedParagraphs(emoji);
  const editorial = getEmojiEditorial(emoji);
  const extra = [emoji.unicode, emoji.name, ...emoji.keywords, emoji.slug.replace(/-/g, " ")];
  const key = hashText(skeleton([editorial.snippetAnswer, ...paragraphs].join("\n"), extra));
  const clustered = (clusterMap.get(key)?.length ?? 0) > 1;
  if (clustered) {
    const cat = categoryClone.get(emoji.categorySlug)!;
    cat.clustered += 1;
  }
}

const blogSkeletons = new Map<string, string[]>();
for (const post of blogPosts) {
  const key = hashText(skeleton(post.content.slice(0, 1200), [post.title, post.slug.replace(/-/g, " ")]));
  const list = blogSkeletons.get(key) ?? [];
  list.push(post.slug);
  blogSkeletons.set(key, list);
}
const blogClusters = [...blogSkeletons.values()].filter((list) => list.length > 1);

const words = indexable.map((emoji) =>
  wordCount(
    [
      getEmojiEditorial(emoji).snippetAnswer,
      ...getEnrichedDetailedParagraphs(emoji),
      ...getEnrichedExamples(emoji).map((ex) => ex.text),
    ].join(" ")
  )
);
const avgWords = Math.round(words.reduce((a, b) => a + b, 0) / words.length);

console.log(JSON.stringify({
  indexable: indexable.length,
  cloneMarkerPages,
  uniqueHandwritten,
  premiumOrGenerated,
  noBatch,
  clusteredPages: clusters.reduce((n, row) => n + row.count, 0),
  clusterCount: clusters.length,
  topClusters: clusters.slice(0, 12),
  category: Object.fromEntries(categoryClone),
  topBatchIds: [...batchIds.entries()].sort((a, b) => b[1] - a[1]).slice(0, 15),
  blogPosts: blogPosts.length,
  blogDuplicateClusters: blogClusters.length,
  blogDuplicatePages: blogClusters.reduce((n, list) => n + list.length, 0),
  avgIndexableWords: avgWords,
  under180words: words.filter((n) => n < 180).length,
}, null, 2));
