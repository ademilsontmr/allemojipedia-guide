import { Link } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import type { Emoji } from "@/data/emojis";

export const EmojiCard = ({ emoji }: { emoji: Emoji }) => {
  const copyEmoji = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(emoji.unicode);
    toast({ title: "Copied!", description: `${emoji.unicode} ${emoji.name} copied to clipboard` });
  };

  return (
    <Link
      to={`/emoji/${emoji.slug}`}
      className="group flex items-center gap-3 p-3 rounded-lg bg-emoji-card hover:bg-emoji-card-hover transition-colors border border-transparent hover:border-border"
    >
      <button
        onClick={copyEmoji}
        className="emoji text-3xl hover:scale-110 transition-transform cursor-copy"
        title="Click to copy"
      >
        {emoji.unicode}
      </button>
      <div className="flex-1 min-w-0">
        <h3 className="font-medium text-sm truncate group-hover:text-primary transition-colors">{emoji.name}</h3>
        <p className="text-xs text-muted-foreground truncate">{emoji.shortMeaning}</p>
      </div>
    </Link>
  );
};

export const EmojiGrid = ({ emojis, title }: { emojis: Emoji[]; title?: string }) => (
  <section className="section-spacing">
    {title && <h2 className="text-2xl font-semibold mb-6">{title}</h2>}
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {emojis.map(emoji => <EmojiCard key={emoji.slug} emoji={emoji} />)}
    </div>
  </section>
);
