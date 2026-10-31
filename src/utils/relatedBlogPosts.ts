import type { BlogPost } from "@/data/blogPosts";

const STOP_WORDS = new Set([
  "the", "and", "for", "with", "what", "does", "mean", "means", "meaning", "meanings",
  "emoji", "emojis", "how", "use", "using", "guide", "your", "you", "are", "when", "why",
  "this", "that", "from", "in", "on", "of", "to", "vs", "copy", "paste", "texting", "text",
]);

const topicWords = (post: BlogPost): Set<string> =>
  new Set(
    (`${post.title} ${post.keywords ?? ""}`.toLowerCase().match(/[a-z]{3,}/g) ?? []).filter(
      (word) => !STOP_WORDS.has(word)
    )
  );

/** Hand-picked related posts first, then the closest topics; stable across builds and renders. */
export const getRelatedBlogPosts = (post: BlogPost, allPosts: BlogPost[], count = 6): BlogPost[] => {
  const bySlug = new Map(allPosts.map((item) => [item.slug, item]));
  const picked = (post.relatedPosts ?? [])
    .map((slug) => bySlug.get(slug))
    .filter((item): item is BlogPost => Boolean(item) && item?.slug !== post.slug);
  const pickedSlugs = new Set(picked.map((item) => item.slug));
  const ownWords = topicWords(post);

  const byTopic = allPosts
    .filter((item) => item.slug !== post.slug && !pickedSlugs.has(item.slug))
    .map((item) => {
      let score = 0;
      topicWords(item).forEach((word) => {
        if (ownWords.has(word)) score++;
      });
      return { item, score };
    })
    .sort(
      (a, b) =>
        b.score - a.score || b.item.date.localeCompare(a.item.date) || a.item.slug.localeCompare(b.item.slug)
    )
    .map(({ item }) => item);

  return [...picked, ...byTopic].slice(0, count);
};
