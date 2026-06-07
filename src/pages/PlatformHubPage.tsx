import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { Layout, Breadcrumbs } from "@/components/Layout";
import { EmojiGrid } from "@/components/EmojiCard";
import { getEmojiCache } from "@/data/emojisCache";
import type { Emoji } from "@/data/emojis";
import {
  emojiPlatforms,
  getEmojiPlatform,
  getPlatformAliasH1,
  getPlatformAliasPath,
  getPlatformVariantSeo,
  type PlatformHubVariant,
} from "@/data/emojiPlatforms";
import { editorialMeta } from "@/data/editorialMeta";
import { INDEX_FOLLOW_ROBOTS } from "@/utils/seoPolicy";
import NotFound from "./NotFound";

const BRAND = "Allemojipedia";

type PlatformHubPageProps = {
  forcedSlug?: string;
  variant?: PlatformHubVariant;
};

const PlatformHubPage = ({ forcedSlug, variant = "default" }: PlatformHubPageProps) => {
  const { slug: paramSlug } = useParams<{ slug: string }>();
  const slug = forcedSlug ?? paramSlug ?? "";
  const platform = getEmojiPlatform(slug);
  const [emojis, setEmojis] = useState<Emoji[]>([]);

  useEffect(() => {
    if (!platform) return;
    let cancelled = false;

    getEmojiCache()
      .then((cache) => {
        if (cancelled) return;
        setEmojis(
          platform.featuredEmojiSlugs
            .map((s) => cache.getEmojiBySlug(s))
            .filter((e): e is Emoji => Boolean(e))
        );
      })
      .catch(() => {
        if (!cancelled) setEmojis([]);
      });

    return () => {
      cancelled = true;
    };
  }, [platform]);

  if (!platform) return <NotFound />;

  const isAlias = variant !== "default";
  const canonicalPath = `/platforms/${platform.slug}/`;
  const pagePath = isAlias ? getPlatformAliasPath(variant) ?? canonicalPath : canonicalPath;

  const variantSeo = getPlatformVariantSeo(isAlias ? variant : "default");
  const title =
    isAlias && variant !== "apple"
      ? `${variantSeo.title} | ${BRAND}`
      : isAlias
        ? `${variantSeo.title} | ${BRAND}`
        : `${platform.icon} ${platform.name} Emojis — Copy & Meanings | ${BRAND}`;

  const description = isAlias ? variantSeo.description : platform.description;
  const h1 = isAlias ? getPlatformAliasH1(variant, platform) : `${platform.icon} ${platform.name} Emojis`;

  const url = `https://allemojipedia.com${pagePath}`;

  return (
    <Layout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={platform.keywords} />
        <meta name="robots" content={INDEX_FOLLOW_ROBOTS} />
        <meta name="author" content={editorialMeta.author} />
        <meta name="publisher" content={editorialMeta.publisher} />
        <link rel="canonical" href={`https://allemojipedia.com${canonicalPath}`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
      </Helmet>

      <div className="container-page section-spacing">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            ...(isAlias ? [] : [{ label: "Platforms", href: "/platforms/apple/" }]),
            { label: platform.name },
          ]}
        />

        <header className="mb-10 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{h1}</h1>
          <p className="text-lg text-muted-foreground mb-4">{description}</p>
          <p className="text-muted-foreground">{platform.copyGuide}</p>
          <p className="text-sm text-muted-foreground mt-4">
            Reviewed by {editorialMeta.teamName} • Last updated {editorialMeta.lastUpdated}
          </p>
        </header>

        {!isAlias && (
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">Browse by platform</h2>
            <div className="flex flex-wrap gap-3">
              {emojiPlatforms.map((p) => (
                <Link
                  key={p.slug}
                  to={`/platforms/${p.slug}/`}
                  className={`rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${
                    p.slug === platform.slug
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border hover:border-primary/40"
                  }`}
                >
                  {p.icon} {p.name}
                </Link>
              ))}
            </div>
          </section>
        )}

        {isAlias && (
          <section className="mb-8 p-4 rounded-xl bg-muted/30 border border-border text-sm">
            <p className="text-muted-foreground">
              Also browse our full{" "}
              <Link to={canonicalPath} className="text-primary hover:underline">
                {platform.name} emoji hub
              </Link>{" "}
              and{" "}
              <Link to="/blog/iphone-emoji-list-copy-every-apple-emoji-2026/" className="text-primary hover:underline">
                iPhone emoji list guide
              </Link>
              .
            </p>
          </section>
        )}

        <EmojiGrid emojis={emojis} title={`Popular ${platform.brandLabel} emojis — tap to copy`} />

        <section className="mb-10 mt-12 space-y-6 max-w-3xl">
          {platform.sections.map((section) => (
            <div key={section.heading} className="rounded-xl bg-muted/30 border border-border p-5">
              <h2 className="text-xl font-semibold mb-2">{section.heading}</h2>
              <p className="text-muted-foreground whitespace-pre-line leading-relaxed">{section.body}</p>
            </div>
          ))}
        </section>

        <section className="mb-10 max-w-3xl">
          <h2 className="text-2xl font-semibold mb-4">Frequently asked questions</h2>
          <div className="space-y-4">
            {platform.faqs.map((faq) => (
              <div key={faq.question} className="rounded-lg border border-border p-4">
                <h3 className="font-semibold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-3xl">
          <h2 className="text-xl font-semibold mb-4">Related guides</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            <Link to="/emoji-kitchen/" className="rounded-lg border border-border p-4 hover:border-primary/40">
              <h3 className="font-semibold">Emoji Kitchen Guide</h3>
              <p className="text-sm text-muted-foreground">Gboard mashups and popular combos</p>
            </Link>
            <Link to="/emoji-combos/" className="rounded-lg border border-border p-4 hover:border-primary/40">
              <h3 className="font-semibold">Emoji Combos</h3>
              <p className="text-sm text-muted-foreground">ZWJ sequences and copy-paste chains</p>
            </Link>
            <Link to="/categories/" className="rounded-lg border border-border p-4 hover:border-primary/40">
              <h3 className="font-semibold">All Emoji Categories</h3>
              <p className="text-sm text-muted-foreground">Browse 3,700+ emoji meanings</p>
            </Link>
            <Link to="/blog/iphone-emoji-list-copy-every-apple-emoji-2026/" className="rounded-lg border border-border p-4 hover:border-primary/40">
              <h3 className="font-semibold">iPhone Emoji List (2026)</h3>
              <p className="text-sm text-muted-foreground">Complete Apple emoji copy guide</p>
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default PlatformHubPage;
