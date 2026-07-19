import { Layout, Breadcrumbs } from "@/components/Layout";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { editorialMeta } from "@/data/editorialMeta";
import { EditorialSources } from "@/components/EditorialSources";
import { INDEX_FOLLOW_ROBOTS } from "@/utils/seoPolicy";

const About = () => {
  return (
    <Layout>
      <Helmet>
        <title>About Allemojipedia — Editorial Process & Emoji Sources</title>
        <meta
          name="description"
          content="How Allemojipedia reviews emoji meanings using Unicode, CLDR, platform designs, and real-world texting. Meet our sources and editorial process."
        />
        <meta
          name="keywords"
          content="about allemojipedia, emoji encyclopedia, unicode emoji sources, emoji editorial process, emoji dictionary"
        />
        <meta name="robots" content={INDEX_FOLLOW_ROBOTS} />
        <meta name="author" content={editorialMeta.author} />
        <meta name="publisher" content={editorialMeta.publisher} />
        <link rel="canonical" href="https://allemojipedia.com/about/" />
      </Helmet>

      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "About Us" },
          ]}
        />

        <div className="max-w-3xl mx-auto space-y-8">
          <h1 className="text-3xl font-bold">About Allemojipedia</h1>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Our Mission</h2>
            <p className="text-muted-foreground">
              Allemojipedia is a free emoji encyclopedia for meanings, copy-and-paste, texting tone, and platform
              differences. We help people understand what an emoji means in WhatsApp, Instagram, TikTok, and everyday chats —
              grounded in Unicode standards, not guesswork alone.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Editorial Process</h2>
            <p className="text-muted-foreground">
              Meanings are reviewed by the {editorialMeta.teamName}. For each emoji we start with the official Unicode
              name and code point, cross-check CLDR short names and annotations, then document how people actually use the
              symbol in texting, dating chats, workplaces, and social feeds.
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Primary source: Unicode emoji charts and character data</li>
              <li>Annotations: Unicode CLDR (common short names and keywords)</li>
              <li>Platform context: Apple, Google Noto / Gboard, Samsung rendering differences</li>
              <li>Usage research: comments, DMs, and slang patterns across age groups</li>
              <li>Updates when Unicode releases new emoji or slang shifts meaning</li>
            </ul>
            <p className="text-muted-foreground">Last editorial update: {editorialMeta.lastUpdated}.</p>
          </section>

          <EditorialSources
            title="Sources we cite"
            intro="These are the organizations that create or document emoji standards. We link them so readers and search engines can verify our references."
            sources={editorialMeta.sources}
          />

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Who creates emojis?</h2>
            <p className="text-muted-foreground">
              New emoji are proposed to and encoded by the{" "}
              <a
                href="https://unicode.org/emoji/proposals.html"
                className="text-primary hover:underline"
                target="_blank"
              >
                Unicode Consortium
              </a>
              . Vendors such as Apple, Google (Noto Color Emoji), Samsung, and Microsoft design how each character looks on
              devices. Allemojipedia explains both the standard definition and how tone changes in real messages.
            </p>
            <p className="text-muted-foreground">
              For deeper vendor artwork history, see also{" "}
              <a href="https://emojipedia.org/" className="text-primary hover:underline" target="_blank" rel="noopener">
                Emojipedia
              </a>
              .
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">What We Offer</h2>
            <p className="text-muted-foreground">
              Browse 3,700+ emoji pages with meanings and examples,{" "}
              <Link to="/emoji-meanings-in-texting/" className="text-primary hover:underline">
                250 texting context guides
              </Link>
              , platform hubs for iPhone / Android / Samsung, emoji combos, and comparisons.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Get in Touch</h2>
            <p className="text-muted-foreground">
              Suggestions or corrections? Reach us via the{" "}
              <Link to="/contact/" className="text-primary hover:underline">
                Contact page
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default About;
