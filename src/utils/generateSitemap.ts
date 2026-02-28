import { emojis } from '@/data/emojis';
import { categories, peopleSubcategories } from '@/data/categories';
import { blogPosts } from '@/data/blogPosts';

const BASE_URL = 'https://allemojipedia.com';

export interface SitemapUrl {
  loc: string;
  priority: string;
}

export const generateSitemapUrls = (): SitemapUrl[] => {
  const urls: SitemapUrl[] = [];

  // Main pages
  urls.push({ loc: `${BASE_URL}/`, priority: '1.0' });
  urls.push({ loc: `${BASE_URL}/categories/`, priority: '0.9' });
  urls.push({ loc: `${BASE_URL}/people/`, priority: '0.9' });
  urls.push({ loc: `${BASE_URL}/blog/`, priority: '0.9' });
  urls.push({ loc: `${BASE_URL}/sitemap/`, priority: '0.5' });

  // Category pages
  categories.forEach(category => {
    urls.push({ loc: `${BASE_URL}/category/${category.slug}/`, priority: '0.8' });
  });

  // People subcategory pages
  peopleSubcategories.forEach(sub => {
    urls.push({ loc: `${BASE_URL}/people/${sub.slug}/`, priority: '0.7' });
  });

  // Blog post pages (automatically includes all posts)
  blogPosts.forEach(post => {
    urls.push({ loc: `${BASE_URL}/blog/${post.slug}/`, priority: '0.7' });
  });

  // All emoji pages
  emojis.forEach(emoji => {
    urls.push({ loc: `${BASE_URL}/emoji/${emoji.slug}/`, priority: '0.6' });
  });


  return urls;
};

export const generateSitemapXml = (): string => {
  const urls = generateSitemapUrls();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url><loc>${url.loc}</loc><priority>${url.priority}</priority></url>`).join('\n')}
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
export const getBlogPostCount = (): number => blogPosts.length;
