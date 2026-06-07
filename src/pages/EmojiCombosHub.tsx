import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Layout, Breadcrumbs } from "@/components/Layout";
import { emojiCombos } from "@/data/emojiCombos";

const EmojiCombosHub = () => (
  <Layout>
    <Helmet>
      <title>Emoji Combos — Copy ZWJ Sequences & Combinations | Allemojipedia</title>
      <meta
        name="description"
        content="Copy emoji combos: couple, family, heart eyes kiss, birthday, and ZWJ sequences. Meanings and one-click paste for texting and social media."
      />
      <meta
        name="keywords"
        content="emoji combos, emoji combinations, zwj emoji, couple emoji combo, family emoji combo, copy emoji combo"
      />
      <link rel="canonical" href="https://allemojipedia.com/emoji-combos/" />
    </Helmet>

    <div className="container-page section-spacing">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Emoji Combos" }]} />

      <header className="mb-10 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Emoji Combos — Copy & Meaning</h1>
        <p className="text-lg text-muted-foreground">
          Pre-made emoji combinations and ZWJ sequences for couples, families, birthdays, and flirty texts. One click to copy.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl">
        {emojiCombos.map((combo) => (
          <Link
            key={combo.slug}
            to={`/emoji-combos/${combo.slug}/`}
            className="rounded-xl border border-border bg-card p-5 hover:border-primary/40 hover:shadow-md transition-all"
          >
            <span className="emoji text-4xl mb-3 block">{combo.unicode}</span>
            <h2 className="font-semibold mb-1">{combo.shortTitle}</h2>
            <p className="text-sm text-muted-foreground line-clamp-2">{combo.description}</p>
          </Link>
        ))}
      </div>

      <section className="mt-12 max-w-3xl">
        <p className="text-muted-foreground mb-4">
          Also try{" "}
          <Link to="/emoji-kitchen/" className="text-primary hover:underline">
            Emoji Kitchen
          </Link>{" "}
          for Gboard mashup guide and more copy-ready pairs.
        </p>
      </section>
    </div>
  </Layout>
);

export default EmojiCombosHub;
