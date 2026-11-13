import { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Layout, Breadcrumbs } from "@/components/Layout";
import { getEmojiCache } from "@/data/emojisCache";
import type { Emoji } from "@/data/emojis";
import {
  emojiContextHubMeta,
  emojiContextHubPath,
  getContextHubPrioritySlugs,
  getContextHubSections,
} from "@/data/emojiContextHub";
import { getMainPageSeo } from "@/data/seoMeta";
import { shouldIndexEmojiContext } from "@/utils/seoPolicy";

const BASE_URL = "https://allemojipedia.com";

const EmojiContextHub = () => {
  const seo = getMainPageSeo(emojiContextHubPath);
  const sections = useMemo(() => getContextHubSections(), []);
  const prioritySlugs = useMemo(() => getContextHubPrioritySlugs(), []);
  const [emojiBySlug, setEmojiBySlug] = useState<Record<string, Emoji>>({});
  const [openContext, setOpenContext] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    getEmojiCache()
      .then((cache) => {
        if (cancelled) return;
        const map: Record<string, Emoji> = {};
        for (const slug of prioritySlugs) {
          const emoji = cache.getEmojiBySlug(slug);
          if (emoji) map[slug] = emoji as Emoji;
        }
        for (const section of sections) {
          for (const page of section.pages) {
            if (!map[page.emojiSlug]) {
              const emoji = cache.getEmojiBySlug(page.emojiSlug);
              if (emoji) map[page.emojiSlug] = emoji as Emoji;
            }
          }
        }
        setEmojiBySlug(map);
      })
      .catch(() => {
        if (!cancelled) setEmojiBySlug({});
      });

    return () => {
      cancelled = true;
    };
  }, [prioritySlugs, sections]);

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: seo.ogTitle ?? emojiContextHubMeta.title,
    description: seo.description,
    url: `${BASE_URL}${emojiContextHubPath}`,
    numberOfItems: prioritySlugs.length,
  };

  return (
    <Layout>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={emojiContextHubMeta.keywords} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href={`${BASE_URL}${emojiContextHubPath}`} />
        <meta property="og:title" content={seo.ogTitle ?? seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:url" content={`${BASE_URL}${emojiContextHubPath}`} />
      </Helmet>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />

      <div className="container-page section-spacing">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Emoji Meanings", href: "/emoji-meanings/" },
            { label: emojiContextHubMeta.shortTitle },
          ]}
        />

        <header className="mb-10 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{emojiContextHubMeta.title}</h1>
          <p className="text-lg text-muted-foreground mb-4">{emojiContextHubMeta.description}</p>
          <p className="text-sm text-muted-foreground">
            Start with the full meaning page. Sender and platform tone is explained in the sections below.
          </p>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-5">Most searched emoji meanings</h2>
          <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {prioritySlugs.map((slug) => {
              const emoji = emojiBySlug[slug];
              const label = emoji ? `${emoji.unicode} ${emoji.name}` : slug;

              return (
                <li key={slug}>
                  <Link
                    to={`/emoji/${slug}/`}
                    className="block rounded-lg border border-border bg-card px-4 py-3 text-sm hover:border-primary/40 transition-colors"
                  >
                    <span className="font-medium">{label}</span>
                    {emoji?.shortMeaning ? (
                      <span className="text-muted-foreground"> — {emoji.shortMeaning}</span>
                    ) : null}
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>

        <nav className="mb-10 flex flex-wrap gap-2" aria-label="Context sections">
          {sections.map((section) => (
            <a
              key={section.context}
              href={`#${section.anchor}`}
              className="rounded-full border border-border bg-muted/30 px-4 py-2 text-sm font-medium hover:border-primary/40 transition-colors"
            >
              {section.title}
            </a>
          ))}
        </nav>

        {sections.map((section) => {
          const crawlablePages = section.pages.filter((page) =>
            shouldIndexEmojiContext(page.emojiSlug, page.context)
          );
          const isOpen = openContext === section.context;

          return (
            <section key={section.context} id={section.anchor} className="mb-12 scroll-mt-24">
              <h2 className="text-2xl font-semibold mb-2">{section.title}</h2>
              <p className="text-muted-foreground mb-5 max-w-3xl">{section.description}</p>
              {crawlablePages.length > 0 ? (
                <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                  {crawlablePages.map((page) => {
                    const emoji = emojiBySlug[page.emojiSlug];
                    const label = emoji
                      ? `${emoji.unicode} ${emoji.name}`
                      : page.title.replace(/ Emoji Meaning.*/i, "");

                    return (
                      <li key={`${page.emojiSlug}-${page.context}`}>
                        <Link
                          to={`/emoji/${page.emojiSlug}/${page.context}/`}
                          className="block rounded-lg border border-border bg-card px-4 py-3 text-sm hover:border-primary/40 transition-colors"
                        >
                          <span className="font-medium">{label}</span>
                          <span className="text-muted-foreground"> — {page.shortTitle}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              ) : isOpen ? (
                <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                  {section.pages.map((page) => {
                    const emoji = emojiBySlug[page.emojiSlug];
                    const label = emoji
                      ? `${emoji.unicode} ${emoji.name}`
                      : page.title.replace(/ Emoji Meaning.*/i, "");

                    return (
                      <li key={`${page.emojiSlug}-${page.context}`}>
                        <Link
                          to={`/emoji/${page.emojiSlug}/${page.context}/`}
                          className="block rounded-lg border border-border bg-card px-4 py-3 text-sm hover:border-primary/40 transition-colors"
                        >
                          <span className="font-medium">{label}</span>
                          <span className="text-muted-foreground"> — {page.shortTitle}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <button
                  type="button"
                  onClick={() => setOpenContext(section.context)}
                  className="px-5 py-2.5 rounded-lg border border-border hover:border-primary/50 hover:bg-muted/50 font-medium"
                >
                  Show {section.title.toLowerCase()} tone for {section.pages.length} emojis
                </button>
              )}
            </section>
          );
        })}

        <section className="mt-8 rounded-xl border border-border bg-muted/20 p-5 max-w-3xl">
          <h2 className="text-lg font-semibold mb-2">More emoji meaning guides</h2>
          <p className="text-sm text-muted-foreground mb-3">
            Explore intent-based clusters for hearts, Gen Z slang, flirting, and workplace tone.
          </p>
          <Link to="/emoji-meanings/" className="text-primary hover:underline text-sm font-medium">
            Browse all emoji meaning clusters →
          </Link>
        </section>
      </div>
    </Layout>
  );
};

export default EmojiContextHub;
