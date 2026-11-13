import { useState } from "react";
import { EmojiCard } from "@/components/EmojiCard";
import type { Emoji } from "@/data/emojis";
import { isPriorityEmojiSlug, shouldIndexEmoji } from "@/utils/seoPolicy";

type Props = {
  name: string;
  emojis: Emoji[];
  isLoaded: boolean;
  /** Slugs already shown elsewhere on the page. */
  excludeSlugs?: string[];
};

/** Crawlable links go to indexable meaning pages. Skin-tone variants stay behind a click. */
export const CategoryEmojiSections = ({ name, emojis, isLoaded, excludeSlugs = [] }: Props) => {
  const [showAll, setShowAll] = useState(false);
  const excluded = new Set(excludeSlugs);
  const indexable = emojis.filter((emoji) => shouldIndexEmoji(emoji) && !excluded.has(emoji.slug));
  const priority = indexable.filter((emoji) => isPriorityEmojiSlug(emoji.slug));
  const moreMeanings = indexable.filter((emoji) => !isPriorityEmojiSlug(emoji.slug));
  const variants = emojis.filter((emoji) => !shouldIndexEmoji(emoji));

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

      {moreMeanings.length > 0 && (
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-6">More {name} emoji meanings</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {moreMeanings.map((emoji) => (
              <EmojiCard key={emoji.slug} emoji={emoji} />
            ))}
          </div>
        </section>
      )}

      {variants.length > 0 && (
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
                Browse every {name.toLowerCase()} emoji, including skin tone variants, and tap any of them to copy.
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
      )}
    </>
  );
};
