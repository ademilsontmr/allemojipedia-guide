import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Layout, Breadcrumbs } from "@/components/Layout";
import { categories, peopleSubcategories } from "@/data/categories";
import { blogPosts } from "@/data/blogPosts";
import { emojiIntentClusters } from "@/data/emojiIntentClusters";
import { emojiContextPages } from "@/data/emojiContextPages";
import { Helmet } from "react-helmet-async";
import { downloadSitemap, getIndexableEmojiCount, getBlogPostCount } from "@/utils/generateSitemap";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { shouldIndexEmoji } from "@/utils/seoPolicy";

import type { Emoji } from "@/data/emojis";
import { getEmojiCache } from "@/data/emojisCache";

const Sitemap = () => {
  const [emojis, setEmojis] = useState<Emoji[]>([]);
  const [isEmojiDataLoaded, setIsEmojiDataLoaded] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      const emojisModule = await getEmojiCache();
      if (cancelled) return;

      setEmojis((emojisModule.emojis as Emoji[]).filter(shouldIndexEmoji));
      setIsEmojiDataLoaded(true);
    };

    setIsEmojiDataLoaded(false);
    load().catch(() => {
      if (!cancelled) setIsEmojiDataLoaded(true);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>Sitemap | Allemojipedia</title>
        <meta name="description" content="Complete sitemap of Allemojipedia - find all emoji pages, categories, and resources." />
        <link rel="canonical" href="https://allemojipedia.com/sitemap/" />
      </Helmet>

      <div className="container-page section-spacing">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Sitemap" }]} />
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold">Sitemap</h1>
            <p className="text-muted-foreground mt-1">
              {getIndexableEmojiCount()} emoji pages and {getBlogPostCount()} articles in the XML sitemap
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
            <li><Link to="/categories/" className="text-primary hover:underline">Categories</Link></li>
            <li><Link to="/people/" className="text-primary hover:underline">People Hub</Link></li>
            <li><Link to="/blog/" className="text-primary hover:underline">Blog</Link></li>
            <li><Link to="/emoji-meanings/" className="text-primary hover:underline">Emoji Meanings Hub</Link></li>
            <li><Link to="/emoji-comparisons/" className="text-primary hover:underline">Emoji Comparisons</Link></li>
            <li><Link to="/flag-quiz/" className="text-primary hover:underline">Flag Quiz</Link></li>
            <li><Link to="/about/" className="text-primary hover:underline">About</Link></li>
            <li><Link to="/privacy/" className="text-primary hover:underline">Privacy Policy</Link></li>
            <li><Link to="/contact/" className="text-primary hover:underline">Contact</Link></li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Emoji Meaning Clusters</h2>
          <ul className="space-y-2">
            {emojiIntentClusters.map(cluster => (
              <li key={cluster.slug}>
                <Link to={`/emoji-meanings/${cluster.slug}/`} className="text-primary hover:underline">
                  {cluster.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Emoji Context Guides</h2>
          <ul className="space-y-2">
            {emojiContextPages.map(page => (
              <li key={`${page.emojiSlug}-${page.context}`}>
                <Link to={`/emoji/${page.emojiSlug}/${page.context}/`} className="text-primary hover:underline">
                  {page.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Categories</h2>
          <ul className="space-y-2">
            {categories.map(cat => (
              <li key={cat.slug}>
                <Link to={`/category/${cat.slug}/`} className="text-primary hover:underline">
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
                <Link to={`/people/${sub.slug}/`} className="text-primary hover:underline">
                  {sub.icon} {sub.name}
                </Link>
              </li>
            ))}
          </ul>

        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Blog Articles</h2>
          <ul className="space-y-2">
            {blogPosts.map(post => (
              <li key={post.slug}>
                <Link to={`/blog/${post.slug}/`} className="text-primary hover:underline">
                  {post.image} {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Emoji Pages (A–Z)</h2>
          {!isEmojiDataLoaded ? (
            <p className="text-muted-foreground">Loading emojis…</p>
          ) : (
            <div className="grid gap-1 sm:grid-cols-2 lg:grid-cols-3">
              {[...emojis].sort((a, b) => a.name.localeCompare(b.name)).map(e => (
                <Link key={e.slug} to={`/emoji/${e.slug}/`} className="text-sm text-primary hover:underline py-1">
                  {e.unicode} {e.name}
                </Link>
              ))}
            </div>
          )}
        </section>
      </div>
    </Layout>
  );
};

export default Sitemap;
