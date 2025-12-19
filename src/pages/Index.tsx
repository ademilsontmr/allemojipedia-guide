import { useSearchParams, Link } from "react-router-dom";
import { useState } from "react";
import { Layout, Breadcrumbs } from "@/components/Layout";
import { EmojiCard } from "@/components/EmojiCard";
import { categories } from "@/data/categories";
import { getTrendingEmojis, getPopularCombos, searchEmojis } from "@/data/emojis";
import { Helmet } from "react-helmet-async";
import { toast } from "sonner";
import { Copy, Check } from "lucide-react";


const ComboCard = ({ emojis, meaning }: { emojis: string; meaning: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(emojis);
      setCopied(true);
      toast.success(`${emojis} copied!`, { duration: 2000 });
      
      // Haptic feedback on mobile
      if (navigator.vibrate) {
        navigator.vibrate(50);
      }
      
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Failed to copy");
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted border border-transparent hover:border-primary/30 transition-all duration-300 text-left group w-full"
    >
      <span className="text-3xl group-hover:scale-110 transition-transform duration-300">{emojis}</span>
      <div className="flex-1 min-w-0">
        <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{meaning}</p>
      </div>
      <div className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${copied ? 'bg-green-500/20 text-green-500' : 'bg-muted-foreground/10 text-muted-foreground group-hover:text-primary'}`}>
        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
      </div>
    </button>
  );
};

const Index = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search") || "";
  const searchResults = query ? searchEmojis(query) : [];
  const trending = getTrendingEmojis();
  const combos = getPopularCombos();

  return (
    <Layout>
      <Helmet>
        <title>Allemojipedia — Emoji Meanings, Names & Copy</title>
        <meta name="description" content="Discover what emojis mean with Allemojipedia. Find emoji meanings, copy and paste emojis, and learn how to use them. Your complete emoji encyclopedia." />
        <link rel="canonical" href="https://allemojipedia.com/" />
      </Helmet>

      <div className="container-page">
        {query ? (
          <section className="section-spacing">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: `Search: ${query}` }]} />
            <h1 className="text-3xl font-bold mb-6">Search Results for "{query}"</h1>
            {searchResults.length > 0 ? (
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {searchResults.map(emoji => <EmojiCard key={emoji.slug} emoji={emoji} />)}
              </div>
            ) : (
              <p className="text-muted-foreground">No emojis found for "{query}". Try a different search term.</p>
            )}
          </section>
        ) : (
          <>
            <section className="section-spacing text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Allemojipedia — Emoji Meanings, Names & Copy</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Your complete emoji encyclopedia. Find what emojis mean, learn how to use them, and copy with one click. Discover emoji meanings for every occasion.
              </p>
            </section>

            <section className="section-spacing">
              <h2 className="text-2xl font-semibold mb-6">Emoji Categories</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {categories.map(cat => (
                  <Link
                    key={cat.slug}
                    to={`/category/${cat.slug}`}
                    className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-muted/50 transition-all"
                  >
                    <span className="emoji text-4xl">{cat.icon}</span>
                    <div>
                      <h3 className="font-semibold">{cat.name}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-1">{cat.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            <section className="section-spacing">
              <h2 className="text-2xl font-semibold mb-6">Trending Emoji Meanings</h2>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {trending.map(emoji => <EmojiCard key={emoji.slug} emoji={emoji} />)}
              </div>
            </section>

            <section className="section-spacing">
              <h2 className="text-2xl font-semibold mb-6">Popular Emoji Combos</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {combos.map((combo, i) => (
                  <ComboCard key={i} emojis={combo.emojis} meaning={combo.meaning} />
                ))}
              </div>
            </section>
          </>
        )}
      </div>
    </Layout>
  );
};

export default Index;
