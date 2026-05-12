import { emojis } from '@/data/emojis';
import { categories, peopleSubcategories } from '@/data/categories';
import { blogPosts } from '@/data/blogPosts';
import { popularComparisons } from '@/data/emojiComparisons';
import { emojiIntentClusters } from '@/data/emojiIntentClusters';
import { emojiContextPages } from '@/data/emojiContextPages';
import { editorialMeta } from '@/data/editorialMeta';
import { shouldIndexEmoji } from './seoPolicy';

const BASE_URL = 'https://allemojipedia.com';
const POSTS_PER_PAGE = 9;

export interface SitemapUrl {
  loc: string;
  priority: string;
  lastmod: string;
}

const latestDate = (dates: string[]) =>
  dates.length ? dates.reduce((latest, date) => (date > latest ? date : latest), dates[0]) : editorialMeta.lastUpdatedIso;

const latestBlogDate = () => latestDate(blogPosts.map((post) => post.date));

export const generateSitemapUrls = (): SitemapUrl[] => {
  const urls: SitemapUrl[] = [];
  const seen = new Set<string>();
  const emojiSlugs = new Set(emojis.map((emoji) => emoji.slug));

  const addUrl = (url: SitemapUrl) => {
    if (seen.has(url.loc)) return;

    seen.add(url.loc);
    urls.push(url);
  };

  // Main pages
  addUrl({ loc: `${BASE_URL}/`, priority: '1.0', lastmod: editorialMeta.lastUpdatedIso });
  addUrl({ loc: `${BASE_URL}/categories/`, priority: '0.9', lastmod: editorialMeta.lastUpdatedIso });
  addUrl({ loc: `${BASE_URL}/people/`, priority: '0.9', lastmod: editorialMeta.lastUpdatedIso });
  addUrl({ loc: `${BASE_URL}/blog/`, priority: '0.9', lastmod: latestBlogDate() });
  addUrl({ loc: `${BASE_URL}/emoji-meanings/`, priority: '0.9', lastmod: editorialMeta.lastUpdatedIso });
  addUrl({ loc: `${BASE_URL}/emoji-comparisons/`, priority: '0.9', lastmod: editorialMeta.lastUpdatedIso });
  addUrl({ loc: `${BASE_URL}/flag-quiz/`, priority: '0.6', lastmod: editorialMeta.lastUpdatedIso });
  addUrl({ loc: `${BASE_URL}/sitemap/`, priority: '0.5', lastmod: editorialMeta.lastUpdatedIso });
  addUrl({ loc: `${BASE_URL}/about/`, priority: '0.4', lastmod: editorialMeta.lastUpdatedIso });
  addUrl({ loc: `${BASE_URL}/privacy/`, priority: '0.3', lastmod: editorialMeta.lastUpdatedIso });
  addUrl({ loc: `${BASE_URL}/contact/`, priority: '0.3', lastmod: editorialMeta.lastUpdatedIso });

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

  // Blog post pages (automatically includes all posts)
  blogPosts.forEach(post => {
    addUrl({ loc: `${BASE_URL}/blog/${post.slug}/`, priority: '0.7', lastmod: post.date });
  });

  emojiIntentClusters.forEach(cluster => {
    addUrl({ loc: `${BASE_URL}/emoji-meanings/${cluster.slug}/`, priority: '0.9', lastmod: editorialMeta.lastUpdatedIso });
  });

  emojiContextPages.forEach(({ emojiSlug, context }) => {
    const emoji = emojis.find((item) => item.slug === emojiSlug);
    if (!emoji || !shouldIndexEmoji(emoji)) return;
    addUrl({ loc: `${BASE_URL}/emoji/${emojiSlug}/${context}/`, priority: '0.8', lastmod: editorialMeta.lastUpdatedIso });
  });

  popularComparisons.forEach(({ slug1, slug2 }) => {
    if (!emojiSlugs.has(slug1) || !emojiSlugs.has(slug2)) return;
    addUrl({ loc: `${BASE_URL}/emoji/${slug1}-vs-${slug2}/`, priority: '0.8', lastmod: editorialMeta.lastUpdatedIso });
  });

  // All emoji pages
  emojis.filter(shouldIndexEmoji).forEach(emoji => {
    addUrl({ loc: `${BASE_URL}/emoji/${emoji.slug}/`, priority: '0.8', lastmod: editorialMeta.lastUpdatedIso });
  });


  return urls;
};

export const generateSitemapXml = (): string => {
  const urls = generateSitemapUrls();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url><loc>${url.loc}</loc><lastmod>${url.lastmod}</lastmod><priority>${url.priority}</priority></url>`).join('\n')}
</urlset>`;

  return xml;
};

export const downloadSitemap = () => {
  const xml = generateSitemapXml();
  const blob = new Blob([xml], { type: 'application/xml' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'sitemap.xml';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

export const getEmojiCount = (): number => emojis.length;
export const getIndexableEmojiCount = (): number => emojis.filter(shouldIndexEmoji).length;
export const getBlogPostCount = (): number => blogPosts.length;
