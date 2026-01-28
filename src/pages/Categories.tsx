import { Link } from "react-router-dom";
import { Layout, Breadcrumbs } from "@/components/Layout";
import { categories } from "@/data/categories";
import { Helmet } from "react-helmet-async";

const Categories = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How many emoji categories are there?",
        "acceptedAnswer": { "@type": "Answer", "text": `There are ${categories.length} main emoji categories: smileys, people, animals, food, travel, activities, objects, symbols, and flags.` }
      },
      {
        "@type": "Question",
        "name": "Which emoji category is most popular?",
        "acceptedAnswer": { "@type": "Answer", "text": "The smileys and emotions category is the most popular, including emojis like 😀 😂 ❤️ which are used billions of times daily." }
      }
    ]
  };

  return (
    <Layout>
      <Helmet>
        <title>Emoji Categories | Allemojipedia</title>
        <meta name="description" content="Browse all emoji categories including smileys, people, animals, food, travel, activities, objects, symbols, and flags. Find the perfect emoji." />
        <meta name="keywords" content="emoji categories, emoji groups, smileys emojis, people emojis, animals emojis, food emojis, travel emojis" />
        <link rel="canonical" href="https://allemojipedia.com/categories/" />
      </Helmet>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="container-page section-spacing">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Categories" }]} />
        
        {/* H1 - Main Title */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-3">Emoji Categories</h1>
          <p className="text-muted-foreground">Explore all emoji categories and find the perfect emoji for every occasion.</p>
        </header>

        {/* H2 - All Categories */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-6">All Categories</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map(cat => (
              <Link
                key={cat.slug}
                to={`/category/${cat.slug}/`}
                className="group p-6 rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all"
              >
                <span className="emoji text-5xl block mb-4">{cat.icon}</span>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{cat.name}</h3>
                <p className="text-sm text-muted-foreground">{cat.description}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* H2 - FAQ */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4 max-w-2xl">
            <div className="p-4 rounded-lg bg-muted/30">
              <h3 className="font-semibold mb-2">How many emoji categories are there?</h3>
              <p className="text-muted-foreground">There are {categories.length} main emoji categories: smileys, people, animals, food, travel, activities, objects, symbols, and flags.</p>
            </div>
            <div className="p-4 rounded-lg bg-muted/30">
              <h3 className="font-semibold mb-2">Which emoji category is most popular?</h3>
              <p className="text-muted-foreground">The smileys and emotions category is the most popular, including emojis like 😀 😂 ❤️ which are used billions of times daily.</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Categories;
