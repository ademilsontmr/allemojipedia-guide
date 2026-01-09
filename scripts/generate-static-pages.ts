import fs from 'fs';
import path from 'path';
import { emojis } from '../src/data/emojis';
import { categories, peopleSubcategories } from '../src/data/categories';

const BASE_URL = 'https://allemojipedia.com';
const DIST_DIR = 'dist';

// Read the base index.html template
const getBaseTemplate = () => {
  return fs.readFileSync(path.join(DIST_DIR, 'index.html'), 'utf-8');
};

// Generate meta tags for a page
const generateMetaTags = (
  title: string,
  description: string,
  url: string,
  keywords?: string
) => {
  return `
    <title>${title}</title>
    <meta name="description" content="${description}" />
    ${keywords ? `<meta name="keywords" content="${keywords}" />` : ''}
    <link rel="canonical" href="${url}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Allemojipedia" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
  `;
};

// Replace meta tags in template
const injectMetaTags = (template: string, metaTags: string) => {
  // Remove existing meta tags that will be replaced
  let html = template
    .replace(/<title>.*?<\/title>/g, '')
    .replace(/<meta name="description"[^>]*>/g, '')
    .replace(/<meta name="keywords"[^>]*>/g, '')
    .replace(/<link rel="canonical"[^>]*>/g, '')
    .replace(/<meta property="og:[^>]*>/g, '')
    .replace(/<meta name="twitter:[^>]*>/g, '');
  
  // Inject new meta tags after charset
  html = html.replace(
    '<meta charset="UTF-8" />',
    `<meta charset="UTF-8" />${metaTags}`
  );
  
  return html;
};

// Ensure directory exists
const ensureDir = (dir: string) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

// Generate static pages
const generateStaticPages = () => {
  console.log('🚀 Starting static page generation...');
  
  const template = getBaseTemplate();
  let count = 0;

  // Generate emoji pages
  console.log('📝 Generating emoji pages...');
  emojis.forEach((emoji) => {
    const title = `${emoji.unicode} ${emoji.name} Emoji: Meaning and How to Use | Allemojipedia`;
    const description = `${emoji.unicode} ${emoji.name}: ${emoji.shortMeaning} Copy and paste ${emoji.unicode} for texting, social media, and work.`;
    const url = `${BASE_URL}/emoji/${emoji.slug}`;
    const keywords = `${emoji.name} emoji, ${emoji.unicode} meaning, ${emoji.keywords.slice(0, 5).join(', ')}, copy ${emoji.name} emoji`;
    
    const metaTags = generateMetaTags(title, description, url, keywords);
    const html = injectMetaTags(template, metaTags);
    
    const dir = path.join(DIST_DIR, 'emoji', emoji.slug);
    ensureDir(dir);
    fs.writeFileSync(path.join(dir, 'index.html'), html);
    count++;
  });

  // Generate category pages
  console.log('📁 Generating category pages...');
  categories.forEach((category) => {
    const categoryEmojis = emojis.filter(e => e.categorySlug === category.slug);
    const title = `${category.name} Emojis — Copy & Paste All ${categoryEmojis.length} | Allemojipedia`;
    const description = `${category.description} Copy and paste ${categoryEmojis.length} ${category.name.toLowerCase()} emojis instantly.`;
    const url = `${BASE_URL}/category/${category.slug}`;
    const keywords = `${category.name.toLowerCase()} emojis, ${category.name.toLowerCase()} emoji list, copy ${category.name.toLowerCase()} emojis`;
    
    const metaTags = generateMetaTags(title, description, url, keywords);
    const html = injectMetaTags(template, metaTags);
    
    const dir = path.join(DIST_DIR, 'category', category.slug);
    ensureDir(dir);
    fs.writeFileSync(path.join(dir, 'index.html'), html);
    count++;
  });

  // Generate people subcategory pages
  console.log('👥 Generating people subcategory pages...');
  peopleSubcategories.forEach((sub) => {
    const title = `${sub.name} Emojis — Copy & Paste | Allemojipedia`;
    const description = `${sub.description} Copy and paste ${sub.name.toLowerCase()} emojis instantly.`;
    const url = `${BASE_URL}/people/${sub.slug}`;
    const keywords = `${sub.name.toLowerCase()} emojis, ${sub.name.toLowerCase()} emoji list, copy ${sub.name.toLowerCase()} emojis`;
    
    const metaTags = generateMetaTags(title, description, url, keywords);
    const html = injectMetaTags(template, metaTags);
    
    const dir = path.join(DIST_DIR, 'people', sub.slug);
    ensureDir(dir);
    fs.writeFileSync(path.join(dir, 'index.html'), html);
    count++;
  });

  // Generate main pages
  console.log('🏠 Generating main pages...');
  
  // Categories page
  const categoriesMetaTags = generateMetaTags(
    'Emoji Categories | Allemojipedia',
    'Browse all emoji categories including smileys, people, animals, food, travel, activities, objects, symbols, and flags. Find the perfect emoji.',
    `${BASE_URL}/categories`,
    'emoji categories, emoji groups, smileys emojis, people emojis, animals emojis'
  );
  ensureDir(path.join(DIST_DIR, 'categories'));
  fs.writeFileSync(path.join(DIST_DIR, 'categories', 'index.html'), injectMetaTags(template, categoriesMetaTags));
  count++;

  // People page
  const peopleMetaTags = generateMetaTags(
    'People Emojis and Their Meanings | Allemojipedia',
    'Explore people emojis including gestures, emotions, professions, and family. Learn about skin tone variations and gender representations.',
    `${BASE_URL}/people`,
    'people emojis, human emojis, gesture emojis, profession emojis, family emojis'
  );
  ensureDir(path.join(DIST_DIR, 'people'));
  fs.writeFileSync(path.join(DIST_DIR, 'people', 'index.html'), injectMetaTags(template, peopleMetaTags));
  count++;

  // Blog page
  const blogMetaTags = generateMetaTags(
    'Emoji Blog — Tips, Guides & News | Allemojipedia',
    'Read the latest emoji tips, guides, and news. Learn how to use emojis effectively in your communication.',
    `${BASE_URL}/blog`,
    'emoji blog, emoji tips, emoji guides, emoji news'
  );
  ensureDir(path.join(DIST_DIR, 'blog'));
  fs.writeFileSync(path.join(DIST_DIR, 'blog', 'index.html'), injectMetaTags(template, blogMetaTags));
  count++;

  // Sitemap page
  const sitemapMetaTags = generateMetaTags(
    'Sitemap | Allemojipedia',
    'Browse all pages on Allemojipedia. Find emojis by category, meaning, or name.',
    `${BASE_URL}/sitemap`,
    'allemojipedia sitemap, emoji sitemap'
  );
  ensureDir(path.join(DIST_DIR, 'sitemap'));
  fs.writeFileSync(path.join(DIST_DIR, 'sitemap', 'index.html'), injectMetaTags(template, sitemapMetaTags));
  count++;

  // About page
  const aboutMetaTags = generateMetaTags(
    'About Us | Allemojipedia',
    'Learn about Allemojipedia, your complete emoji encyclopedia with meanings, examples, and copy-paste functionality.',
    `${BASE_URL}/about`,
    'about allemojipedia, emoji encyclopedia'
  );
  ensureDir(path.join(DIST_DIR, 'about'));
  fs.writeFileSync(path.join(DIST_DIR, 'about', 'index.html'), injectMetaTags(template, aboutMetaTags));
  count++;

  // Privacy page
  const privacyMetaTags = generateMetaTags(
    'Privacy Policy | Allemojipedia',
    'Read our privacy policy to understand how we collect, use, and protect your information.',
    `${BASE_URL}/privacy`,
    'privacy policy, allemojipedia privacy'
  );
  ensureDir(path.join(DIST_DIR, 'privacy'));
  fs.writeFileSync(path.join(DIST_DIR, 'privacy', 'index.html'), injectMetaTags(template, privacyMetaTags));
  count++;

  // Contact page
  const contactMetaTags = generateMetaTags(
    'Contact Us | Allemojipedia',
    'Get in touch with the Allemojipedia team. We\'d love to hear from you!',
    `${BASE_URL}/contact`,
    'contact allemojipedia, emoji help'
  );
  ensureDir(path.join(DIST_DIR, 'contact'));
  fs.writeFileSync(path.join(DIST_DIR, 'contact', 'index.html'), injectMetaTags(template, contactMetaTags));
  count++;

  console.log(`✅ Generated ${count} static pages!`);
};

generateStaticPages();
