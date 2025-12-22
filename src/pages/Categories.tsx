import { Link } from "react-router-dom";
import { Layout, Breadcrumbs } from "@/components/Layout";
import { categories } from "@/data/categories";
import { Helmet } from "react-helmet-async";

const Categories = () => (
  <Layout>
    <Helmet>
      <title>Emoji Categories | Allemojipedia</title>
      <meta name="description" content="Browse all emoji categories including smileys, people, animals, food, travel, activities, objects, symbols, and flags. Find the perfect emoji." />
      <meta name="keywords" content="emoji categories, emoji groups, smileys emojis, people emojis, animals emojis, food emojis, travel emojis, activities emojis, objects emojis, symbols emojis, flags emojis" />
      <link rel="canonical" href="https://allemojipedia.com/categories" />
    </Helmet>

    <div className="container-page section-spacing">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Categories" }]} />
      <h1 className="text-3xl font-bold mb-8">Emoji Categories</h1>
      
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map(cat => (
          <Link
            key={cat.slug}
            to={`/category/${cat.slug}`}
            className="group p-6 rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all"
          >
            <span className="emoji text-5xl block mb-4">{cat.icon}</span>
            <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{cat.name}</h2>
            <p className="text-sm text-muted-foreground">{cat.description}</p>
          </Link>
        ))}
      </div>
    </div>
  </Layout>
);

export default Categories;
