import { Link } from "react-router-dom";
import { Layout, Breadcrumbs } from "@/components/Layout";
import { EmojiCard } from "@/components/EmojiCard";
import { getEmojisByCategory } from "@/data/emojis";
import { peopleSubcategories } from "@/data/categories";
import { Helmet } from "react-helmet-async";

const People = () => {
  const peopleEmojis = getEmojisByCategory("people-and-body").slice(0, 12);

  return (
    <Layout>
      <Helmet>
        <title>People Emojis and Their Meanings | Allemojipedia</title>
        <meta name="description" content="Explore people emojis including gestures, emotions, professions, and family. Learn about skin tone variations and gender representations." />
        <link rel="canonical" href="https://allemojipedia.com/people" />
      </Helmet>

      <div className="container-page section-spacing">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "People Hub" }]} />
        
        <h1 className="text-3xl font-bold mb-4">People Emojis and Their Meanings</h1>
        <p className="text-muted-foreground mb-8 max-w-2xl">
          Discover human emojis representing gestures, emotions, professions, and families. These emojis include skin tone modifiers and gender variations for inclusive, representative communication.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Browse by Type</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {peopleSubcategories.map(sub => (
              <Link
                key={sub.slug}
                to={`/people/${sub.slug}`}
                className="p-6 rounded-xl border border-border hover:border-primary/50 hover:shadow-md transition-all text-center"
              >
                <span className="emoji text-4xl block mb-3">{sub.icon}</span>
                <h3 className="font-semibold mb-1">{sub.name}</h3>
                <p className="text-sm text-muted-foreground">{sub.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">Popular People Emojis</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {peopleEmojis.map(emoji => <EmojiCard key={emoji.slug} emoji={emoji} />)}
          </div>
          <Link to="/category/people-and-body" className="inline-block mt-6 text-primary hover:underline">
            View all People & Body emojis →
          </Link>
        </section>
      </div>
    </Layout>
  );
};

export default People;
