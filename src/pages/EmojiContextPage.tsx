import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { Layout, Breadcrumbs } from "@/components/Layout";
import { getEmojiCache } from "@/data/emojisCache";
import type { Emoji } from "@/data/emojis";
import { editorialMeta } from "@/data/editorialMeta";
import { getEmojiContextPage, getEmojiContextPagesForEmoji } from "@/data/emojiContextPages";
import { getEmojiRobots } from "@/utils/seoPolicy";
import NotFound from "./NotFound";

const BASE_URL = "https://allemojipedia.com";

const EmojiContextPage = () => {
  const { slug = "", context = "" } = useParams<{ slug: string; context: string }>();
  const [emoji, setEmoji] = useState<Emoji | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const page = getEmojiContextPage(slug, context);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      const emojisModule = await getEmojiCache();
      const found = emojisModule.getEmojiBySlug(slug) as Emoji | undefined;
      if (!cancelled) {
        setEmoji(found ?? null);
        setIsLoaded(true);
      }
    };

    setIsLoaded(false);
    load().catch(() => {
      if (!cancelled) setIsLoaded(true);
    });

    return () => {
      cancelled = true;
    };
  }, [slug]);

  if (!isLoaded) {
    return (
      <Layout>
        <div className="container-page section-spacing">
          <p className="text-muted-foreground">Loading guide…</p>
        </div>
      </Layout>
    );
  }

  if (!emoji || !page) return <NotFound />;

  const relatedPages = getEmojiContextPagesForEmoji(emoji.slug).filter(
    (relatedPage) => relatedPage.context !== page.context
  );
  const url = `${BASE_URL}/emoji/${emoji.slug}/${page.context}/`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${emoji.unicode} ${page.title}`,
    description: page.description,
    url,
    datePublished: editorialMeta.lastUpdatedIso,
    dateModified: editorialMeta.lastUpdatedIso,
    author: {
      "@type": "Organization",
      name: editorialMeta.teamName,
      url: `${BASE_URL}/about/`,
    },
    publisher: {
      "@type": "Organization",
      name: editorialMeta.siteName,
      url: `${BASE_URL}/`,
    },
    mainEntityOfPage: url,
  };

  return (
    <Layout>
      <Helmet>
        <title>{`${emoji.unicode} ${page.title} | Allemojipedia`}</title>
        <meta name="description" content={page.description} />
        <meta name="robots" content={getEmojiRobots(emoji)} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={`${emoji.unicode} ${page.title}`} />
        <meta property="og:description" content={page.description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={url} />
      </Helmet>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <div className="container-page section-spacing">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: `${emoji.unicode} ${emoji.name}`, href: `/emoji/${emoji.slug}/` },
            { label: page.shortTitle },
          ]}
        />

        <article className="max-w-3xl">
          <p className="text-sm text-muted-foreground mb-3">
            Reviewed by {editorialMeta.teamName} • Last updated {editorialMeta.lastUpdated}
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="emoji">{emoji.unicode}</span> {page.title}
          </h1>
          <p className="text-lg text-muted-foreground mb-8">{page.description}</p>

          <section className="mb-8 p-5 rounded-xl bg-primary/5 border border-primary/20">
            <h2 className="text-xl font-semibold mb-2">Quick answer</h2>
            <p className="text-foreground leading-relaxed">{page.answer}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Signs this is the intended meaning</h2>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              {page.signals.map((signal) => (
                <li key={signal}>{signal}</li>
              ))}
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Example messages</h2>
            <div className="space-y-3">
              {page.examples.map((example) => (
                <p key={example} className="rounded-lg bg-muted/30 p-4 text-muted-foreground">
                  {example}
                </p>
              ))}
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Tone warning</h2>
            <p className="text-muted-foreground">{page.caution}</p>
          </section>

          <section className="mb-8 p-5 rounded-xl bg-muted/30 border border-border">
            <h2 className="text-xl font-semibold mb-3">Editorial review</h2>
            <p className="text-muted-foreground mb-3">
              This guide combines Unicode emoji naming, CLDR annotations, and common usage patterns from texting and social platforms.
            </p>
            <ul className="space-y-2 text-sm">
              {editorialMeta.sources.map((source) => (
                <li key={source.name}>
                  <a href={source.url} className="text-primary hover:underline" rel="nofollow">
                    {source.name}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          {relatedPages.length > 0 && (
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Related {emoji.name} guides</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {relatedPages.map((relatedPage) => (
                  <Link
                    key={relatedPage.context}
                    to={`/emoji/${emoji.slug}/${relatedPage.context}/`}
                    className="rounded-lg border border-border bg-muted/30 p-4 hover:border-primary/40 transition-colors"
                  >
                    <h3 className="font-semibold mb-1">{relatedPage.shortTitle}</h3>
                    <p className="text-sm text-muted-foreground">{relatedPage.description}</p>
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

export default EmojiContextPage;
