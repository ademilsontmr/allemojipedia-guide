import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Layout, Breadcrumbs } from "@/components/Layout";
import { ComboCopyCard } from "@/components/ComboCopyCard";
import { emojiKitchenCombos, emojiKitchenGuide } from "@/data/emojiKitchen";
import { editorialMeta } from "@/data/editorialMeta";

const EmojiKitchenPage = () => {
  const url = "https://allemojipedia.com/emoji-kitchen/";

  return (
    <Layout>
      <Helmet>
        <title>{emojiKitchenGuide.title} | Allemojipedia</title>
        <meta name="description" content={emojiKitchenGuide.description} />
        <meta name="keywords" content={emojiKitchenGuide.keywords} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={emojiKitchenGuide.title} />
        <meta property="og:description" content={emojiKitchenGuide.description} />
        <meta property="og:url" content={url} />
      </Helmet>

      <div className="container-page section-spacing">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Emoji Kitchen" }]} />

        <article className="max-w-3xl">
          <header className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{emojiKitchenGuide.title}</h1>
            <p className="text-lg text-muted-foreground">{emojiKitchenGuide.description}</p>
            <p className="text-sm text-muted-foreground mt-4">
              Reviewed by {editorialMeta.teamName} • Last updated {editorialMeta.lastUpdated}
            </p>
          </header>

          <section className="mb-10 space-y-6">
            {emojiKitchenGuide.sections.map((section) => (
              <div key={section.heading} className="rounded-xl bg-muted/30 border border-border p-5">
                <h2 className="text-xl font-semibold mb-2">{section.heading}</h2>
                <p className="text-muted-foreground whitespace-pre-line leading-relaxed">{section.body}</p>
              </div>
            ))}
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Popular combos to copy</h2>
            <p className="text-muted-foreground mb-6">
              These Unicode chains work everywhere—alternatives to Kitchen stickers. Tap to copy, then explore base emoji meanings.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {emojiKitchenCombos.map((combo) => (
                <div key={combo.id}>
                  <ComboCopyCard unicode={combo.unicode} label={combo.label} description={combo.description} />
                  <div className="flex flex-wrap gap-2 mt-2 px-1">
                    {combo.baseEmojiSlugs.map((slug) => (
                      <Link
                        key={slug}
                        to={`/emoji/${slug}/`}
                        className="text-xs text-primary hover:underline"
                      >
                        {slug.replace(/-/g, " ")}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
            <div className="space-y-4">
              {emojiKitchenGuide.faqs.map((faq) => (
                <div key={faq.question} className="rounded-lg border border-border p-4">
                  <h3 className="font-semibold mb-2">{faq.question}</h3>
                  <p className="text-sm text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Related</h2>
            <div className="flex flex-wrap gap-3">
              <Link to="/emoji-combos/" className="text-primary hover:underline">
                Emoji Combos hub →
              </Link>
              <Link to="/platforms/google/" className="text-primary hover:underline">
                Google / Gboard emojis →
              </Link>
              <Link to="/platforms/apple/" className="text-primary hover:underline">
                iPhone emojis →
              </Link>
            </div>
          </section>
        </article>
      </div>
    </Layout>
  );
};

export default EmojiKitchenPage;
