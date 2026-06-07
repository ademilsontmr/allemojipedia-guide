import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Layout, Breadcrumbs } from "@/components/Layout";
import { emojiIntentClusters } from "@/data/emojiIntentClusters";
import { getMainPageSeo } from "@/data/seoMeta";

const EmojiMeanings = () => {
  const seo = getMainPageSeo("/emoji-meanings/");

  return (
    <Layout>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href="https://allemojipedia.com/emoji-meanings/" />
        <meta property="og:title" content={seo.ogTitle ?? seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:url" content="https://allemojipedia.com/emoji-meanings/" />
      </Helmet>

      <div className="container-page section-spacing">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Emoji Meanings" }]} />

        <header className="mb-10 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Emoji Meanings by Intent</h1>
          <p className="text-lg text-muted-foreground mb-4">
            Start with the situation behind the emoji: love, texting, Gen Z slang, flags, or workplace communication.
            These guides group related emojis so you can understand tone faster.
          </p>
          <Link
            to="/emoji-meanings-in-texting/"
            className="inline-flex items-center text-primary font-medium hover:underline"
          >
            Browse all 250 texting context guides (from a girl, guy, WhatsApp, Instagram, TikTok) →
          </Link>
        </header>

        <div className="grid gap-5 md:grid-cols-2">
          {emojiIntentClusters.map((cluster) => (
            <Link
              key={cluster.slug}
              to={`/emoji-meanings/${cluster.slug}/`}
              className="rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-lg"
            >
              <h2 className="text-xl font-semibold mb-2">{cluster.shortTitle}</h2>
              <p className="text-muted-foreground mb-4">{cluster.description}</p>
              <div className="flex flex-wrap gap-2 text-2xl">
                {cluster.emojiSlugs.slice(0, 8).map((slug) => (
                  <span key={slug} aria-hidden="true">•</span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default EmojiMeanings;
