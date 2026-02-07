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
  // Smileys - Very similar faces
  { slug1: 'grinning-face', slug2: 'grinning-face-with-big-eyes' },
  { slug1: 'grinning-face-with-smiling-eyes', slug2: 'beaming-face-with-smiling-eyes' },
  { slug1: 'face-with-tears-of-joy', slug2: 'rolling-on-the-floor-laughing' },
  { slug1: 'slightly-smiling-face', slug2: 'smiling-face' },
  { slug1: 'smiling-face-with-smiling-eyes', slug2: 'smiling-face' },
  { slug1: 'upside-down-face', slug2: 'slightly-smiling-face' },
  
  // Love & Hearts
  { slug1: 'smiling-face-with-hearts', slug2: 'smiling-face-with-heart-eyes' },
  { slug1: 'face-blowing-a-kiss', slug2: 'kissing-face' },
  { slug1: 'red-heart', slug2: 'pink-heart' },
  { slug1: 'red-heart', slug2: 'orange-heart' },
  { slug1: 'red-heart', slug2: 'yellow-heart' },
  { slug1: 'red-heart', slug2: 'purple-heart' },
  { slug1: 'red-heart', slug2: 'blue-heart' },
  { slug1: 'red-heart', slug2: 'black-heart' },
  { slug1: 'sparkling-heart', slug2: 'two-hearts' },
  { slug1: 'heart-with-arrow', slug2: 'heart-with-ribbon' },
  { slug1: 'beating-heart', slug2: 'growing-heart' },
  { slug1: 'broken-heart', slug2: 'mending-heart' },
  
  // Thinking & Confused
  { slug1: 'thinking-face', slug2: 'face-with-raised-eyebrow' },
  { slug1: 'confused-face', slug2: 'worried-face' },
  { slug1: 'neutral-face', slug2: 'expressionless-face' },
  { slug1: 'face-with-rolling-eyes', slug2: 'unamused-face' },
  { slug1: 'smirking-face', slug2: 'face-with-raised-eyebrow' },
  
  // Sad & Crying
  { slug1: 'crying-face', slug2: 'loudly-crying-face' },
  { slug1: 'pleading-face', slug2: 'crying-face' },
  { slug1: 'disappointed-face', slug2: 'pensive-face' },
  { slug1: 'weary-face', slug2: 'tired-face' },
  
  // Angry & Frustrated
  { slug1: 'angry-face', slug2: 'pouting-face' },
  { slug1: 'face-with-symbols-on-mouth', slug2: 'angry-face' },
  
  // Winking & Playful
  { slug1: 'winking-face', slug2: 'smiling-face-with-smiling-eyes' },
  { slug1: 'winking-face-with-tongue', slug2: 'face-with-tongue' },
  { slug1: 'zany-face', slug2: 'squinting-face-with-tongue' },
  
  // Surprised & Shocked
  { slug1: 'face-with-open-mouth', slug2: 'hushed-face' },
  { slug1: 'astonished-face', slug2: 'face-screaming-in-fear' },
  { slug1: 'flushed-face', slug2: 'hot-face' },
  
  // Sick & Unwell
  { slug1: 'face-with-thermometer', slug2: 'nauseated-face' },
  { slug1: 'sneezing-face', slug2: 'face-with-medical-mask' },
  { slug1: 'dizzy-face', slug2: 'woozy-face' },
  
  // Cool & Party
  { slug1: 'smiling-face-with-sunglasses', slug2: 'nerd-face' },
  { slug1: 'partying-face', slug2: 'cowboy-hat-face' },
  
  // Hands & Gestures
  { slug1: 'thumbs-up', slug2: 'thumbs-down' },
  { slug1: 'waving-hand', slug2: 'raised-hand' },
  { slug1: 'clapping-hands', slug2: 'raising-hands' },
  { slug1: 'folded-hands', slug2: 'palms-up-together' },
  { slug1: 'victory-hand', slug2: 'crossed-fingers' },
  { slug1: 'ok-hand', slug2: 'pinched-fingers' },
  { slug1: 'raised-fist', slug2: 'oncoming-fist' },
  { slug1: 'love-you-gesture', slug2: 'sign-of-the-horns' },
  { slug1: 'writing-hand', slug2: 'selfie' },
  
  // Monkeys
  { slug1: 'see-no-evil-monkey', slug2: 'hear-no-evil-monkey' },
  { slug1: 'hear-no-evil-monkey', slug2: 'speak-no-evil-monkey' },
  
  // Cat faces
  { slug1: 'grinning-cat', slug2: 'grinning-cat-with-smiling-eyes' },
  { slug1: 'smiling-cat-with-heart-eyes', slug2: 'kissing-cat' },
  { slug1: 'cat-with-tears-of-joy', slug2: 'grinning-cat' },
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
