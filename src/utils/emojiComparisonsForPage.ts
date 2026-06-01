import { popularComparisons } from "@/data/emojiComparisons";

export type EmojiComparisonLink = {
  slug1: string;
  slug2: string;
  href: string;
  label: string;
};

const comparisonLabel = (slug1: string, slug2: string, unicode1: string, unicode2: string, name1: string, name2: string) => {
  const pairs: Record<string, string> = {
    "face-with-tears-of-joy|rolling-on-the-floor-laughing": `${unicode1} vs ${unicode2}: hard laugh vs floor laugh`,
    "face-with-tears-of-joy|loudly-crying-face": `${unicode1} vs ${unicode2}: laughing vs crying (or both)`,
    "loudly-crying-face|skull": `${unicode1} vs ${unicode2}: dramatic reaction vs deadpan laugh`,
    "face-with-tears-of-joy|skull": `${unicode1} ${name1} vs ${unicode2} ${name2}`,
  };
  const key = [slug1, slug2].sort().join("|");
  return pairs[key] ?? `${unicode1} ${name1} vs ${unicode2} ${name2}`;
};

export const getComparisonLinksForEmoji = (
  emojiSlug: string,
  resolveEmoji: (slug: string) => { unicode: string; name: string } | undefined
): EmojiComparisonLink[] => {
  // Standalone priority pages — comparison lives on dedicated /emoji/x-vs-y/ URLs only.
  if (emojiSlug === "face-with-tears-of-joy" || emojiSlug === "skull") {
    return [];
  }

  return popularComparisons
    .filter(({ slug1, slug2 }) => slug1 === emojiSlug || slug2 === emojiSlug)
    .map(({ slug1, slug2 }) => {
      const a = resolveEmoji(slug1);
      const b = resolveEmoji(slug2);
      if (!a || !b) return null;
      return {
        slug1,
        slug2,
        href: `/emoji/${slug1}-vs-${slug2}/`,
        label: comparisonLabel(slug1, slug2, a.unicode, b.unicode, a.name, b.name),
      };
    })
    .filter((item): item is EmojiComparisonLink => item !== null);
};
