import { Helmet } from "react-helmet-async";
import { useParams, Navigate, Link } from "react-router-dom";
import { Layout, Breadcrumbs } from "@/components/Layout";
import { emojis } from "@/data/emojis";
import { ArrowLeft, Check, X } from "lucide-react";

const EmojiComparison = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Parse slug like "grinning-face-vs-grinning-face-with-big-eyes"
  const parts = slug?.split('-vs-');
  if (!parts || parts.length !== 2) {
    return <Navigate to="/" replace />;
  }

  const [slug1, slug2] = parts;
  const emoji1 = emojis.find(e => e.slug === slug1);
  const emoji2 = emojis.find(e => e.slug === slug2);

  if (!emoji1 || !emoji2) {
    return <Navigate to="/" replace />;
  }

  const pageTitle = `${emoji1.unicode} ${emoji1.name} vs ${emoji2.unicode} ${emoji2.name}`;
  const pageDescription = `Compare ${emoji1.name} and ${emoji2.name} emojis. Learn the differences, when to use each one, and their emotional tones.`;

  return (
    <Layout>
      <Helmet>
        <title>{pageTitle} | Allemojipedia</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={`${emoji1.name} vs ${emoji2.name}, emoji comparison, ${emoji1.name}, ${emoji2.name}, emoji differences`} />
        <meta name="author" content="Emoji Pedia" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href={`https://allemojipedia.com/emoji/${slug}`} />
      </Helmet>

      <article className="container-page py-8 max-w-4xl mx-auto">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Emoji Comparisons", href: "/emoji-comparisons" },
            { label: pageTitle },
          ]}
        />

        <Link
          to="/emoji-comparisons"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Comparisons
        </Link>

        {/* Header */}
        <header className="mb-12 text-center">
          <div className="flex items-center justify-center gap-8 mb-6">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-6xl shadow-lg mb-3">
                {emoji1.unicode}
              </div>
              <p className="text-xl font-semibold">{emoji1.name}</p>
            </div>
            
            <span className="text-4xl font-bold text-muted-foreground">VS</span>
            
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-500/5 flex items-center justify-center text-6xl shadow-lg mb-3">
                {emoji2.unicode}
              </div>
              <p className="text-xl font-semibold">{emoji2.name}</p>
            </div>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            {emoji1.unicode} {emoji1.name} vs {emoji2.unicode} {emoji2.name}
          </h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            {pageDescription}
          </p>
          
          <div className="mt-8 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </header>

        {/* Quick Summary */}
        <section className="mb-12 p-6 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 border border-amber-200 dark:border-amber-800">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <span className="text-3xl">⚡</span>
            Quick Summary
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="font-semibold text-lg mb-2 flex items-center gap-2">
                {emoji1.unicode} {emoji1.name}
              </p>
              <p className="text-muted-foreground">{emoji1.shortMeaning}</p>
            </div>
            <div>
              <p className="font-semibold text-lg mb-2 flex items-center gap-2">
                {emoji2.unicode} {emoji2.name}
              </p>
              <p className="text-muted-foreground">{emoji2.shortMeaning}</p>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="w-1 h-8 bg-primary rounded-full" />
            Side-by-Side Comparison
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left p-4 font-semibold">Feature</th>
                  <th className="text-center p-4 font-semibold">{emoji1.unicode} {emoji1.name}</th>
                  <th className="text-center p-4 font-semibold">{emoji2.unicode} {emoji2.name}</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border hover:bg-muted/50 transition-colors">
                  <td className="p-4 font-medium">Emoji</td>
                  <td className="p-4 text-center text-5xl">{emoji1.unicode}</td>
                  <td className="p-4 text-center text-5xl">{emoji2.unicode}</td>
                </tr>
                <tr className="border-b border-border hover:bg-muted/50 transition-colors">
                  <td className="p-4 font-medium">Official Name</td>
                  <td className="p-4 text-center">{emoji1.name}</td>
                  <td className="p-4 text-center">{emoji2.name}</td>
                </tr>
                <tr className="border-b border-border hover:bg-muted/50 transition-colors">
                  <td className="p-4 font-medium">Meaning</td>
                  <td className="p-4 text-center text-sm">{emoji1.shortMeaning}</td>
                  <td className="p-4 text-center text-sm">{emoji2.shortMeaning}</td>
                </tr>
                <tr className="border-b border-border hover:bg-muted/50 transition-colors">
                  <td className="p-4 font-medium">Category</td>
                  <td className="p-4 text-center capitalize">{emoji1.categorySlug.replace(/-/g, ' ')}</td>
                  <td className="p-4 text-center capitalize">{emoji2.categorySlug.replace(/-/g, ' ')}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Emotional Tone */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="w-1 h-8 bg-primary rounded-full" />
            Emotional Tone
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl border border-border bg-card">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{emoji1.unicode}</span>
                <p className="text-xl font-semibold">{emoji1.name}</p>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {getEmotionalTone(emoji1)}
              </p>
            </div>
            
            <div className="p-6 rounded-2xl border border-border bg-card">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{emoji2.unicode}</span>
                <p className="text-xl font-semibold">{emoji2.name}</p>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {getEmotionalTone(emoji2)}
              </p>
            </div>
          </div>
        </section>

        {/* When to Use Each */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="w-1 h-8 bg-primary rounded-full" />
            When to Use Each Emoji
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border border-green-200 dark:border-green-800">
              <div className="flex items-center gap-3 mb-4">
                <Check className="w-6 h-6 text-green-600 dark:text-green-400" />
                <p className="text-xl font-semibold">Use {emoji1.unicode}</p>
              </div>
              <ul className="space-y-2">
                {getUseCases(emoji1).map((useCase, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                    <span className="text-muted-foreground">{useCase}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-950/30 dark:to-violet-950/30 border border-purple-200 dark:border-purple-800">
              <div className="flex items-center gap-3 mb-4">
                <Check className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                <p className="text-xl font-semibold">Use {emoji2.unicode}</p>
              </div>
              <ul className="space-y-2">
                {getUseCases(emoji2).map((useCase, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-purple-600 dark:text-purple-400 mt-1">•</span>
                    <span className="text-muted-foreground">{useCase}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Key Differences */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="w-1 h-8 bg-primary rounded-full" />
            Key Differences
          </h2>
          
          <div className="p-6 rounded-2xl border border-border bg-card">
            <ul className="space-y-4">
              {getKeyDifferences(emoji1, emoji2).map((diff, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold mt-0.5">
                    {i + 1}
                  </span>
                  <p className="text-muted-foreground leading-relaxed">{diff}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Related Emojis */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="w-1 h-8 bg-primary rounded-full" />
            Related Emojis
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <Link
              to={`/emoji/${emoji1.slug}`}
              className="p-4 rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 bg-card text-center"
            >
              <div className="text-4xl mb-2">{emoji1.unicode}</div>
              <p className="text-sm font-medium line-clamp-2">{emoji1.name}</p>
            </Link>
            
            <Link
              to={`/emoji/${emoji2.slug}`}
              className="p-4 rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 bg-card text-center"
            >
              <div className="text-4xl mb-2">{emoji2.unicode}</div>
              <p className="text-sm font-medium line-clamp-2">{emoji2.name}</p>
            </Link>
            
            {emojis
              .filter(e => 
                e.categorySlug === emoji1.categorySlug && 
                e.slug !== emoji1.slug && 
                e.slug !== emoji2.slug
              )
              .slice(0, 6)
              .map(emoji => (
                <Link
                  key={emoji.slug}
                  to={`/emoji/${emoji.slug}`}
                  className="p-4 rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 bg-card text-center"
                >
                  <div className="text-4xl mb-2">{emoji.unicode}</div>
                  <p className="text-sm font-medium line-clamp-2">{emoji.name}</p>
                </Link>
              ))}
          </div>
        </section>
      </article>
    </Layout>
  );
};

// Helper functions
function getEmotionalTone(emoji: typeof emojis[0]): string {
  const tones: Record<string, string> = {
    'grinning-face': 'Expresses pure, unrestrained joy and excitement. Very enthusiastic and energetic.',
    'grinning-face-with-big-eyes': 'Shows happiness with a touch of surprise or excitement. More open and welcoming.',
    'grinning-face-with-smiling-eyes': 'Conveys genuine warmth and contentment. Friendly and approachable.',
    'beaming-face-with-smiling-eyes': 'Radiates intense happiness and positivity. Very cheerful and bright.',
    'face-with-tears-of-joy': 'Indicates something is hilariously funny. Overwhelming amusement.',
    'slightly-smiling-face': 'Subtle, gentle happiness. Polite and understated.',
  };
  
  return tones[emoji.slug] || `Conveys ${emoji.shortMeaning.toLowerCase()}. ${emoji.detailedMeaning || ''}`;
}

function getUseCases(emoji: typeof emojis[0]): string[] {
  const cases: Record<string, string[]> = {
    'grinning-face': [
      'When you\'re extremely excited about something',
      'Celebrating good news or achievements',
      'Expressing enthusiasm in casual conversations',
      'Showing genuine happiness without reservation'
    ],
    'grinning-face-with-big-eyes': [
      'When greeting someone warmly',
      'Expressing pleasant surprise',
      'Showing openness to new ideas',
      'Conveying friendly, welcoming energy'
    ],
    'grinning-face-with-smiling-eyes': [
      'For genuine, heartfelt happiness',
      'When you want to appear warm and friendly',
      'In professional contexts requiring positivity',
      'Expressing contentment and satisfaction'
    ],
  };
  
  return cases[emoji.slug] || [
    `When expressing ${emoji.shortMeaning.toLowerCase()}`,
    'In casual conversations with friends',
    'To add emotional context to messages',
    'When the situation calls for this specific emotion'
  ];
}

function getKeyDifferences(emoji1: typeof emojis[0], emoji2: typeof emojis[0]): string[] {
  return [
    `${emoji1.unicode} ${emoji1.name} ${emoji1.shortMeaning.toLowerCase()}, while ${emoji2.unicode} ${emoji2.name} ${emoji2.shortMeaning.toLowerCase()}.`,
    `The visual difference: ${emoji1.unicode} has a distinct appearance compared to ${emoji2.unicode}, making each suitable for different contexts.`,
    `In terms of intensity, these emojis convey different levels of emotion - choose based on how strongly you want to express yourself.`,
    `Context matters: ${emoji1.unicode} works better in some situations, while ${emoji2.unicode} is more appropriate in others.`
  ];
}

export default EmojiComparison;
