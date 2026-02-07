import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Layout, Breadcrumbs } from "@/components/Layout";
import { emojis } from "@/data/emojis";
import { popularComparisons } from "@/data/emojiComparisons";

const EmojiComparisons = () => {
  const comparisons = popularComparisons
    .map(({ slug1, slug2 }) => {
      const emoji1 = emojis.find(e => e.slug === slug1);
      const emoji2 = emojis.find(e => e.slug === slug2);
      if (!emoji1 || !emoji2) return null;
      return { emoji1, emoji2, slug: `${slug1}-vs-${slug2}` };
    })
    .filter(Boolean);

  return (
    <Layout>
      <Helmet>
        <title>Emoji Comparisons: Side-by-Side Differences | Allemojipedia</title>
        <meta 
          name="description" 
          content="Compare similar emojis side-by-side. Learn the differences, when to use each one, and their emotional tones. Complete emoji comparison guide." 
        />
        <meta 
          name="keywords" 
          content="emoji comparison, emoji differences, emoji vs emoji, similar emojis, emoji guide" 
        />
        <link rel="canonical" href="https://allemojipedia.com/emoji-comparisons" />
      </Helmet>

      <div className="container-page py-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Emoji Comparisons" },
          ]}
        />

        <header className="mb-12 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Emoji Comparisons
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Compare similar emojis side-by-side to understand their differences, emotional tones, and when to use each one.
          </p>
        </header>

        {/* Popular Comparisons */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="w-1 h-8 bg-primary rounded-full" />
            Popular Comparisons
          </h2>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {comparisons.map((comp) => {
              if (!comp) return null;
              const { emoji1, emoji2, slug } = comp;
              
              return (
                <Link
                  key={slug}
                  to={`/emoji/${slug}`}
                  className="group block p-6 rounded-2xl border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 bg-card"
                >
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300">
                      {emoji1.unicode}
                    </div>
                    <span className="text-2xl font-bold text-muted-foreground">VS</span>
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-500/5 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300">
                      {emoji2.unicode}
                    </div>
                  </div>
                  
                  <h3 className="font-semibold text-center mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {emoji1.name} vs {emoji2.name}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground text-center line-clamp-2">
                    Compare these similar emojis
                  </p>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Why Compare Emojis */}
        <section className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 border border-amber-200 dark:border-amber-800">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <span className="text-3xl">💡</span>
            Why Compare Emojis?
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-muted-foreground">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Avoid Miscommunication</h3>
              <p>Similar-looking emojis can have different meanings. Understanding the nuances helps you express yourself accurately.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Choose the Right Tone</h3>
              <p>Each emoji conveys a slightly different emotional tone. Pick the one that matches your intended message.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Professional Communication</h3>
              <p>Some emojis are more appropriate for work contexts than others. Learn which ones to use professionally.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Cultural Awareness</h3>
              <p>Emoji meanings can vary across cultures. Comparing helps you understand these differences.</p>
            </div>
          </div>
        </section>

        {/* Browse by Category */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="w-1 h-8 bg-primary rounded-full" />
            Browse All Emojis
          </h2>
          
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              to="/category/smileys-and-emotion"
              className="p-6 rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 bg-card"
            >
              <div className="text-4xl mb-3">😊</div>
              <h3 className="font-semibold mb-1">Smileys & Emotion</h3>
              <p className="text-sm text-muted-foreground">Compare facial expressions</p>
            </Link>
            
            <Link
              to="/category/people-and-body"
              className="p-6 rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 bg-card"
            >
              <div className="text-4xl mb-3">👋</div>
              <h3 className="font-semibold mb-1">People & Body</h3>
              <p className="text-sm text-muted-foreground">Compare gestures and people</p>
            </Link>
            
            <Link
              to="/categories"
              className="p-6 rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 bg-card"
            >
              <div className="text-4xl mb-3">📂</div>
              <h3 className="font-semibold mb-1">All Categories</h3>
              <p className="text-sm text-muted-foreground">Browse all emoji categories</p>
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default EmojiComparisons;
