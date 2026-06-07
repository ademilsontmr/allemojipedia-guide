import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Layout, Breadcrumbs } from "@/components/Layout";
import { emojiPlatforms } from "@/data/emojiPlatforms";
import { editorialMeta } from "@/data/editorialMeta";
import { INDEX_FOLLOW_ROBOTS } from "@/utils/seoPolicy";

const PlatformsIndex = () => (
  <Layout>
    <Helmet>
      <title>Emoji Platforms — Apple, Google & Samsung | Allemojipedia</title>
      <meta
        name="description"
        content="Copy emojis by platform: iPhone (Apple), Android (Google), and Samsung Galaxy—with meanings for each device style."
      />
      <meta name="robots" content={INDEX_FOLLOW_ROBOTS} />
      <meta name="author" content={editorialMeta.author} />
      <meta name="publisher" content={editorialMeta.publisher} />
      <link rel="canonical" href="https://allemojipedia.com/platforms/apple/" />
    </Helmet>

    <div className="container-page section-spacing">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Platforms" }]} />

      <header className="mb-10 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Emoji by Platform</h1>
        <p className="text-lg text-muted-foreground">
          Unicode emojis look different on iPhone, Android, and Samsung. Copy and learn meanings for each platform.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-3 max-w-4xl">
        {emojiPlatforms.map((platform) => (
          <Link
            key={platform.slug}
            to={`/platforms/${platform.slug}/`}
            className="rounded-xl border border-border bg-card p-6 hover:border-primary/40 hover:shadow-md transition-all"
          >
            <span className="text-4xl mb-3 block">{platform.icon}</span>
            <h2 className="text-xl font-semibold mb-2">{platform.name}</h2>
            <p className="text-sm text-muted-foreground">{platform.description.slice(0, 120)}…</p>
          </Link>
        ))}
      </div>
    </div>
  </Layout>
);

export default PlatformsIndex;
