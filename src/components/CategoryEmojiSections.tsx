import { useState } from "react";
import { EmojiCard } from "@/components/EmojiCard";
import type { Emoji } from "@/data/emojis";
import { isPriorityEmojiSlug } from "@/utils/seoPolicy";

type Props = {
  name: string;
  emojis: Emoji[];
  isLoaded: boolean;
  /** Slugs already shown elsewhere on the page. */
  excludeSlugs?: string[];
};

/** The full list stays behind a click so crawlers only follow links to indexable emoji pages. */
export const CategoryEmojiSections = ({ name, emojis, isLoaded, excludeSlugs = [] }: Props) => {
  const [showAll, setShowAll] = useState(false);
  const excluded = new Set(excludeSlugs);
  const priority = emojis.filter((emoji) => isPriorityEmojiSlug(emoji.slug) && !excluded.has(emoji.slug));

  if (!isLoaded) {
    return <p className="text-muted-foreground mb-8">Loading emojis…</p>;
  }

  return (
    <>
      {priority.length > 0 && (
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-6">Most searched {name} emoji meanings</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {priority.map((emoji) => (
              <EmojiCard key={emoji.slug} emoji={emoji} />
            ))}
          </div>
        </section>
      )}

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">All {name} Emojis ({emojis.length})</h2>
        {showAll ? (
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {emojis.map((emoji) => (
              <EmojiCard key={emoji.slug} emoji={emoji} />
            ))}
          </div>
        ) : (
          <>
            <p className="text-muted-foreground mb-4">
              Browse every {name.toLowerCase()} emoji, including skin tone and gender variants, and tap any of them to copy.
            </p>
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="px-5 py-2.5 rounded-lg border border-border hover:border-primary/50 hover:bg-muted/50 font-medium"
            >
              Show all {emojis.length} {name.toLowerCase()} emojis with meanings
            </button>
          </>
        )}
      </section>
    </>
  );
};
