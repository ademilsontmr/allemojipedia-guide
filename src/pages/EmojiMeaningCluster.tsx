import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { Layout, Breadcrumbs } from "@/components/Layout";
import { blogPosts } from "@/data/blogPosts";
import { getEmojiIntentClusterBySlug } from "@/data/emojiIntentClusters";
import { getEmojiCache } from "@/data/emojisCache";
import type { Emoji } from "@/data/emojis";
import NotFound from "./NotFound";

const EmojiMeaningCluster = () => {
  const { slug } = useParams<{ slug: string }>();
  const cluster = getEmojiIntentClusterBySlug(slug || "");
  const [emojis, setEmojis] = useState<Emoji[]>([]);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      if (!cluster) return;

      const emojiCache = await getEmojiCache();
      if (cancelled) return;

      setEmojis(
        cluster.emojiSlugs
          .map((emojiSlug) => emojiCache.getEmojiBySlug(emojiSlug))
          .filter((emoji): emoji is Emoji => Boolean(emoji))
      );
    };

    load().catch(() => {
      if (!cancelled) setEmojis([]);
    });

    return () => {
      cancelled = true;
    };
  }, [cluster]);

  if (!cluster) return <NotFound />;

  const relatedPosts = blogPosts.filter((post) => cluster.blogSlugs.includes(post.slug));

  return (
    <Layout>
      <Helmet>
        <title>{cluster.title} | Allemojipedia</title>
        <meta name="description" content={cluster.description} />
        <meta name="keywords" content={cluster.keywords} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href={`https://allemojipedia.com/emoji-meanings/${cluster.slug}/`} />
      </Helmet>

      <div className="container-page section-spacing">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Emoji Meanings", href: "/emoji-meanings/" },
            { label: cluster.shortTitle },
          ]}
        />

        <article className="max-w-4xl">
          <header className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{cluster.title}</h1>
            <p className="text-lg text-muted-foreground">{cluster.description}</p>
          </header>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Key emojis in this guide</h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {emojis.map((emoji) => (
                <Link
                  key={emoji.slug}
                  to={`/emoji/${emoji.slug}/`}
                  className="rounded-lg border border-border bg-card p-4 transition-all hover:border-primary/40 hover:shadow-md"
                >
                  <div className="text-3xl mb-2">{emoji.unicode}</div>
                  <h3 className="font-semibold">{emoji.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{emoji.shortMeaning}</p>
                </Link>
              ))}
            </div>
          </section>

          <section className="mb-10 space-y-6">
            {cluster.sections.map((section) => (
              <div key={section.heading} className="rounded-xl bg-muted/30 border border-border p-5">
                <h2 className="text-xl font-semibold mb-2">{section.heading}</h2>
                <p className="text-muted-foreground leading-relaxed">{section.body}</p>
              </div>
            ))}
          </section>

          {relatedPosts.length > 0 && (
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">Related guides</h2>
              <div className="space-y-3">
                {relatedPosts.map((post) => (
                  <Link
                    key={post.slug}
                    to={`/blog/${post.slug}/`}
                    className="block rounded-lg border border-border bg-card p-4 hover:border-primary/40"
                  >
                    <h3 className="font-semibold">{post.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{post.excerpt}</p>
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

export default EmojiMeaningCluster;
