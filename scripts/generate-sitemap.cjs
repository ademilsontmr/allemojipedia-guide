// Script to generate sitemap.xml with all emojis
// Run with: node scripts/generate-sitemap.js

const fs = require('fs');
const path = require('path');

// Read the emojis.ts file
const emojisFile = fs.readFileSync(path.join(__dirname, '../src/data/emojis.ts'), 'utf8');

// Extract all slugs using regex
const slugMatches = emojisFile.matchAll(/slug:\s*["']([^"']+)["']/g);
const emojiSlugs = [...slugMatches].map(match => match[1]);

// Read blogPosts.ts
const blogFile = fs.readFileSync(path.join(__dirname, '../src/data/blogPosts.ts'), 'utf8');
const blogSlugs = [...blogFile.matchAll(/slug:\s*["']([^"']+)["']/g)].map(match => match[1]);

const BASE_URL = 'https://allemojipedia.com';

const urls = [];

// Main pages
urls.push({ loc: `${BASE_URL}/`, priority: '1.0' });
urls.push({ loc: `${BASE_URL}/categories`, priority: '0.9' });
urls.push({ loc: `${BASE_URL}/people`, priority: '0.9' });
urls.push({ loc: `${BASE_URL}/blog`, priority: '0.9' });
urls.push({ loc: `${BASE_URL}/sitemap`, priority: '0.5' });

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
  urls.push({ loc: `${BASE_URL}/category/${cat}`, priority: '0.8' });
});

// People subcategory pages
const peopleSubcategories = ['gestures', 'emotions', 'professions', 'family'];
peopleSubcategories.forEach(sub => {
  urls.push({ loc: `${BASE_URL}/people/${sub}`, priority: '0.7' });
});

// Blog posts
blogSlugs.forEach(slug => {
  urls.push({ loc: `${BASE_URL}/blog/${slug}`, priority: '0.7' });
});

// All emoji pages
emojiSlugs.forEach(slug => {
  urls.push({ loc: `${BASE_URL}/emoji/${slug}`, priority: '0.6' });
});

// Generate XML
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url><loc>${url.loc}</loc><priority>${url.priority}</priority></url>`).join('\n')}
</urlset>`;

// Write to public/sitemap.xml
fs.writeFileSync(path.join(__dirname, '../public/sitemap.xml'), xml);

console.log(`Sitemap generated with ${urls.length} URLs`);
console.log(`- ${emojiSlugs.length} emojis`);
console.log(`- ${blogSlugs.length} blog posts`);
console.log(`- ${categories.length} categories`);
console.log(`- ${peopleSubcategories.length} people subcategories`);
