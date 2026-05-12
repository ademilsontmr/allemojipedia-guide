import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Layout, Breadcrumbs } from "@/components/Layout";
import { emojiIntentClusters } from "@/data/emojiIntentClusters";

const EmojiMeanings = () => {
  return (
    <Layout>
      <Helmet>
        <title>Emoji Meanings by Intent | Allemojipedia</title>
        <meta
          name="description"
          content="Explore emoji meaning guides by intent, including heart emojis, Gen Z emoji slang, texting tone, flag emojis, and work emojis."
        />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href="https://allemojipedia.com/emoji-meanings/" />
      </Helmet>

      <div className="container-page section-spacing">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Emoji Meanings" }]} />

        <header className="mb-10 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Emoji Meanings by Intent</h1>
          <p className="text-lg text-muted-foreground">
            Start with the situation behind the emoji: love, texting, Gen Z slang, flags, or workplace communication.
            These guides group related emojis so you can understand tone faster.
          </p>
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
