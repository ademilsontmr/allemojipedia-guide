import { emojis } from '../src/data/emojis';
import { categories, peopleSubcategories } from '../src/data/categories';
import { blogPosts } from '../src/data/blogPosts';
import * as fs from 'fs';
import * as path from 'path';

const BASE_URL = 'https://allemojipedia.com';

interface SitemapUrl {
  loc: string;
  priority: string;
}

// Popular emoji comparisons
const popularComparisons = [
  { slug1: 'grinning-face', slug2: 'grinning-face-with-big-eyes' },
  { slug1: 'grinning-face-with-smiling-eyes', slug2: 'beaming-face-with-smiling-eyes' },
  { slug1: 'face-with-tears-of-joy', slug2: 'rolling-on-the-floor-laughing' },
  { slug1: 'slightly-smiling-face', slug2: 'smiling-face' },
  { slug1: 'smiling-face-with-hearts', slug2: 'smiling-face-with-heart-eyes' },
  { slug1: 'winking-face', slug2: 'smiling-face-with-smiling-eyes' },
  { slug1: 'thinking-face', slug2: 'face-with-raised-eyebrow' },
  { slug1: 'neutral-face', slug2: 'expressionless-face' },
  { slug1: 'confused-face', slug2: 'worried-face' },
  { slug1: 'crying-face', slug2: 'loudly-crying-face' },
  { slug1: 'angry-face', slug2: 'pouting-face' },
  { slug1: 'red-heart', slug2: 'pink-heart' },
  { slug1: 'red-heart', slug2: 'orange-heart' },
  { slug1: 'thumbs-up', slug2: 'thumbs-down' },
  { slug1: 'waving-hand', slug2: 'raised-hand' },
  { slug1: 'clapping-hands', slug2: 'raising-hands' },
  { slug1: 'folded-hands', slug2: 'palms-up-together' },
  { slug1: 'victory-hand', slug2: 'crossed-fingers' },
];

const generateSitemapUrls = (): SitemapUrl[] => {
  const urls: SitemapUrl[] = [];

  // Main pages
  urls.push({ loc: `${BASE_URL}/`, priority: '1.0' });
  urls.push({ loc: `${BASE_URL}/categories`, priority: '0.9' });
  urls.push({ loc: `${BASE_URL}/people`, priority: '0.9' });
  urls.push({ loc: `${BASE_URL}/blog`, priority: '0.9' });
  urls.push({ loc: `${BASE_URL}/emoji-comparisons`, priority: '0.9' });
  urls.push({ loc: `${BASE_URL}/sitemap`, priority: '0.5' });

  // Blog pagination pages
  const POSTS_PER_PAGE = 9;
  const totalBlogPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);
  for (let i = 2; i <= totalBlogPages; i++) {
    const pageNum = i.toString().padStart(2, '0');
    urls.push({ loc: `${BASE_URL}/blog/page/${pageNum}`, priority: '0.7' });
  }

  // Category pages
  categories.forEach(category => {
    urls.push({ loc: `${BASE_URL}/category/${category.slug}`, priority: '0.8' });
  });

  // People subcategory pages
  peopleSubcategories.forEach(sub => {
    urls.push({ loc: `${BASE_URL}/people/${sub.slug}`, priority: '0.7' });
  });

  // Blog post pages
  blogPosts.forEach(post => {
    urls.push({ loc: `${BASE_URL}/blog/${post.slug}`, priority: '0.7' });
  });

  // Emoji comparison pages (BEFORE individual emojis for better crawling)
  popularComparisons.forEach(({ slug1, slug2 }) => {
    urls.push({ loc: `${BASE_URL}/emoji/${slug1}-vs-${slug2}`, priority: '0.8' });
  });

  // All emoji pages
  emojis.forEach(emoji => {
    urls.push({ loc: `${BASE_URL}/emoji/${emoji.slug}`, priority: '0.6' });
  });

  return urls;
};

const generateSitemapXml = (): string => {
  const urls = generateSitemapUrls();
  
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url><loc>${url.loc}</loc><priority>${url.priority}</priority></url>`).join('\n')}
</urlset>`;

  return xml;
};

// Generate and save sitemap
const xml = generateSitemapXml();
const outputPath = path.join(process.cwd(), 'public', 'sitemap.xml');
fs.writeFileSync(outputPath, xml);

console.log(`Sitemap generated with ${generateSitemapUrls().length} URLs`);
console.log(`Saved to: ${outputPath}`);
