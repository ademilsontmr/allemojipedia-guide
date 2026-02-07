import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Layout, Breadcrumbs } from "@/components/Layout";
import { emojis } from "@/data/emojis";

// Popular emoji comparisons
const popularComparisons = [
  // Smileys - Very similar faces
  { slug1: 'grinning-face', slug2: 'grinning-face-with-big-eyes' },
  { slug1: 'grinning-face-with-smiling-eyes', slug2: 'beaming-face-with-smiling-eyes' },
  { slug1: 'face-with-tears-of-joy', slug2: 'rolling-on-the-floor-laughing' },
  { slug1: 'slightly-smiling-face', slug2: 'smiling-face' },
  { slug1: 'smiling-face-with-smiling-eyes', slug2: 'smiling-face' },
  { slug1: 'upside-down-face', slug2: 'slightly-smiling-face' },
  
  // Love & Hearts
  { slug1: 'smiling-face-with-hearts', slug2: 'smiling-face-with-heart-eyes' },
  { slug1: 'face-blowing-a-kiss', slug2: 'kissing-face' },
  { slug1: 'red-heart', slug2: 'pink-heart' },
  { slug1: 'red-heart', slug2: 'orange-heart' },
  { slug1: 'red-heart', slug2: 'yellow-heart' },
  { slug1: 'red-heart', slug2: 'purple-heart' },
  { slug1: 'red-heart', slug2: 'blue-heart' },
  { slug1: 'red-heart', slug2: 'black-heart' },
  { slug1: 'sparkling-heart', slug2: 'two-hearts' },
  { slug1: 'heart-with-arrow', slug2: 'heart-with-ribbon' },
  { slug1: 'beating-heart', slug2: 'growing-heart' },
  { slug1: 'broken-heart', slug2: 'mending-heart' },
  
  // Thinking & Confused
  { slug1: 'thinking-face', slug2: 'face-with-raised-eyebrow' },
  { slug1: 'confused-face', slug2: 'worried-face' },
  { slug1: 'neutral-face', slug2: 'expressionless-face' },
  { slug1: 'face-with-rolling-eyes', slug2: 'unamused-face' },
  { slug1: 'smirking-face', slug2: 'face-with-raised-eyebrow' },
  
  // Sad & Crying
  { slug1: 'crying-face', slug2: 'loudly-crying-face' },
  { slug1: 'pleading-face', slug2: 'crying-face' },
  { slug1: 'disappointed-face', slug2: 'pensive-face' },
  { slug1: 'weary-face', slug2: 'tired-face' },
  
  // Angry & Frustrated
  { slug1: 'angry-face', slug2: 'pouting-face' },
  { slug1: 'face-with-symbols-on-mouth', slug2: 'angry-face' },
  
  // Winking & Playful
  { slug1: 'winking-face', slug2: 'smiling-face-with-smiling-eyes' },
  { slug1: 'winking-face-with-tongue', slug2: 'face-with-tongue' },
  { slug1: 'zany-face', slug2: 'squinting-face-with-tongue' },
  
  // Surprised & Shocked
  { slug1: 'face-with-open-mouth', slug2: 'hushed-face' },
  { slug1: 'astonished-face', slug2: 'face-screaming-in-fear' },
  { slug1: 'flushed-face', slug2: 'hot-face' },
  
  // Sick & Unwell
  { slug1: 'face-with-thermometer', slug2: 'nauseated-face' },
  { slug1: 'sneezing-face', slug2: 'face-with-medical-mask' },
  { slug1: 'dizzy-face', slug2: 'woozy-face' },
  
  // Cool & Party
  { slug1: 'smiling-face-with-sunglasses', slug2: 'nerd-face' },
  { slug1: 'partying-face', slug2: 'cowboy-hat-face' },
  
  // Hands & Gestures
  { slug1: 'thumbs-up', slug2: 'thumbs-down' },
  { slug1: 'waving-hand', slug2: 'raised-hand' },
  { slug1: 'clapping-hands', slug2: 'raising-hands' },
  { slug1: 'folded-hands', slug2: 'palms-up-together' },
  { slug1: 'victory-hand', slug2: 'crossed-fingers' },
  { slug1: 'ok-hand', slug2: 'pinched-fingers' },
  { slug1: 'raised-fist', slug2: 'oncoming-fist' },
  { slug1: 'love-you-gesture', slug2: 'sign-of-the-horns' },
  { slug1: 'writing-hand', slug2: 'selfie' },
  
  // Monkeys
  { slug1: 'see-no-evil-monkey', slug2: 'hear-no-evil-monkey' },
  { slug1: 'hear-no-evil-monkey', slug2: 'speak-no-evil-monkey' },
  
  // Cat faces
  { slug1: 'grinning-cat', slug2: 'grinning-cat-with-smiling-eyes' },
  { slug1: 'smiling-cat-with-heart-eyes', slug2: 'kissing-cat' },
  { slug1: 'cat-with-tears-of-joy', slug2: 'grinning-cat' },
];

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
