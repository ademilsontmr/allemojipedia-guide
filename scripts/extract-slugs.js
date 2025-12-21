#!/usr/bin/env node
// Script to extract all emoji slugs and generate sitemap
// Run: node scripts/extract-slugs.js

const fs = require('fs');
const path = require('path');

// Read emojis.ts
const emojisPath = path.join(__dirname, '../src/data/emojis.ts');
const emojisContent = fs.readFileSync(emojisPath, 'utf8');

// Extract emoji slugs
const emojiSlugRegex = /^\s*slug:\s*["']([^"']+)["']/gm;
const emojiSlugs = [];
let match;
while ((match = emojiSlugRegex.exec(emojisContent)) !== null) {
  emojiSlugs.push(match[1]);
}

// Read blogPosts.ts
const blogPath = path.join(__dirname, '../src/data/blogPosts.ts');
const blogContent = fs.readFileSync(blogPath, 'utf8');

// Extract blog slugs
const blogSlugRegex = /^\s*slug:\s*["']([^"']+)["']/gm;
const blogSlugs = [];
while ((match = blogSlugRegex.exec(blogContent)) !== null) {
  blogSlugs.push(match[1]);
}

console.log(`Found ${emojiSlugs.length} emoji slugs`);
console.log(`Found ${blogSlugs.length} blog post slugs`);

// Generate sitemap XML
const BASE_URL = 'https://allemojipedia.com';
const urls = [];

// Main pages
urls.push({ loc: `${BASE_URL}/`, priority: '1.0' });
urls.push({ loc: `${BASE_URL}/categories`, priority: '0.9' });
urls.push({ loc: `${BASE_URL}/people`, priority: '0.9' });
urls.push({ loc: `${BASE_URL}/blog`, priority: '0.9' });
urls.push({ loc: `${BASE_URL}/sitemap`, priority: '0.5' });

// Categories
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

// People subcategories
const peopleSubcats = ['gestures', 'emotions', 'professions', 'family'];
peopleSubcats.forEach(sub => {
  urls.push({ loc: `${BASE_URL}/people/${sub}`, priority: '0.7' });
});

// Blog posts
blogSlugs.forEach(slug => {
  urls.push({ loc: `${BASE_URL}/blog/${slug}`, priority: '0.7' });
});

// All emojis
emojiSlugs.forEach(slug => {
  urls.push({ loc: `${BASE_URL}/emoji/${slug}`, priority: '0.6' });
});

// Generate XML
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url><loc>${url.loc}</loc><priority>${url.priority}</priority></url>`).join('\n')}
</urlset>`;

// Write to public/sitemap.xml
const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
fs.writeFileSync(sitemapPath, xml);

console.log(`\nSitemap generated with ${urls.length} total URLs:`);
console.log(`- 5 main pages`);
console.log(`- ${categories.length} categories`);
console.log(`- ${peopleSubcats.length} people subcategories`);
console.log(`- ${blogSlugs.length} blog posts`);
console.log(`- ${emojiSlugs.length} emojis`);
console.log(`\nSaved to: ${sitemapPath}`);
