// Legacy CommonJS sitemap generator kept for manual use.
// The production build uses scripts/build-sitemap.ts.

const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://allemojipedia.com';
const POSTS_PER_PAGE = 9;

const readFile = (relativePath) => fs.readFileSync(path.join(__dirname, '..', relativePath), 'utf8');
const extractSlugs = (content) => [...content.matchAll(/slug:\s*["']([^"']+)["']/g)].map(match => match[1]);

const emojiSlugs = new Set(extractSlugs(readFile('src/data/emojis.ts')));
const emojiDataDir = path.join(__dirname, '../src/data/emojis');

if (fs.existsSync(emojiDataDir)) {
  fs.readdirSync(emojiDataDir)
    .filter(file => file.endsWith('.ts'))
    .forEach(file => {
      extractSlugs(fs.readFileSync(path.join(emojiDataDir, file), 'utf8')).forEach(slug => emojiSlugs.add(slug));
    });
}

const blogFile = readFile('src/data/blogPosts.ts');
const blogSlugs = extractSlugs(blogFile);
const comparisonFile = readFile('src/data/emojiComparisons.ts');
const comparisonPairs = [...comparisonFile.matchAll(/slug1:\s*["']([^"']+)["'],\s*slug2:\s*["']([^"']+)["']/g)]
  .map(([, slug1, slug2]) => ({ slug1, slug2 }));

const urls = [];

// Main pages
urls.push({ loc: `${BASE_URL}/`, priority: '1.0' });
urls.push({ loc: `${BASE_URL}/categories/`, priority: '0.9' });
urls.push({ loc: `${BASE_URL}/people/`, priority: '0.9' });
urls.push({ loc: `${BASE_URL}/blog/`, priority: '0.9' });
urls.push({ loc: `${BASE_URL}/emoji-comparisons/`, priority: '0.9' });
urls.push({ loc: `${BASE_URL}/flag-quiz/`, priority: '0.6' });
urls.push({ loc: `${BASE_URL}/sitemap/`, priority: '0.5' });

const totalBlogPages = Math.ceil(blogSlugs.length / POSTS_PER_PAGE);
for (let i = 2; i <= totalBlogPages; i++) {
  const pageNum = i.toString().padStart(2, '0');
  urls.push({ loc: `${BASE_URL}/blog/page/${pageNum}/`, priority: '0.7' });
}

// Category pages
const categories = [
  'smileys-and-emotion',
  'people-and-body',
  'animals-and-nature',
  'food-and-drink',
  'travel-and-places',
  'activities',
  'objects',
  'symbols',
  'flags'
];

categories.forEach(cat => {
  urls.push({ loc: `${BASE_URL}/category/${cat}/`, priority: '0.8' });
});

// People subcategory pages
const peopleSubcategories = ['gestures', 'emotions', 'professions', 'family'];
peopleSubcategories.forEach(sub => {
  urls.push({ loc: `${BASE_URL}/people/${sub}/`, priority: '0.7' });
});

// Blog posts
blogSlugs.forEach(slug => {
  urls.push({ loc: `${BASE_URL}/blog/${slug}/`, priority: '0.7' });
});

// Emoji comparison pages
comparisonPairs.forEach(({ slug1, slug2 }) => {
  urls.push({ loc: `${BASE_URL}/emoji/${slug1}-vs-${slug2}/`, priority: '0.8' });
});

// All emoji pages
emojiSlugs.forEach((slug) => {
  urls.push({ loc: `${BASE_URL}/emoji/${slug}/`, priority: '0.8' });
});

// Generate XML
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url><loc>${url.loc}</loc><priority>${url.priority}</priority></url>`).join('\n')}
</urlset>`;

// Write to public and dist when available
[
  path.join(__dirname, '../public/sitemap.xml'),
  path.join(__dirname, '../dist/sitemap.xml'),
].forEach(outputPath => {
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, xml);
});

console.log(`Sitemap generated with ${urls.length} URLs`);
console.log(`- ${emojiSlugs.size} emojis`);
console.log(`- ${blogSlugs.length} blog posts`);
console.log(`- ${comparisonPairs.length} emoji comparisons`);
console.log(`- ${categories.length} categories`);
console.log(`- ${peopleSubcategories.length} people subcategories`);
