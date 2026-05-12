import fs from 'fs';
import path from 'path';
import { emojis, type Emoji } from '../src/data/emojis';
import { categories, peopleSubcategories } from '../src/data/categories';
import { blogPosts } from '../src/data/blogPosts';
import { popularComparisons } from '../src/data/emojiComparisons';

const BASE_URL = 'https://allemojipedia.com';
const DIST_DIR = 'dist';
const POSTS_PER_PAGE = 9;

type LinkItem = {
  href: string;
  label: string;
  description?: string;
};

// Read the base index.html template
const getBaseTemplate = () => {
  return fs.readFileSync(path.join(DIST_DIR, 'index.html'), 'utf-8');
};

const canonicalPath = (routePath: string) => {
  if (routePath === '/') return '/';
  return routePath.endsWith('/') ? routePath : `${routePath}/`;
};

const canonicalUrl = (routePath: string) => `${BASE_URL}${canonicalPath(routePath)}`;

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const compactText = (value: string) => value.replace(/\s+/g, ' ').trim();

// Generate meta tags for a page
const generateMetaTags = (
  title: string,
  description: string,
  url: string,
  keywords?: string,
  ogType = 'website',
  robots = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
) => {
  const safeTitle = escapeHtml(title);
  const safeDescription = escapeHtml(compactText(description));
  const safeUrl = escapeHtml(url);
  const safeKeywords = keywords ? escapeHtml(keywords) : '';

  return `
    <title>${safeTitle}</title>
    <meta name="description" content="${safeDescription}" />
    ${safeKeywords ? `<meta name="keywords" content="${safeKeywords}" />` : ''}
    <meta name="robots" content="${escapeHtml(robots)}" />
    <link rel="canonical" href="${safeUrl}" />
    <meta property="og:title" content="${safeTitle}" />
    <meta property="og:description" content="${safeDescription}" />
    <meta property="og:url" content="${safeUrl}" />
    <meta property="og:type" content="${escapeHtml(ogType)}" />
    <meta property="og:site_name" content="Allemojipedia" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="${safeTitle}" />
    <meta name="twitter:description" content="${safeDescription}" />
  `;
};

// Replace meta tags in template
const injectMetaTags = (template: string, metaTags: string) => {
  // Remove existing meta tags that will be replaced
  let html = template
    .replace(/<title>.*?<\/title>/g, '')
    .replace(/<meta name="description"[^>]*>/g, '')
    .replace(/<meta name="keywords"[^>]*>/g, '')
    .replace(/<meta name="robots"[^>]*>/g, '')
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

const injectStaticBody = (template: string, bodyHtml: string) => {
  return template.replace('<div id="root"></div>', `<div id="root">${bodyHtml}</div>`);
};

const renderParagraphs = (text: string, limit = 3) =>
  text
    .split('\n\n')
    .map(compactText)
    .filter(Boolean)
    .slice(0, limit)
    .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
    .join('\n');

const renderLinks = (items: LinkItem[]) => `
  <ul>
    ${items.map((item) => `
      <li>
        <a href="${escapeHtml(item.href)}">${escapeHtml(item.label)}</a>
        ${item.description ? `<p>${escapeHtml(item.description)}</p>` : ''}
      </li>
    `).join('\n')}
  </ul>
`;

const staticShell = (content: string) => `
  <main class="static-seo-fallback" style="max-width: 960px; margin: 0 auto; padding: 32px 20px; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; line-height: 1.6;">
    ${content}
  </main>
`;

const emojiBody = (emoji: Emoji) => staticShell(`
  <article>
    <nav><a href="/">Home</a> / <a href="/category/${escapeHtml(emoji.categorySlug)}/">Category</a></nav>
    <h1>${escapeHtml(`${emoji.unicode} ${emoji.name} Emoji: Meaning and How to Use`)}</h1>
    <p><strong>${escapeHtml(emoji.shortMeaning)}</strong></p>
    ${renderParagraphs(emoji.detailedMeaning)}
    <h2>Common uses</h2>
    <ul>${emoji.usageContexts.map((context) => `<li>${escapeHtml(context)}</li>`).join('')}</ul>
    <h2>Examples</h2>
    <ul>${emoji.examples.slice(0, 3).map((example) => `<li><strong>${escapeHtml(example.context)}:</strong> ${escapeHtml(example.text)}</li>`).join('')}</ul>
  </article>
`);

const categoryBody = (
  category: (typeof categories)[number],
  categoryEmojis: Emoji[]
) => staticShell(`
  <article>
    <nav><a href="/">Home</a> / <a href="/categories/">Categories</a></nav>
    <h1>${escapeHtml(`${category.icon} ${category.name} Emojis`)}</h1>
    <p>${escapeHtml(category.description)}</p>
    <h2>All ${escapeHtml(category.name)} emojis</h2>
    ${renderLinks(categoryEmojis.map((emoji) => ({
      href: `/emoji/${emoji.slug}/`,
      label: `${emoji.unicode} ${emoji.name}`,
      description: emoji.shortMeaning,
    })))}
  </article>
`);

const peopleBody = (
  sub: (typeof peopleSubcategories)[number],
  subEmojis: Emoji[]
) => staticShell(`
  <article>
    <nav><a href="/">Home</a> / <a href="/people/">People</a></nav>
    <h1>${escapeHtml(`${sub.icon} ${sub.name} Emojis`)}</h1>
    <p>${escapeHtml(sub.description)}</p>
    <h2>All ${escapeHtml(sub.name)} emojis</h2>
    ${renderLinks(subEmojis.map((emoji) => ({
      href: `/emoji/${emoji.slug}/`,
      label: `${emoji.unicode} ${emoji.name}`,
      description: emoji.shortMeaning,
    })))}
  </article>
`);

const mainBody = (title: string, description: string, links: LinkItem[]) => staticShell(`
  <article>
    <h1>${escapeHtml(title)}</h1>
    <p>${escapeHtml(description)}</p>
    ${links.length ? renderLinks(links) : ''}
  </article>
`);

const blogPostBody = (post: (typeof blogPosts)[number]) => {
  const blocks = post.content.split('\n\n').map((block) => block.trim()).filter(Boolean);
  const content = blocks.map((block) => {
    if (block.startsWith('## ')) return `<h2>${escapeHtml(block.replace(/^## /, ''))}</h2>`;
    if (block.startsWith('### ')) return `<h3>${escapeHtml(block.replace(/^### /, ''))}</h3>`;
    if (block.startsWith('- ')) {
      const items = block
        .split('\n')
        .filter((line) => line.startsWith('- '))
        .map((line) => `<li>${escapeHtml(line.replace(/^- /, ''))}</li>`)
        .join('');
      return `<ul>${items}</ul>`;
    }

    return `<p>${escapeHtml(compactText(block))}</p>`;
  }).join('\n');

  return staticShell(`
    <article>
      <nav><a href="/">Home</a> / <a href="/blog/">Blog</a></nav>
      <h1>${escapeHtml(post.title)}</h1>
      <p><strong>${escapeHtml(post.excerpt)}</strong></p>
      <p>${escapeHtml(post.date)} • ${escapeHtml(post.readTime)}</p>
      ${content}
    </article>
  `);
};

const comparisonBody = (left: Emoji, right: Emoji) => staticShell(`
  <article>
    <nav><a href="/">Home</a> / <a href="/emoji-comparisons/">Emoji Comparisons</a></nav>
    <h1>${escapeHtml(`${left.unicode} ${left.name} vs ${right.unicode} ${right.name}`)}</h1>
    <p>Compare the meaning, tone, and best use cases for ${escapeHtml(left.name)} and ${escapeHtml(right.name)}.</p>
    <h2>${escapeHtml(`${left.unicode} ${left.name}`)}</h2>
    <p>${escapeHtml(left.shortMeaning)}</p>
    ${renderParagraphs(left.detailedMeaning, 1)}
    <h2>${escapeHtml(`${right.unicode} ${right.name}`)}</h2>
    <p>${escapeHtml(right.shortMeaning)}</p>
    ${renderParagraphs(right.detailedMeaning, 1)}
  </article>
`);

// Ensure directory exists
const ensureDir = (dir: string) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

const writeStaticPage = (
  template: string,
  routePath: string,
  title: string,
  description: string,
  keywords: string | undefined,
  bodyHtml: string,
  ogType = 'website',
  robots?: string
) => {
  const route = canonicalPath(routePath);
  const metaTags = generateMetaTags(title, description, canonicalUrl(route), keywords, ogType, robots);
  const html = injectStaticBody(injectMetaTags(template, metaTags), bodyHtml);
  const dir = route === '/' ? DIST_DIR : path.join(DIST_DIR, route.replace(/^\/|\/$/g, ''));

  ensureDir(dir);
  fs.writeFileSync(path.join(dir, 'index.html'), html);
};

const writeNotFoundPage = (template: string) => {
  const metaTags = generateMetaTags(
    'Page Not Found | Allemojipedia',
    'The requested page could not be found on Allemojipedia.',
    `${BASE_URL}/404/`,
    undefined,
    'website',
    'noindex, follow'
  );
  const html = injectStaticBody(
    injectMetaTags(template, metaTags),
    mainBody(
      'Page Not Found',
      'The requested page could not be found. Browse emoji categories or return to the homepage.',
      [
        { href: '/', label: 'Home' },
        { href: '/categories/', label: 'Emoji Categories' },
        { href: '/blog/', label: 'Emoji Blog' },
      ]
    )
  );

  fs.writeFileSync(path.join(DIST_DIR, '404.html'), html);
};

// Generate static pages
const generateStaticPages = () => {
  console.log('Starting static page generation...');
  
  const template = getBaseTemplate();
  const emojiBySlug = new Map(emojis.map((emoji) => [emoji.slug, emoji]));
  const sortedBlogPosts = [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  let count = 0;

  // Home page
  writeStaticPage(
    template,
    '/',
    'Allemojipedia — Emoji Meanings, Names & Copy',
    'Discover what emojis mean with Allemojipedia. Find emoji meanings, copy and paste emojis, and learn how to use them.',
    'emoji meanings, emoji dictionary, emoji encyclopedia, copy paste emoji, emoji guide',
    mainBody(
      'Allemojipedia — Emoji Meanings, Names & Copy',
      'Your complete emoji encyclopedia with meanings, examples, copy-paste pages, categories, and emoji usage guides.',
      [
        { href: '/categories/', label: 'Browse emoji categories', description: 'Find emojis by theme and category.' },
        { href: '/blog/', label: 'Read emoji guides', description: 'Learn emoji meanings, etiquette, and trends.' },
        { href: '/emoji/face-with-tears-of-joy/', label: '😂 Face With Tears of Joy', description: 'One of the most popular emoji meanings.' },
        { href: '/emoji/red-heart/', label: '❤️ Red Heart', description: 'Meaning and usage examples for the red heart emoji.' },
      ]
    )
  );
  count++;

  // Generate emoji pages
  console.log('Generating emoji pages...');
  emojis.forEach((emoji) => {
    const title = `${emoji.unicode} ${emoji.name} Emoji: Meaning and How to Use | Allemojipedia`;
    const description = `${emoji.unicode} ${emoji.name}: ${emoji.shortMeaning} Copy and paste ${emoji.unicode} for texting, social media, and work.`;
    const keywords = `${emoji.name} emoji, ${emoji.unicode} meaning, ${emoji.keywords.slice(0, 5).join(', ')}, copy ${emoji.name} emoji`;

    writeStaticPage(template, `/emoji/${emoji.slug}/`, title, description, keywords, emojiBody(emoji), 'article');
    count++;
  });

  // Generate category pages
  console.log('Generating category pages...');
  categories.forEach((category) => {
    const categoryEmojis = emojis.filter(e => e.categorySlug === category.slug);
    const title = `${category.name} Emojis — Copy & Paste All ${categoryEmojis.length} | Allemojipedia`;
    const description = `${category.description} Copy and paste ${categoryEmojis.length} ${category.name.toLowerCase()} emojis instantly.`;
    const keywords = `${category.name.toLowerCase()} emojis, ${category.name.toLowerCase()} emoji list, copy ${category.name.toLowerCase()} emojis`;

    writeStaticPage(template, `/category/${category.slug}/`, title, description, keywords, categoryBody(category, categoryEmojis));
    count++;
  });

  // Generate people subcategory pages
  console.log('Generating people subcategory pages...');
  peopleSubcategories.forEach((sub) => {
    const subEmojis = emojis.filter((emoji) => sub.subgroups.includes(emoji.subgroup));
    const title = `${sub.name} Emojis — Copy & Paste | Allemojipedia`;
    const description = `${sub.description} Copy and paste ${sub.name.toLowerCase()} emojis instantly.`;
    const keywords = `${sub.name.toLowerCase()} emojis, ${sub.name.toLowerCase()} emoji list, copy ${sub.name.toLowerCase()} emojis`;

    writeStaticPage(template, `/people/${sub.slug}/`, title, description, keywords, peopleBody(sub, subEmojis));
    count++;
  });

  // Generate blog post pages
  console.log('Generating blog post pages...');
  sortedBlogPosts.forEach((post) => {
    writeStaticPage(
      template,
      `/blog/${post.slug}/`,
      `${post.title} | Allemojipedia`,
      post.excerpt,
      post.keywords,
      blogPostBody(post),
      'article'
    );
    count++;
  });

  // Generate blog pagination pages
  const totalBlogPages = Math.ceil(sortedBlogPosts.length / POSTS_PER_PAGE);
  for (let page = 2; page <= totalBlogPages; page++) {
    const pageNumber = page.toString().padStart(2, '0');
    const currentPosts = sortedBlogPosts.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

    writeStaticPage(
      template,
      `/blog/page/${pageNumber}/`,
      `Emoji Blog - Page ${page} | Allemojipedia`,
      `Browse emoji articles, guides, and tips on page ${page} of the Allemojipedia blog.`,
      'emoji blog, emoji guides, emoji meanings',
      mainBody(
        `Emoji Blog - Page ${page}`,
        'More emoji guides, explainers, and communication tips from Allemojipedia.',
        currentPosts.map((post) => ({
          href: `/blog/${post.slug}/`,
          label: post.title,
          description: post.excerpt,
        }))
      )
    );
    count++;
  }

  // Generate comparison pages
  console.log('Generating emoji comparison pages...');
  popularComparisons.forEach(({ slug1, slug2 }) => {
    const left = emojiBySlug.get(slug1);
    const right = emojiBySlug.get(slug2);
    if (!left || !right) return;

    const title = `${left.unicode} ${left.name} vs ${right.unicode} ${right.name} | Allemojipedia`;
    const description = `Compare ${left.name} and ${right.name}: meanings, tone, examples, and when to use each emoji.`;

    writeStaticPage(
      template,
      `/emoji/${slug1}-vs-${slug2}/`,
      title,
      description,
      `${left.name} vs ${right.name}, ${left.unicode} vs ${right.unicode}, emoji comparison`,
      comparisonBody(left, right),
      'article'
    );
    count++;
  });

  // Generate main pages
  console.log('Generating main pages...');
  
  // Categories page
  writeStaticPage(
    template,
    '/categories/',
    'Emoji Categories | Allemojipedia',
    'Browse all emoji categories including smileys, people, animals, food, travel, activities, objects, symbols, and flags. Find the perfect emoji.',
    'emoji categories, emoji groups, smileys emojis, people emojis, animals emojis',
    mainBody(
      'Emoji Categories',
      'Browse all emoji categories and find the right emoji by theme.',
      categories.map((category) => ({
        href: `/category/${category.slug}/`,
        label: `${category.icon} ${category.name}`,
        description: category.description,
      }))
    )
  );
  count++;

  // People page
  writeStaticPage(
    template,
    '/people/',
    'People Emojis and Their Meanings | Allemojipedia',
    'Explore people emojis including gestures, emotions, professions, and family. Learn about skin tone variations and gender representations.',
    'people emojis, human emojis, gesture emojis, profession emojis, family emojis',
    mainBody(
      'People Emojis and Their Meanings',
      'Explore gesture, profession, emotion, and family emojis.',
      peopleSubcategories.map((sub) => ({
        href: `/people/${sub.slug}/`,
        label: `${sub.icon} ${sub.name}`,
        description: sub.description,
      }))
    )
  );
  count++;

  // Blog page
  writeStaticPage(
    template,
    '/blog/',
    'Emoji Blog — Tips, Guides & News | Allemojipedia',
    'Read the latest emoji tips, guides, and news. Learn how to use emojis effectively in your communication.',
    'emoji blog, emoji tips, emoji guides, emoji news',
    mainBody(
      'Emoji Blog',
      'Read emoji tips, guides, and news from Allemojipedia.',
      sortedBlogPosts.slice(0, POSTS_PER_PAGE).map((post) => ({
        href: `/blog/${post.slug}/`,
        label: post.title,
        description: post.excerpt,
      }))
    )
  );
  count++;

  // Emoji comparisons page
  writeStaticPage(
    template,
    '/emoji-comparisons/',
    'Emoji Comparisons | Allemojipedia',
    'Compare similar emojis and learn which one fits your message best.',
    'emoji comparisons, emoji vs emoji, emoji meanings',
    mainBody(
      'Emoji Comparisons',
      'Compare similar emojis by meaning, tone, and use case.',
      popularComparisons.slice(0, 80).flatMap(({ slug1, slug2 }) => {
        const left = emojiBySlug.get(slug1);
        const right = emojiBySlug.get(slug2);
        if (!left || !right) return [];

        return [{
          href: `/emoji/${slug1}-vs-${slug2}/`,
          label: `${left.unicode} ${left.name} vs ${right.unicode} ${right.name}`,
          description: `Compare ${left.name} and ${right.name}.`,
        }];
      })
    )
  );
  count++;

  // Flag quiz page
  writeStaticPage(
    template,
    '/flag-quiz/',
    'Flag Emoji Quiz | Allemojipedia',
    'Test your knowledge of country flag emojis with the Allemojipedia flag quiz.',
    'flag emoji quiz, country flags quiz, flag emojis',
    mainBody(
      'Flag Emoji Quiz',
      'Test your knowledge of country flag emojis and learn more about flags from around the world.',
      [
        { href: '/category/flags/', label: 'Browse all flag emojis' },
        { href: '/blog/flag-emojis-complete-guide/', label: 'Read the flag emoji guide' },
      ]
    )
  );
  count++;

  // Sitemap page
  writeStaticPage(
    template,
    '/sitemap/',
    'Sitemap | Allemojipedia',
    'Browse all pages on Allemojipedia. Find emojis by category, meaning, or name.',
    'allemojipedia sitemap, emoji sitemap',
    mainBody(
      'Sitemap',
      'Browse the main sections of Allemojipedia.',
      [
        { href: '/', label: 'Home' },
        { href: '/categories/', label: 'Emoji Categories' },
        { href: '/people/', label: 'People Emojis' },
        { href: '/blog/', label: 'Emoji Blog' },
        { href: '/emoji-comparisons/', label: 'Emoji Comparisons' },
      ]
    )
  );
  count++;

  // About page
  writeStaticPage(
    template,
    '/about/',
    'About Us | Allemojipedia',
    'Learn about Allemojipedia, your complete emoji encyclopedia with meanings, examples, and copy-paste functionality.',
    'about allemojipedia, emoji encyclopedia',
    mainBody(
      'About Allemojipedia',
      'Allemojipedia is an emoji encyclopedia for meanings, examples, Unicode information, and copy-paste emoji pages.',
      []
    )
  );
  count++;

  // Privacy page
  writeStaticPage(
    template,
    '/privacy/',
    'Privacy Policy | Allemojipedia',
    'Read our privacy policy to understand how we collect, use, and protect your information.',
    'privacy policy, allemojipedia privacy',
    mainBody(
      'Privacy Policy',
      'Read how Allemojipedia handles privacy, analytics, ads, and user information.',
      []
    )
  );
  count++;

  // Contact page
  writeStaticPage(
    template,
    '/contact/',
    'Contact Us | Allemojipedia',
    'Get in touch with the Allemojipedia team. We\'d love to hear from you!',
    'contact allemojipedia, emoji help',
    mainBody(
      'Contact Allemojipedia',
      'Get in touch with the Allemojipedia team for feedback, questions, and support.',
      []
    )
  );
  count++;

  writeNotFoundPage(template);

  console.log(`Generated ${count} static pages!`);
};

generateStaticPages();
