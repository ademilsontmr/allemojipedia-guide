import { emojis } from '../src/data/emojis';
import { categories, peopleSubcategories } from '../src/data/categories';
import { blogPosts } from '../src/data/blogPosts';
import { popularComparisons } from '../src/data/emojiComparisons';
import { emojiIntentClusters } from '../src/data/emojiIntentClusters';
import { emojiContextPages } from '../src/data/emojiContextPages';
import { emojiPlatforms, platformAliasRoutes } from '../src/data/emojiPlatforms';
import { emojiCombos } from '../src/data/emojiCombos';
import { editorialMeta } from '../src/data/editorialMeta';
import * as fs from 'fs';
import * as path from 'path';

const BASE_URL = 'https://allemojipedia.com';

const latestDate = (dates: string[]) =>
  dates.length ? dates.reduce((latest, date) => (date > latest ? date : latest), dates[0]) : editorialMeta.lastUpdatedIso;

const latestBlogDate = () => latestDate(blogPosts.map((post) => post.date));

interface SitemapUrl {
  loc: string;
  priority: string;
  lastmod: string;
}

const writeSitemap = (xml: string, outputPath: string) => {
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, xml);
  console.log(`Saved to: ${outputPath}`);
};

const generateSitemapUrls = (): SitemapUrl[] => {
  const urls: SitemapUrl[] = [];
  const seen = new Set<string>();
  const emojiSlugs = new Set(emojis.map((emoji) => emoji.slug));

  const addUrl = (url: SitemapUrl) => {
    if (seen.has(url.loc)) {
      throw new Error(`Duplicate sitemap URL: ${url.loc}`);
    }

    seen.add(url.loc);
    urls.push(url);
  };

  // Main pages
  addUrl({ loc: `${BASE_URL}/`, priority: '1.0', lastmod: editorialMeta.lastUpdatedIso });
  addUrl({ loc: `${BASE_URL}/categories/`, priority: '0.9', lastmod: editorialMeta.lastUpdatedIso });
  addUrl({ loc: `${BASE_URL}/people/`, priority: '0.9', lastmod: editorialMeta.lastUpdatedIso });
  addUrl({ loc: `${BASE_URL}/blog/`, priority: '0.9', lastmod: latestBlogDate() });
  addUrl({ loc: `${BASE_URL}/emoji-meanings/`, priority: '0.9', lastmod: editorialMeta.lastUpdatedIso });
  addUrl({ loc: `${BASE_URL}/emoji-meanings-in-texting/`, priority: '0.9', lastmod: editorialMeta.lastUpdatedIso });
  addUrl({ loc: `${BASE_URL}/emoji-comparisons/`, priority: '0.9', lastmod: editorialMeta.lastUpdatedIso });
  addUrl({ loc: `${BASE_URL}/emoji-kitchen/`, priority: '0.9', lastmod: editorialMeta.lastUpdatedIso });
  addUrl({ loc: `${BASE_URL}/emoji-combos/`, priority: '0.9', lastmod: editorialMeta.lastUpdatedIso });
  addUrl({ loc: `${BASE_URL}/tiktok-emojis/`, priority: '0.9', lastmod: editorialMeta.lastUpdatedIso });
  addUrl({ loc: `${BASE_URL}/emoji-copy-and-paste/`, priority: '0.9', lastmod: editorialMeta.lastUpdatedIso });
  emojiPlatforms.forEach((platform) => {
    addUrl({ loc: `${BASE_URL}/platforms/${platform.slug}/`, priority: '0.9', lastmod: editorialMeta.lastUpdatedIso });
  });
  platformAliasRoutes.forEach(({ path: aliasPath }) => {
    addUrl({ loc: `${BASE_URL}${aliasPath}/`, priority: '0.85', lastmod: editorialMeta.lastUpdatedIso });
  });
  emojiCombos.forEach((combo) => {
    addUrl({ loc: `${BASE_URL}/emoji-combos/${combo.slug}/`, priority: '0.8', lastmod: editorialMeta.lastUpdatedIso });
  });
  addUrl({ loc: `${BASE_URL}/flag-quiz/`, priority: '0.6', lastmod: editorialMeta.lastUpdatedIso });
  addUrl({ loc: `${BASE_URL}/sitemap/`, priority: '0.5', lastmod: editorialMeta.lastUpdatedIso });
  addUrl({ loc: `${BASE_URL}/about/`, priority: '0.4', lastmod: editorialMeta.lastUpdatedIso });
  addUrl({ loc: `${BASE_URL}/privacy/`, priority: '0.3', lastmod: editorialMeta.lastUpdatedIso });
  addUrl({ loc: `${BASE_URL}/contact/`, priority: '0.3', lastmod: editorialMeta.lastUpdatedIso });

  // Blog pagination pages
  const POSTS_PER_PAGE = 9;
  const totalBlogPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);
  for (let i = 2; i <= totalBlogPages; i++) {
    const pageNum = i.toString().padStart(2, '0');
    const pagePosts = blogPosts.slice((i - 1) * POSTS_PER_PAGE, i * POSTS_PER_PAGE);
    addUrl({ loc: `${BASE_URL}/blog/page/${pageNum}/`, priority: '0.7', lastmod: latestDate(pagePosts.map((post) => post.date)) });
  }

  // Category pages
  categories.forEach(category => {
    addUrl({ loc: `${BASE_URL}/category/${category.slug}/`, priority: '0.8', lastmod: editorialMeta.lastUpdatedIso });
  });

  // People subcategory pages
  peopleSubcategories.forEach(sub => {
    addUrl({ loc: `${BASE_URL}/people/${sub.slug}/`, priority: '0.7', lastmod: editorialMeta.lastUpdatedIso });
  });

  // Blog post pages
  blogPosts.forEach(post => {
    addUrl({ loc: `${BASE_URL}/blog/${post.slug}/`, priority: '0.7', lastmod: post.date });
  });

  // Intent cluster pages
  emojiIntentClusters.forEach(cluster => {
    addUrl({ loc: `${BASE_URL}/emoji-meanings/${cluster.slug}/`, priority: '0.9', lastmod: editorialMeta.lastUpdatedIso });
  });

  // High-intent context pages for specific emojis
  emojiContextPages.forEach(({ emojiSlug, context }) => {
    if (!emojiSlugs.has(emojiSlug)) return;
    addUrl({ loc: `${BASE_URL}/emoji/${emojiSlug}/${context}/`, priority: '0.8', lastmod: editorialMeta.lastUpdatedIso });
  });

  // Emoji comparison pages (BEFORE individual emojis for better crawling)
  popularComparisons.forEach(({ slug1, slug2 }) => {
    if (!emojiSlugs.has(slug1) || !emojiSlugs.has(slug2)) return;
    addUrl({ loc: `${BASE_URL}/emoji/${slug1}-vs-${slug2}/`, priority: '0.8', lastmod: editorialMeta.lastUpdatedIso });
  });

  // All emoji pages
  emojis.forEach(emoji => {
    addUrl({ loc: `${BASE_URL}/emoji/${emoji.slug}/`, priority: '0.8', lastmod: editorialMeta.lastUpdatedIso });
  });

  return urls;
};

const generateSitemapXml = (): string => {
  const urls = generateSitemapUrls();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url><loc>${url.loc}</loc><lastmod>${url.lastmod}</lastmod><priority>${url.priority}</priority></url>`).join('\n')}
</urlset>`;

  return xml;
};

// Generate and save sitemap
const xml = generateSitemapXml();
const outputPaths = [
  path.join(process.cwd(), 'public', 'sitemap.xml'),
  path.join(process.cwd(), 'dist', 'sitemap.xml'),
];

outputPaths.forEach((outputPath) => writeSitemap(xml, outputPath));

console.log(`Sitemap generated with ${generateSitemapUrls().length} URLs`);
