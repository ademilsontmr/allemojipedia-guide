import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { Layout, Breadcrumbs } from "@/components/Layout";
import { ComboCopyCard } from "@/components/ComboCopyCard";
import { getEmojiComboBySlug } from "@/data/emojiCombos";
import { getEmojiCache } from "@/data/emojisCache";
import type { Emoji } from "@/data/emojis";
import { editorialMeta } from "@/data/editorialMeta";
import NotFound from "./NotFound";

const EmojiComboDetail = () => {
  const { slug = "" } = useParams<{ slug: string }>();
  const combo = getEmojiComboBySlug(slug);
  const [components, setComponents] = useState<Emoji[]>([]);

  useEffect(() => {
    if (!combo) return;
    let cancelled = false;

    getEmojiCache()
      .then((cache) => {
        if (cancelled) return;
        setComponents(
          combo.componentSlugs
            .map((s) => cache.getEmojiBySlug(s))
            .filter((e): e is Emoji => Boolean(e))
        );
      })
      .catch(() => {
        if (!cancelled) setComponents([]);
      });

    return () => {
      cancelled = true;
    };
  }, [combo]);

  if (!combo) return <NotFound />;

  const url = `https://allemojipedia.com/emoji-combos/${combo.slug}/`;

  return (
    <Layout>
      <Helmet>
        <title>{combo.title} | Allemojipedia</title>
        <meta name="description" content={combo.description} />
        <meta name="keywords" content={combo.keywords} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={combo.title} />
        <meta property="og:description" content={combo.description} />
        <meta property="og:url" content={url} />
      </Helmet>

      <div className="container-page section-spacing">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Emoji Combos", href: "/emoji-combos/" },
            { label: combo.shortTitle },
          ]}
        />

        <article className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{combo.title}</h1>
          <p className="text-lg text-muted-foreground mb-8">{combo.description}</p>

          <ComboCopyCard unicode={combo.unicode} label="Copy full combo" description={combo.meaning} />

          <section className="mb-8 mt-8">
            <h2 className="text-2xl font-semibold mb-3">What this combo means</h2>
            <p className="text-muted-foreground leading-relaxed">{combo.meaning}</p>
          </section>

          <section className="mb-8 p-5 rounded-xl bg-primary/5 border border-primary/20">
            <h2 className="text-xl font-semibold mb-2">ZWJ / technical note</h2>
            <p className="text-muted-foreground">{combo.zwjNote}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Example messages</h2>
            <div className="space-y-3">
              {combo.examples.map((ex) => (
                <p key={ex} className="rounded-lg bg-muted/30 p-4 text-muted-foreground">
                  {ex}
                </p>
              ))}
            </div>
          </section>

          {components.length > 0 && (
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Base emojis in this combo</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {components.map((emoji) => (
                  <Link
                    key={emoji.slug}
                    to={`/emoji/${emoji.slug}/`}
                    className="flex items-center gap-3 rounded-lg border border-border p-4 hover:border-primary/40"
                  >
                    <span className="emoji text-3xl">{emoji.unicode}</span>
                    <div>
                      <h3 className="font-semibold">{emoji.name}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-1">{emoji.shortMeaning}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {combo.relatedComboSlugs.length > 0 && (
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Related combos</h2>
              <div className="flex flex-wrap gap-3">
                {combo.relatedComboSlugs.map((relatedSlug) => {
                  const related = getEmojiComboBySlug(relatedSlug);
                  if (!related) return null;
                  return (
                    <Link
                      key={relatedSlug}
                      to={`/emoji-combos/${relatedSlug}/`}
                      className="rounded-lg border border-border px-4 py-2 hover:border-primary/40"
                    >
                      {related.unicode} {related.shortTitle}
                    </Link>
                  );
                })}
              </div>
            </section>
          )}

          <p className="text-sm text-muted-foreground">
            Reviewed by {editorialMeta.teamName} • Last updated {editorialMeta.lastUpdated}
          </p>
        </article>
      </div>
    </Layout>
  );
};

export default EmojiComboDetail;
