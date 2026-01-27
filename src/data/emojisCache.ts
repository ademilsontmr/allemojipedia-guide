import type { Emoji } from "@/data/emojis";

type Combo = { emojis: string; meaning: string };

type EmojiCache = {
  emojis: Emoji[];
  getEmojiBySlug: (slug: string) => Emoji | undefined;
  getEmojisByCategory: (categorySlug: string) => Emoji[];
  searchEmojis: (query: string) => Emoji[];
  getTrendingEmojis: () => Emoji[];
  getPopularCombos: () => Combo[];
};

let cachePromise: Promise<EmojiCache> | null = null;

const trendingSlugs = [
  "face-with-tears-of-joy",
  "red-heart",
  "fire",
  "loudly-crying-face",
  "smiling-face-with-heart-eyes",
  "thinking-face",
  "skull",
  "sparkles",
  "pleading-face",
  "hundred-points",
  "thumbs-up",
  "folded-hands",
];

const popularCombos: Combo[] = [
  { emojis: "😂💀", meaning: "Dying laughing - something is extremely funny" },
  { emojis: "❤️‍🔥", meaning: "Intense passion or burning love" },
  { emojis: "🥺👉👈", meaning: "Shy or hesitant request, asking cutely" },
  { emojis: "✨💅", meaning: "Self-confidence and treating yourself" },
  { emojis: "🙈🙉🙊", meaning: "See no evil, hear no evil, speak no evil" },
  { emojis: "💀⚰️", meaning: "Dead from laughter or something shocking" },
  { emojis: "🔥💯", meaning: "Something is absolutely perfect and impressive" },
  { emojis: "🥹🫶", meaning: "Touched and showing love/appreciation" },
];

export const getEmojiCache = async (): Promise<EmojiCache> => {
  if (cachePromise) return cachePromise;

  cachePromise = (async () => {
    const mod = await import("@/data/emojis");
    const emojis = mod.emojis as Emoji[];

    const bySlug = new Map<string, Emoji>();
    const byCategory = new Map<string, Emoji[]>();

    const searchable = emojis.map((e) => {
      const name = e.name.toLowerCase();
      const shortMeaning = e.shortMeaning.toLowerCase();
      const keywords = e.keywords.map((k) => k.toLowerCase());
      return { e, name, shortMeaning, keywords };
    });

    for (const e of emojis) {
      bySlug.set(e.slug, e);
      const list = byCategory.get(e.categorySlug);
      if (list) list.push(e);
      else byCategory.set(e.categorySlug, [e]);
    }

    const getEmojiBySlug = (slug: string) => bySlug.get(slug);

    const getEmojisByCategory = (categorySlug: string) => byCategory.get(categorySlug) ?? [];

    const searchEmojis = (query: string): Emoji[] => {
      const trimmed = query.trim();
      if (!trimmed) return [];

      const lowerQuery = trimmed.toLowerCase();

      return searchable
        .filter(({ e, name, shortMeaning, keywords }) =>
          name.includes(lowerQuery) ||
          e.unicode.includes(trimmed) ||
          shortMeaning.includes(lowerQuery) ||
          keywords.some((k) => k.includes(lowerQuery))
        )
        .map(({ e }) => e);
    };

    const getTrendingEmojis = (): Emoji[] => {
      return trendingSlugs.map((s) => bySlug.get(s)).filter((e): e is Emoji => Boolean(e));
    };

    const getPopularCombos = (): Combo[] => popularCombos;

    return {
      emojis,
      getEmojiBySlug,
      getEmojisByCategory,
      searchEmojis,
      getTrendingEmojis,
      getPopularCombos,
    };
  })();

  return cachePromise;
};
