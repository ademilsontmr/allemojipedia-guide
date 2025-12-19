import { useSearchParams, Link } from "react-router-dom";
import { Layout, Breadcrumbs } from "@/components/Layout";
import { EmojiCard } from "@/components/EmojiCard";
import { categories } from "@/data/categories";
import { getTrendingEmojis, getPopularCombos, searchEmojis } from "@/data/emojis";
import { Helmet } from "react-helmet-async";

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
                  <div key={i} className="flex items-center gap-4 p-4 rounded-lg bg-muted/50">
                    <span className="emoji text-2xl">{combo.emojis}</span>
                    <p className="text-sm">{combo.meaning}</p>
                  </div>
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
