import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { Layout, Breadcrumbs } from "@/components/Layout";
import { getEmojiCache } from "@/data/emojisCache";
import type { Emoji } from "@/data/emojis";
import { editorialMeta, getEmojiEditorialSources } from "@/data/editorialMeta";
import { EditorialSources } from "@/components/EditorialSources";
import { getEmojiContextPage, getEmojiContextPagesForEmoji } from "@/data/emojiContextPages";
import { getEmojiRobots } from "@/utils/seoPolicy";
import { getContextSeoMeta } from "@/data/seoMeta";
import { emojiContextHubPath } from "@/data/emojiContextHub";
import {
  buildContextPageFaqs,
  buildContextPageStructuredData,
} from "@/utils/emojiContextFaqSchema";
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
  const seo = getContextSeoMeta(emoji, page);
  const faqItems = buildContextPageFaqs(emoji, page);
  const structuredData = buildContextPageStructuredData(emoji, page);

  return (
    <Layout>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="robots" content={getEmojiRobots(emoji)} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={seo.ogTitle ?? seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={url} />
        <meta name="twitter:title" content={seo.ogTitle ?? seo.title} />
        <meta name="twitter:description" content={seo.description} />
      </Helmet>
      {structuredData.map((schema) => (
        <script
          key={schema["@type"] as string}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <div className="container-page section-spacing">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Emoji Meanings in Texting", href: emojiContextHubPath },
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

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Frequently asked questions</h2>
            <div className="space-y-5">
              {faqItems.map((item) => (
                <div key={item.question}>
                  <h3 className="text-lg font-medium mb-2">{item.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <EditorialSources
            sources={getEmojiEditorialSources(emoji)}
            title="Editorial review and sources"
            intro={`This context guide for ${emoji.unicode} is reviewed by ${editorialMeta.teamName}. We ground tone advice in Unicode naming, CLDR annotations, and how people actually use the emoji in chats and feeds.`}
          />

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
