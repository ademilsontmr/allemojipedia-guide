import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Layout, Breadcrumbs } from "@/components/Layout";
import { EmojiCard } from "@/components/EmojiCard";
import { getCategoryBySlug } from "@/data/categories";
import { Helmet } from "react-helmet-async";
import NotFound from "./NotFound";

import type { Emoji } from "@/data/emojis";

const Category = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = getCategoryBySlug(slug || "");
  const [emojis, setEmojis] = useState<Emoji[]>([]);
  const [isEmojiDataLoaded, setIsEmojiDataLoaded] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      const emojisModule = await import("@/data/emojis");
      if (cancelled) return;

      setEmojis(emojisModule.getEmojisByCategory(slug || ""));
      setIsEmojiDataLoaded(true);
    };

    setIsEmojiDataLoaded(false);
    load().catch(() => {
      if (!cancelled) setIsEmojiDataLoaded(true);
    });

    return () => {
      cancelled = true;
    };
  }, [slug]);

  if (!category) return <NotFound />;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://allemojipedia.com" },
      { "@type": "ListItem", "position": 2, "name": "Categories", "item": "https://allemojipedia.com/categories" },
      { "@type": "ListItem", "position": 3, "name": category.name }
    ]
  };

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": `${category.name} Emojis`,
    "description": category.description,
    "url": `https://allemojipedia.com/category/${slug}`,
    "numberOfItems": emojis.length,
    "isPartOf": { "@type": "WebSite", "name": "Allemojipedia", "url": "https://allemojipedia.com" }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `How many ${category.name.toLowerCase()} emojis are there?`,
        "acceptedAnswer": { "@type": "Answer", "text": `There are ${emojis.length} ${category.name.toLowerCase()} emojis available. This includes all variations and skin tones.` }
      },
      {
        "@type": "Question",
        "name": `How do I copy ${category.name.toLowerCase()} emojis?`,
        "acceptedAnswer": { "@type": "Answer", "text": `Click on any emoji in the list below to copy it instantly. Then paste it anywhere - WhatsApp, Instagram, Twitter, or any text field.` }
      },
      {
        "@type": "Question",
        "name": `What are the most popular ${category.name.toLowerCase()} emojis?`,
        "acceptedAnswer": { "@type": "Answer", "text": `The most popular ${category.name.toLowerCase()} emojis include ${emojis.slice(0, 5).map(e => e.unicode).join(' ')}. Click on any emoji to learn more about its meaning.` }
      }
    ]
  };

  return (
    <Layout>
      <Helmet>
        <title>{`${category.name} Emojis — Copy & Paste All ${emojis.length} | Allemojipedia`}</title>
        <meta name="description" content={`${category.description} Copy and paste ${emojis.length} ${category.name.toLowerCase()} emojis instantly.`} />
        <meta name="keywords" content={`${category.name.toLowerCase()} emojis, ${category.name.toLowerCase()} emoji list, copy ${category.name.toLowerCase()} emojis`} />
        <link rel="canonical" href={`https://allemojipedia.com/category/${slug}`} />
      </Helmet>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="container-page section-spacing">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Categories", href: "/categories" }, { label: category.name }]} />
        
        {/* H1 - Main Title */}
        <header className="mb-8">
          <div className="flex items-center gap-4 mb-3">
            <span className="emoji text-5xl">{category.icon}</span>
            <h1 className="text-3xl font-bold">{category.name} Emojis</h1>
          </div>
          <p className="text-muted-foreground">{category.description}</p>
        </header>

        {/* H2 - All Emojis */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-6">All {category.name} Emojis ({emojis.length})</h2>
          {!isEmojiDataLoaded ? (
            <p className="text-muted-foreground">Loading emojis…</p>
          ) : emojis.length > 0 ? (
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {emojis.map(emoji => <EmojiCard key={emoji.slug} emoji={emoji} />)}
            </div>
          ) : (
            <p className="text-muted-foreground">No emojis found in this category yet.</p>
          )}
        </section>

        {/* H2 - FAQ */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4 max-w-2xl">
            <div className="p-4 rounded-lg bg-muted/30">
              <h3 className="font-semibold mb-2">How many {category.name.toLowerCase()} emojis are there?</h3>
              <p className="text-muted-foreground">There are {emojis.length} {category.name.toLowerCase()} emojis available. This includes all variations and skin tones.</p>
            </div>
            <div className="p-4 rounded-lg bg-muted/30">
              <h3 className="font-semibold mb-2">How do I copy {category.name.toLowerCase()} emojis?</h3>
              <p className="text-muted-foreground">Click on any emoji in the list above to copy it instantly. Then paste it anywhere - WhatsApp, Instagram, Twitter, or any text field.</p>
            </div>
            <div className="p-4 rounded-lg bg-muted/30">
              <h3 className="font-semibold mb-2">What are the most popular {category.name.toLowerCase()} emojis?</h3>
              <p className="text-muted-foreground">The most popular {category.name.toLowerCase()} emojis include {emojis.slice(0, 5).map(e => e.unicode).join(' ')}. Click on any emoji to learn more about its meaning.</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Category;
