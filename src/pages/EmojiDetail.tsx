import { useParams, Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { Layout, Breadcrumbs } from "@/components/Layout";
import { CopyEmojiCard } from "@/components/CopyEmojiCard";
import { getCategoryBySlug } from "@/data/categories";
import { Helmet } from "react-helmet-async";
import NotFound from "./NotFound";

import type { Emoji } from "@/data/emojis";
import { getEmojiCache } from "@/data/emojisCache";
import { getEmojiRobots } from "@/utils/seoPolicy";
import { getEmojiIntentClustersForEmoji } from "@/data/emojiIntentClusters";
import { popularComparisons } from "@/data/emojiComparisons";
import { getTopEmojiEditorial } from "@/data/topEmojiEditorial";
import { getEmojiSeoMeta, getEmojiPageH1 } from "@/data/seoMeta";
import { buildEmojiFaqItems, buildEmojiStructuredData } from "@/utils/emojiPageSchema";
import {
  getEnrichedDetailedParagraphs,
  getEnrichedExamples,
  getUniqueContextBlocks,
  getUniqueWhenNotToUse,
} from "@/utils/emojiUniqueContent";
import { editorialMeta, getEmojiEditorialSources } from "@/data/editorialMeta";
import { EditorialSources } from "@/components/EditorialSources";
import { getEmojiContextPagesForEmoji } from "@/data/emojiContextPages";
import { getComparisonLinksForEmoji } from "@/utils/emojiComparisonsForPage";

const EmojiDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [emoji, setEmoji] = useState<Emoji | null>(null);
  const [relatedEmojis, setRelatedEmojis] = useState<Emoji[]>([]);
  const [categoryEmojis, setCategoryEmojis] = useState<Emoji[]>([]);
  const [comparisonLinks, setComparisonLinks] = useState<{ href: string; label: string }[]>([]);
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
        setComparisonLinks([]);
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
      setComparisonLinks(
        getComparisonLinksForEmoji(found.slug, (s) => emojisModule.getEmojiBySlug(s) as Emoji | undefined).map(
          ({ href, label }) => ({ href, label })
        )
      );
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
  const intentClusters = getEmojiIntentClustersForEmoji(emoji.slug);
  const contextPages = getEmojiContextPagesForEmoji(emoji.slug);
  const editorial = getTopEmojiEditorial(emoji);
  const seo = getEmojiSeoMeta(emoji);
  const pageH1 = getEmojiPageH1(emoji);
  const primaryComparison = primaryRelated
    ? popularComparisons.find(({ slug1, slug2 }) =>
      (slug1 === emoji.slug && slug2 === primaryRelated.slug) ||
      (slug1 === primaryRelated.slug && slug2 === emoji.slug)
    )
    : null;

  const faqItems = buildEmojiFaqItems(emoji, primaryRelated);
  const detailedParagraphs = getEnrichedDetailedParagraphs(emoji);
  const enrichedExamples = getEnrichedExamples(emoji);
  const contextBlocks = getUniqueContextBlocks(emoji);
  const whenNotToUse = getUniqueWhenNotToUse(emoji);
  const sources = getEmojiEditorialSources(emoji);
  const structuredData = buildEmojiStructuredData(emoji, primaryRelated);

  return (
    <Layout>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={`${emoji.name} emoji, ${emoji.unicode} meaning, ${emoji.keywords.slice(0, 5).join(', ')}, copy ${emoji.name} emoji`} />
        <meta name="author" content={editorialMeta.author} />
        <meta name="publisher" content={editorialMeta.publisher} />
        <meta name="robots" content={getEmojiRobots(emoji)} />
        <link rel="canonical" href={`https://allemojipedia.com/emoji/${slug}/`} />
        <meta property="og:title" content={seo.ogTitle ?? seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://allemojipedia.com/emoji/${slug}/`} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={seo.ogTitle ?? seo.title} />
        <meta name="twitter:description" content={seo.description} />
      </Helmet>
      {structuredData.map((schema) => (
        <script
          key={String(schema["@type"])}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <div className="container-page section-spacing">
        <Breadcrumbs items={[
          { label: "Home", href: "/" },
          { label: category?.name || "Category", href: `/category/${emoji.categorySlug}/` },
          { label: `${emoji.unicode} ${emoji.name}` }
        ]} />


        <article className="max-w-3xl">
          <p className="text-sm text-muted-foreground mb-3">
            Reviewed by {editorialMeta.teamName} • Last updated {editorialMeta.lastUpdated}
          </p>
          {/* H1 */}
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {pageH1}
          </h1>
          <p className="text-lg text-muted-foreground mb-8">{emoji.shortMeaning}</p>

          <CopyEmojiCard unicode={emoji.unicode} name={emoji.name} />

          {editorial && (
            <section className="mb-8 p-5 rounded-xl bg-primary/5 border border-primary/20">
              <h2 className="text-xl font-semibold mb-2">Quick answer</h2>
              <p className="text-foreground leading-relaxed">{editorial.snippetAnswer}</p>
            </section>
          )}

          {contextPages.length > 0 && (
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Meaning by sender and platform</h2>
              <p className="text-muted-foreground mb-4">
                These guides explain how <span className="emoji">{emoji.unicode}</span> can change meaning depending on who sends it and where it appears.{" "}
                <Link to="/emoji-meanings-in-texting/" className="text-primary hover:underline">
                  Browse all texting context guides
                </Link>
                .
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {contextPages.map(page => (
                  <Link
                    key={page.context}
                    to={`/emoji/${emoji.slug}/${page.context}/`}
                    className="rounded-lg border border-border bg-muted/30 p-4 hover:border-primary/40 transition-colors"
                  >
                    <h3 className="font-semibold mb-1">{page.shortTitle}</h3>
                    <p className="text-sm text-muted-foreground">{page.description}</p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {editorial && (
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">{emoji.unicode} meaning in texting and social media</h2>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-muted/30">
                  <h3 className="text-lg font-medium mb-2">In texting</h3>
                  <p className="text-muted-foreground">{editorial.textingMeaning}</p>
                </div>
                <div className="p-4 rounded-lg bg-muted/30">
                  <h3 className="text-lg font-medium mb-2">On social media</h3>
                  <p className="text-muted-foreground">{editorial.socialMeaning}</p>
                </div>
                <div className="p-4 rounded-lg bg-muted/30">
                  <h3 className="text-lg font-medium mb-2">Tone warning</h3>
                  <p className="text-muted-foreground">{editorial.caution}</p>
                </div>
              </div>
            </section>
          )}

          {comparisonLinks.length > 0 && (
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Compare with similar emojis</h2>
              <p className="text-muted-foreground mb-4">
                Not sure which emoji fits your message? These side-by-side guides explain tone differences.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {comparisonLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="rounded-lg border border-border bg-muted/30 p-4 hover:border-primary/40 transition-colors"
                  >
                    <h3 className="font-semibold">{link.label}</h3>
                  </Link>
                ))}
              </div>
            </section>
          )}

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">What does the <span className="emoji">{emoji.unicode}</span> emoji mean?</h2>
            {detailedParagraphs.map((p, i) => (
              <p key={i} className="mb-3 text-muted-foreground leading-relaxed">{p}</p>
            ))}
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Meaning in different contexts</h2>
            <div className="space-y-5">
              {contextBlocks.map((block) => (
                <div key={block.title} className="p-4 rounded-lg bg-muted/30">
                  <h3 className="text-lg font-medium mb-2">{block.title}</h3>
                  <p className="text-muted-foreground">{block.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">How to use the <span className="emoji">{emoji.unicode}</span> emoji correctly</h2>
            <p className="text-muted-foreground mb-4">
              The {emoji.name} emoji works best in these situations:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              {emoji.usageContexts.map((ctx, i) => <li key={i}>{ctx}</li>)}
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Real message examples</h2>
            <p className="text-muted-foreground mb-4">
              These sample messages show how people actually use <span className="emoji">{emoji.unicode}</span> {emoji.name}:
            </p>
            <div className="space-y-4">
              {enrichedExamples.map((example, i) => (
                <div key={i} className="p-4 rounded-lg bg-muted/30">
                  <h3 className="font-semibold mb-2">{example.context}</h3>
                  <p className="text-muted-foreground">{example.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* H2 - Meaning by intent */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Meaning by intent</h2>
            <p className="text-muted-foreground mb-4">
              The <span className="emoji">{emoji.unicode}</span> {emoji.name} emoji can change tone depending on the message around it. In texting, it often helps clarify emotion; on social media, it can work as a fast reaction, caption signal, or community shorthand.
            </p>
            {intentClusters.length > 0 && (
              <div className="grid gap-3 sm:grid-cols-2">
                {intentClusters.map(cluster => (
                  <Link
                    key={cluster.slug}
                    to={`/emoji-meanings/${cluster.slug}/`}
                    className="rounded-lg border border-border bg-muted/30 p-4 hover:border-primary/40 transition-colors"
                  >
                    <h3 className="font-semibold mb-1">{cluster.shortTitle}</h3>
                    <p className="text-sm text-muted-foreground">{cluster.description}</p>
                  </Link>
                ))}
              </div>
            )}
          </section>

          {editorial && (
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Popular searches for {emoji.unicode}</h2>
              <ul className="grid gap-2 sm:grid-cols-2 text-muted-foreground">
                {editorial.searchIntents.map(intent => (
                  <li key={intent} className="rounded-lg bg-muted/30 p-3">{intent}</li>
                ))}
              </ul>
            </section>
          )}

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">When NOT to use the <span className="emoji">{emoji.unicode}</span> emoji</h2>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              {whenNotToUse.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
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

          <EditorialSources
            sources={sources}
            intro={`This ${emoji.name} guide is reviewed by ${editorialMeta.teamName}. Meanings combine Unicode naming, CLDR annotations, platform designs (Apple / Google Noto), and common texting usage. Last updated ${editorialMeta.lastUpdated}.`}
          />

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
                  <Link
                    to={primaryComparison ? `/emoji/${primaryComparison.slug1}-vs-${primaryComparison.slug2}/` : `/emoji/${primaryRelated.slug}/`}
                    className="text-primary hover:underline font-medium"
                  >
                    → {primaryComparison ? 'Compare' : 'Related'}: <span className="emoji">{emoji.unicode}</span> and <span className="emoji">{primaryRelated.unicode}</span> {primaryRelated.name}
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
