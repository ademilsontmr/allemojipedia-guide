import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Layout, Breadcrumbs } from "@/components/Layout";
import { EmojiCard } from "@/components/EmojiCard";
import { peopleSubcategories } from "@/data/categories";
import { Helmet } from "react-helmet-async";

import type { Emoji } from "@/data/emojis";

const People = () => {
  const [peopleEmojis, setPeopleEmojis] = useState<Emoji[]>([]);
  const [isEmojiDataLoaded, setIsEmojiDataLoaded] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      const emojisModule = await import("@/data/emojis");
      if (cancelled) return;

      setPeopleEmojis(emojisModule.getEmojisByCategory("people-and-body").slice(0, 12));
      setIsEmojiDataLoaded(true);
    };

    setIsEmojiDataLoaded(false);
    load().catch(() => {
      if (!cancelled) setIsEmojiDataLoaded(true);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are people emojis?",
        "acceptedAnswer": { "@type": "Answer", "text": "People emojis represent human figures, gestures, emotions, professions, and families. They include skin tone modifiers and gender variations for inclusive communication." }
      },
      {
        "@type": "Question",
        "name": "How do I use skin tone variations?",
        "acceptedAnswer": { "@type": "Answer", "text": "Many people emojis support skin tone modifiers. Click on any emoji to see all available skin tone variations and copy the one you prefer." }
      }
    ]
  };

  return (
    <Layout>
      <Helmet>
        <title>People Emojis and Their Meanings | Allemojipedia</title>
        <meta name="description" content="Explore people emojis including gestures, emotions, professions, and family. Learn about skin tone variations and gender representations." />
        <meta name="keywords" content="people emojis, human emojis, gesture emojis, profession emojis, family emojis, skin tone emojis" />
        <link rel="canonical" href="https://allemojipedia.com/people" />
      </Helmet>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="container-page section-spacing">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "People Hub" }]} />
        
        {/* H1 - Main Title */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-3">People Emojis and Their Meanings</h1>
          <p className="text-muted-foreground max-w-2xl">
            Discover human emojis representing gestures, emotions, professions, and families. These emojis include skin tone modifiers and gender variations for inclusive, representative communication.
          </p>
        </header>

        {/* H2 - Browse by Type */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Browse by Type</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {peopleSubcategories.map(sub => (
              <Link
                key={sub.slug}
                to={`/people/${sub.slug}`}
                className="p-6 rounded-xl border border-border hover:border-primary/50 hover:shadow-md transition-all text-center"
              >
                <span className="emoji text-4xl block mb-3">{sub.icon}</span>
                <h3 className="font-semibold mb-1">{sub.name}</h3>
                <p className="text-sm text-muted-foreground">{sub.description}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* H2 - Popular People Emojis */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-6">Popular People Emojis</h2>
          {!isEmojiDataLoaded ? (
            <p className="text-muted-foreground">Loading emojis…</p>
          ) : (
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {peopleEmojis.map(emoji => <EmojiCard key={emoji.slug} emoji={emoji} />)}
            </div>
          )}
          <Link to="/category/people-and-body" className="inline-block mt-6 text-primary hover:underline">
            View all People & Body emojis →
          </Link>
        </section>

        {/* H2 - FAQ */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4 max-w-2xl">
            <div className="p-4 rounded-lg bg-muted/30">
              <h3 className="font-semibold mb-2">What are people emojis?</h3>
              <p className="text-muted-foreground">People emojis represent human figures, gestures, emotions, professions, and families. They include skin tone modifiers and gender variations for inclusive communication.</p>
            </div>
            <div className="p-4 rounded-lg bg-muted/30">
              <h3 className="font-semibold mb-2">How do I use skin tone variations?</h3>
              <p className="text-muted-foreground">Many people emojis support skin tone modifiers. Click on any emoji to see all available skin tone variations and copy the one you prefer.</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default People;
