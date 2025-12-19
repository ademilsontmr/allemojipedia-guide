import { Link } from "react-router-dom";
import { Layout, Breadcrumbs } from "@/components/Layout";
import { categories, peopleSubcategories } from "@/data/categories";
import { emojis } from "@/data/emojis";
import { Helmet } from "react-helmet-async";
import { downloadSitemap, getEmojiCount } from "@/utils/generateSitemap";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Sitemap = () => (
  <Layout>
    <Helmet>
      <title>Sitemap | Allemojipedia</title>
      <meta name="description" content="Complete sitemap of Allemojipedia - find all emoji pages, categories, and resources." />
      <link rel="canonical" href="https://allemojipedia.com/sitemap" />
    </Helmet>

    <div className="container-page section-spacing">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Sitemap" }]} />
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold">Sitemap</h1>
          <p className="text-muted-foreground mt-1">
            {getEmojiCount()} emojis indexed
          </p>
        </div>
        <Button onClick={downloadSitemap} variant="outline" className="gap-2">
          <Download className="h-4 w-4" />
          Download sitemap.xml
        </Button>
      </div>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Main Pages</h2>
        <ul className="space-y-2">
          <li><Link to="/" className="text-primary hover:underline">Home</Link></li>
          <li><Link to="/categories" className="text-primary hover:underline">Categories</Link></li>
          <li><Link to="/people" className="text-primary hover:underline">People Hub</Link></li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Categories</h2>
        <ul className="space-y-2">
          {categories.map(cat => (
            <li key={cat.slug}>
              <Link to={`/category/${cat.slug}`} className="text-primary hover:underline">
                {cat.icon} {cat.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">People & Body Hub Pages</h2>
        <ul className="space-y-2">
          {peopleSubcategories.map(sub => (
            <li key={sub.slug}>
              <Link to={`/people/${sub.slug}`} className="text-primary hover:underline">
                {sub.icon} {sub.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Emoji Pages (A–Z)</h2>
        <div className="grid gap-1 sm:grid-cols-2 lg:grid-cols-3">
          {[...emojis].sort((a, b) => a.name.localeCompare(b.name)).map(e => (
            <Link key={e.slug} to={`/emoji/${e.slug}`} className="text-sm text-primary hover:underline py-1">
              {e.unicode} {e.name}
            </Link>
          ))}
        </div>
      </section>
    </div>
  </Layout>
);

export default Sitemap;
