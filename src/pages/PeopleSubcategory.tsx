import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Layout, Breadcrumbs } from "@/components/Layout";
import { EmojiCard } from "@/components/EmojiCard";
import { peopleSubcategories } from "@/data/categories";
import { Helmet } from "react-helmet-async";
import NotFound from "./NotFound";

import type { Emoji } from "@/data/emojis";
import { getEmojiCache } from "@/data/emojisCache";

const PeopleSubcategory = () => {
  const { slug } = useParams<{ slug: string }>();
  const subcategory = peopleSubcategories.find(s => s.slug === slug);
  const [emojis, setEmojis] = useState<Emoji[]>([]);
  const [isEmojiDataLoaded, setIsEmojiDataLoaded] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      const emojisModule = await getEmojiCache();
      if (cancelled) return;

      const allPeopleEmojis = emojisModule.getEmojisByCategory("people-and-body");
      const filtered = subcategory
        ? allPeopleEmojis.filter(e => subcategory.subgroups.includes(e.subgroup))
        : [];

      setEmojis(filtered);
      setIsEmojiDataLoaded(true);
    };

    setIsEmojiDataLoaded(false);
    load().catch(() => {
      if (!cancelled) setIsEmojiDataLoaded(true);
    });

    return () => {
      cancelled = true;
    };
  }, [slug, subcategory]);

  if (!subcategory) return <NotFound />;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://allemojipedia.com" },
      { "@type": "ListItem", "position": 2, "name": "People Hub", "item": "https://allemojipedia.com/people" },
      { "@type": "ListItem", "position": 3, "name": subcategory.name }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `How many ${subcategory.name.toLowerCase()} emojis are there?`,
        "acceptedAnswer": { "@type": "Answer", "text": `There are ${emojis.length} ${subcategory.name.toLowerCase()} emojis available, including variations for skin tones and genders.` }
      },
      {
        "@type": "Question",
        "name": `How do I copy ${subcategory.name.toLowerCase()} emojis?`,
        "acceptedAnswer": { "@type": "Answer", "text": "Click on any emoji to copy it instantly. Then paste it anywhere - WhatsApp, Instagram, Twitter, or any text field." }
      }
    ]
  };

  return (
    <Layout>
      <Helmet>
        <title>{subcategory.name} Emojis — Copy & Paste | Allemojipedia</title>
        <meta name="description" content={`${subcategory.description} Copy and paste ${emojis.length} ${subcategory.name.toLowerCase()} emojis instantly.`} />
        <meta name="keywords" content={`${subcategory.name.toLowerCase()} emojis, ${subcategory.name.toLowerCase()} emoji list, copy ${subcategory.name.toLowerCase()} emojis`} />
        <link rel="canonical" href={`https://allemojipedia.com/people/${slug}`} />
      </Helmet>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="container-page section-spacing">
        <Breadcrumbs items={[
          { label: "Home", href: "/" },
          { label: "People Hub", href: "/people" },
          { label: subcategory.name }
        ]} />

        {/* H1 - Main Title */}
        <header className="mb-8">
          <div className="flex items-center gap-4 mb-3">
            <span className="emoji text-5xl">{subcategory.icon}</span>
            <h1 className="text-3xl font-bold">{subcategory.name} Emojis</h1>
          </div>
          <p className="text-muted-foreground">{subcategory.description}</p>
        </header>

        {/* H2 - All Emojis */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-6">All {subcategory.name} Emojis ({emojis.length})</h2>
          {!isEmojiDataLoaded ? (
            <p className="text-muted-foreground">Loading emojis…</p>
          ) : (
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {emojis.map(emoji => <EmojiCard key={emoji.slug} emoji={emoji} />)}
            </div>
          )}
        </section>

        {/* H2 - FAQ */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4 max-w-2xl">
            <div className="p-4 rounded-lg bg-muted/30">
              <h3 className="font-semibold mb-2">How many {subcategory.name.toLowerCase()} emojis are there?</h3>
              <p className="text-muted-foreground">There are {emojis.length} {subcategory.name.toLowerCase()} emojis available, including variations for skin tones and genders.</p>
            </div>
            <div className="p-4 rounded-lg bg-muted/30">
              <h3 className="font-semibold mb-2">How do I copy {subcategory.name.toLowerCase()} emojis?</h3>
              <p className="text-muted-foreground">Click on any emoji to copy it instantly. Then paste it anywhere - WhatsApp, Instagram, Twitter, or any text field.</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default PeopleSubcategory;
