import { useParams, Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { Layout, Breadcrumbs } from "@/components/Layout";
import { CopyEmojiCard } from "@/components/CopyEmojiCard";
import { getCategoryBySlug } from "@/data/categories";
import { Helmet } from "react-helmet-async";
import NotFound from "./NotFound";

import type { Emoji } from "@/data/emojis";
import { getEmojiCache } from "@/data/emojisCache";

const EmojiDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [emoji, setEmoji] = useState<Emoji | null>(null);
  const [relatedEmojis, setRelatedEmojis] = useState<Emoji[]>([]);
  const [categoryEmojis, setCategoryEmojis] = useState<Emoji[]>([]);
  const [isEmojiDataLoaded, setIsEmojiDataLoaded] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      const emojisModule = await getEmojiCache();
      if (cancelled) return;

      const found = emojisModule.getEmojiBySlug(slug || "") as Emoji | undefined;

      if (!found) {
        setEmoji(null);
        setRelatedEmojis([]);
        setCategoryEmojis([]);
        setIsEmojiDataLoaded(true);
        return;
      }

      const related = (found.relatedEmojis
        .map((s) => emojisModule.getEmojiBySlug(s) as Emoji | undefined)
        .filter(Boolean) as Emoji[]).slice(0, 6);

      const pool = emojisModule
        .getEmojisByCategory(found.categorySlug)
        .filter((e: Emoji) => e.slug !== found.slug);

      const sameCategory = (() => {
        if (pool.length <= 3) return pool;
        const copy = pool.slice();
        for (let i = copy.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const tmp = copy[i];
          copy[i] = copy[j];
          copy[j] = tmp;
          if (copy.length - i >= 3) break;
        }
        return copy.slice(0, 3);
      })();

      setEmoji(found);
      setRelatedEmojis(related);
      setCategoryEmojis(sameCategory);
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

  const category = useMemo(() => {
    return emoji ? getCategoryBySlug(emoji.categorySlug) : null;
  }, [emoji]);

  if (!isEmojiDataLoaded) {
    return (
      <Layout>
        <div className="container-page section-spacing">
          <p className="text-muted-foreground">Loading emoji…</p>
        </div>
      </Layout>
    );
  }

  if (!emoji) return <NotFound />;

  const primaryRelated = relatedEmojis[0];

  const faqItems = [
    {
      question: `Is the ${emoji.unicode} emoji informal?`,
      answer: emoji.usageContexts.some(ctx => ctx.toLowerCase().includes('casual') || ctx.toLowerCase().includes('friend'))
        ? `Yes, the ${emoji.name} emoji is generally considered informal and works best in casual conversations with friends and family.`
        : `The ${emoji.name} emoji can be used in both casual and semi-formal contexts, depending on your relationship with the recipient.`
    },
    {
      question: `Can I use the ${emoji.unicode} emoji at work?`,
      answer: emoji.usageContexts.some(ctx => ctx.toLowerCase().includes('professional') || ctx.toLowerCase().includes('work'))
        ? `Yes, ${emoji.unicode} is generally appropriate for workplace communication when used in casual team chats or friendly emails with colleagues you know well.`
        : `Use ${emoji.unicode} cautiously at work. It's acceptable in informal team chats but avoid it in formal emails or communication with clients and executives.`
    },
    {
      question: primaryRelated ? `What is the difference between ${emoji.unicode} and ${primaryRelated.unicode}?` : `How do I copy the ${emoji.name} emoji?`,
      answer: primaryRelated
        ? `While both emojis may seem similar, ${emoji.unicode} ${emoji.name} is typically used to ${emoji.usageContexts[0]?.toLowerCase() || 'express a specific feeling'}, whereas ${primaryRelated.unicode} ${primaryRelated.name} conveys ${primaryRelated.keywords?.[0] || 'a different nuance'}. Choose based on the exact tone you want to communicate.`
        : `Simply click on the ${emoji.unicode} emoji in the Copy section above to instantly copy it to your clipboard. Then paste it anywhere you need.`
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": { "@type": "Answer", "text": item.answer }
    }))
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": `${emoji.unicode} ${emoji.name} Emoji: Meaning and How to Use`,
    "description": emoji.shortMeaning,
    "url": `https://allemojipedia.com/emoji/${slug}/`,
    "inLanguage": "en-US",
    "isPartOf": { "@type": "WebSite", "name": "Allemojipedia", "url": "https://allemojipedia.com/" },
    "about": { "@type": "Thing", "name": emoji.name, "description": emoji.shortMeaning },
    "mainEntity": {
      "@type": "DefinedTerm",
      "name": `${emoji.unicode} ${emoji.name}`,
      "description": emoji.detailedMeaning.split('\n')[0],
      "inDefinedTermSet": { "@type": "DefinedTermSet", "name": "Unicode Emoji", "url": "https://unicode.org/emoji/" }
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://allemojipedia.com/" },
      { "@type": "ListItem", "position": 2, "name": category?.name || "Category", "item": `https://allemojipedia.com/category/${emoji.categorySlug}/` },
      { "@type": "ListItem", "position": 3, "name": `${emoji.unicode} ${emoji.name}` }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": `How to Copy and Use ${emoji.unicode} ${emoji.name} Emoji`,
    "description": `Learn how to copy the ${emoji.name} emoji and use it in your messages, social media, and more.`,
    "step": [
      { "@type": "HowToStep", "name": "Click to Copy", "text": `Click on the ${emoji.unicode} emoji above to copy it instantly.` },
      { "@type": "HowToStep", "name": "Paste Anywhere", "text": "Paste the emoji in any app - WhatsApp, Instagram, Twitter, Facebook, or any text field." },
      { "@type": "HowToStep", "name": "Use in Context", "text": `Use ${emoji.unicode} when ${emoji.usageContexts[0]?.toLowerCase() || 'expressing this emotion'}.` }
    ]
  };

  return (
    <Layout>
      <Helmet>
        <title>{`${emoji.unicode} ${emoji.name} Emoji: Meaning and How to Use | Allemojipedia`}</title>
        <meta name="description" content={`${emoji.unicode} ${emoji.name}: ${emoji.shortMeaning} Copy and paste ${emoji.unicode} for texting, social media, and work.`} />
        <meta name="keywords" content={`${emoji.name} emoji, ${emoji.unicode} meaning, ${emoji.keywords.slice(0, 5).join(', ')}, copy ${emoji.name} emoji`} />
        <meta name="author" content="Emoji Pedia" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href={`https://allemojipedia.com/emoji/${slug}/`} />
        <meta property="og:title" content={`${emoji.unicode} ${emoji.name} Emoji: Meaning and How to Use`} />
        <meta property="og:description" content={`${emoji.shortMeaning} Copy and paste ${emoji.unicode} for texting, social media, and work.`} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://allemojipedia.com/emoji/${slug}/`} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={`${emoji.unicode} ${emoji.name} Emoji: Meaning and How to Use`} />
        <meta name="twitter:description" content={`${emoji.shortMeaning} Copy and paste ${emoji.unicode}.`} />
      </Helmet>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <div className="container-page section-spacing">
        <Breadcrumbs items={[
          { label: "Home", href: "/" },
          { label: category?.name || "Category", href: `/category/${emoji.categorySlug}/` },
          { label: `${emoji.unicode} ${emoji.name}` }
        ]} />


        <article className="max-w-3xl">
          {/* H1 */}
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="emoji">{emoji.unicode}</span> {emoji.name} Emoji: Meaning and How to Use
          </h1>
          <p className="text-lg text-muted-foreground mb-8">{emoji.shortMeaning}</p>

          <CopyEmojiCard unicode={emoji.unicode} name={emoji.name} />

          {/* H2 - Quick summary */}
          <section className="mb-8 p-5 rounded-xl bg-primary/5 border border-primary/20">
            <h2 className="text-xl font-semibold mb-2">Quick summary</h2>
            <p className="text-foreground">
              {emoji.shortMeaning} People commonly use <span className="emoji">{emoji.unicode}</span> {emoji.usageContexts[0]?.toLowerCase().startsWith('to ') ? '' : 'to '}{emoji.usageContexts[0]?.toLowerCase() || 'express this feeling'}.
            </p>
          </section>

          {/* H2 - What does the emoji mean? */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">What does the <span className="emoji">{emoji.unicode}</span> emoji mean?</h2>
            <p className="mb-3 text-muted-foreground leading-relaxed">{emoji.shortMeaning}</p>
            {emoji.detailedMeaning.split('\n\n').map((p, i) => (
              <p key={i} className="mb-3 text-muted-foreground leading-relaxed">{p}</p>
            ))}
          </section>

          {/* H2 - Meaning in different contexts */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Meaning in different contexts</h2>

            <div className="space-y-5">
              {/* H3 - In conversations */}
              <div className="p-4 rounded-lg bg-muted/30">
                <h3 className="text-lg font-medium mb-2">In conversations</h3>
                <p className="text-muted-foreground">
                  When chatting with friends or family, <span className="emoji">{emoji.unicode}</span> is perfect for {emoji.usageContexts[0]?.toLowerCase() || 'expressing your feelings'}.
                  It adds warmth and personality to your messages without being over the top.
                </p>
              </div>

              {/* H3 - On social media */}
              <div className="p-4 rounded-lg bg-muted/30">
                <h3 className="text-lg font-medium mb-2">On social media</h3>
                <p className="text-muted-foreground">
                  On platforms like Instagram, Twitter, and WhatsApp, <span className="emoji">{emoji.unicode}</span> helps convey {emoji.keywords[0] || 'emotion'} in captions and comments.
                  It's widely recognized and adds emotional context to your posts.
                </p>
              </div>

              {/* H3 - At work */}
              <div className="p-4 rounded-lg bg-muted/30">
                <h3 className="text-lg font-medium mb-2">At work</h3>
                <p className="text-muted-foreground">
                  {emoji.usageContexts.some(ctx => ctx.toLowerCase().includes('professional'))
                    ? `The ${emoji.name} emoji can work well in casual workplace communication like Slack or Teams messages with colleagues you know well.`
                    : `Use ${emoji.unicode} sparingly at work. It's best for informal team chats rather than emails to clients or executives.`
                  }
                </p>
              </div>
            </div>
          </section>

          {/* H2 - How to use the emoji correctly */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">How to use the <span className="emoji">{emoji.unicode}</span> emoji correctly</h2>
            <p className="text-muted-foreground mb-4">
              The {emoji.name} emoji works best when you want to {emoji.usageContexts[0]?.toLowerCase() || 'express a specific feeling'}. Here are the best practices:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              {emoji.usageContexts.map((ctx, i) => <li key={i}>{ctx}</li>)}
            </ul>
          </section>

          {/* H2 - When NOT to use the emoji */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">When NOT to use the <span className="emoji">{emoji.unicode}</span> emoji</h2>
            <p className="text-muted-foreground mb-4">
              While <span className="emoji">{emoji.unicode}</span> is versatile, there are situations where it may be misunderstood or inappropriate:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Avoid using <span className="emoji">{emoji.unicode}</span> in formal emails or professional documents where emojis may seem unprofessional.</li>
              <li>Skip it when delivering serious or sensitive news — the tone may come across as dismissive.</li>
              {emoji.misunderstandings.map((m, i) => (
                <li key={i}>Be careful: {m.toLowerCase()}</li>
              ))}
              <li>Consider your audience — older recipients or different cultures may interpret it differently.</li>
            </ul>
          </section>

          {/* H2 - Frequently asked questions */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Frequently asked questions</h2>
            <div className="space-y-4">
              {faqItems.map((item, i) => (
                <div key={i} className="p-4 rounded-lg bg-muted/30">
                  <h3 className="font-semibold mb-2">{item.question}</h3>
                  <p className="text-muted-foreground">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* H2 - Related emojis */}
          {relatedEmojis.length > 0 && (
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Related emojis</h2>
              <p className="text-muted-foreground mb-4">
                Here are some emojis that are similar or related to <span className="emoji">{emoji.unicode}</span> {emoji.name}:
              </p>
              <div className="flex flex-wrap gap-3">
                {relatedEmojis.map(e => e && (
                  <Link key={e.slug} to={`/emoji/${e.slug}/`} className="flex items-center gap-2 p-3 rounded-lg bg-muted/50 border border-border/50 hover:border-primary/30 hover:bg-muted transition-all">
                    <span className="emoji text-2xl">{e.unicode}</span>
                    <span className="text-sm font-medium">{e.name}</span>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Variations */}
          {emoji.variations && emoji.variations.length > 0 && (
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Variations & Skin Tones</h2>
              <div className="flex flex-wrap gap-3">
                {emoji.variations.map((v, i) => (
                  <div key={i} className="flex items-center gap-2 p-3 rounded-lg bg-muted/50 border border-border/50">
                    <span className="emoji text-2xl">{v.emoji}</span>
                    <span className="text-sm text-muted-foreground">{v.description}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Explore More */}
          <section className="mb-8 p-5 rounded-xl bg-muted/30 border border-border">
            <h2 className="text-xl font-semibold mb-4">Explore More Emojis</h2>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to={`/category/${emoji.categorySlug}/`} className="text-primary hover:underline font-medium">
                  → Browse all {category?.name || 'emojis in this category'}
                </Link>
              </li>
              {primaryRelated && (
                <li>
                  <Link to={`/emoji/${primaryRelated.slug}/`} className="text-primary hover:underline font-medium">
                    → Compare: <span className="emoji">{emoji.unicode}</span> vs <span className="emoji">{primaryRelated.unicode}</span> {primaryRelated.name}
                  </Link>
                </li>
              )}
            </ul>
          </section>

          {/* You Might Also Like */}
          {categoryEmojis.length > 0 && (
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">You Might Also Like</h2>
              <div className="grid grid-cols-3 gap-3">
                {categoryEmojis.map(e => (
                  <Link
                    key={e.slug}
                    to={`/emoji/${e.slug}/`}
                    className="flex flex-col items-center gap-2 p-4 rounded-xl bg-gradient-to-br from-muted/50 to-muted border border-border/50 hover:border-primary/30 hover:shadow-lg hover:scale-105 transition-all duration-300 group"
                  >
                    <span className="emoji text-4xl group-hover:scale-110 transition-transform duration-300">{e.unicode}</span>
                    <span className="text-sm text-center text-muted-foreground group-hover:text-foreground transition-colors line-clamp-2">{e.name}</span>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </article>
      </div>
    </Layout>
  );
};

export default EmojiDetail;
