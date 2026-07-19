import fs from 'fs';
import path from 'path';
import { emojis, type Emoji } from '../src/data/emojis';
import { categories, peopleSubcategories } from '../src/data/categories';
import { getPeopleSubcategoryEditorial } from '../src/data/peopleSubcategoryEditorial';
import { blogPosts } from '../src/data/blogPosts';
import { popularComparisons } from '../src/data/emojiComparisons';
import { emojiIntentClusters, type EmojiIntentCluster } from '../src/data/emojiIntentClusters';
import { buildEmojiStructuredData } from '../src/utils/emojiPageSchema';
import { buildEmojiStaticArticleHtml, getDeterministicCategoryEmojis } from '../src/utils/emojiPageStaticHtml';
import { getBlogPostSeoMeta, getCategorySeoMeta, getClusterSeoMeta, getComparisonSeoMeta, getContextSeoMeta, getEmojiSeoMeta, getMainPageSeo, getPeopleSubSeoMeta } from '../src/data/seoMeta';
import { parseMarkdownTable, renderMarkdownTableHtml } from '../src/utils/blogMarkdownTables';
import { editorialMeta, getEmojiEditorialSources } from '../src/data/editorialMeta';
import { emojiContextPages, type EmojiContextPage } from '../src/data/emojiContextPages';
import {
  emojiContextHubMeta,
  emojiContextHubPath,
  getContextHubPageCount,
  getContextHubSections,
} from '../src/data/emojiContextHub';
import { buildContextPageFaqs, buildContextPageStructuredData } from '../src/utils/emojiContextFaqSchema';
import { renderEditorialSourcesHtml } from '../src/utils/editorialSourcesHtml';
import { emojiPlatforms, platformAliasRoutes, getPlatformAliasH1, getPlatformVariantSeo, type EmojiPlatform } from '../src/data/emojiPlatforms';
import type { EmojiCombo } from '../src/data/emojiCombos';
import { emojiCombos } from '../src/data/emojiCombos';
import { emojiKitchenGuide, emojiKitchenCombos } from '../src/data/emojiKitchen';
import { getEmojiRobots, INDEX_FOLLOW_ROBOTS } from '../src/utils/seoPolicy';

const BASE_URL = 'https://allemojipedia.com';
const DIST_DIR = 'dist';
const POSTS_PER_PAGE = 9;

type LinkItem = {
  href: string;
  label: string;
  description?: string;
};

type StructuredData = Record<string, unknown>;

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
    <meta name="author" content="${escapeHtml(editorialMeta.author)}" />
    <meta name="publisher" content="${escapeHtml(editorialMeta.publisher)}" />
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
    .replace(/<meta name="author"[^>]*>/g, '')
    .replace(/<meta name="publisher"[^>]*>/g, '')
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
  const withContent = template.replace(
    /<div id="root">[\s\S]*?<\/div>/,
    `<div id="root">${bodyHtml}</div>`
  );
  if (withContent !== template) return withContent;
  return template.replace('<div id="root"></div>', `<div id="root">${bodyHtml}</div>`);
};

const renderStructuredData = (items: StructuredData[]) =>
  items
    .map((item) => {
      const json = JSON.stringify(item).replace(/</g, '\\u003c');
      return `<script type="application/ld+json">${json}</script>`;
    })
    .join('\n');

const injectStructuredData = (template: string, items: StructuredData[] = []) => {
  if (!items.length) return template;

  return template.replace('</head>', `${renderStructuredData(items)}\n</head>`);
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

const renderInlineMarkdownHtml = (value: string) => {
  const escaped = escapeHtml(compactText(value));

  return escaped
    .replace(/\[([^\]]+)\]\((\/[^)]+)\)/g, '<a href="$2">$1</a>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
};

const staticShell = (content: string) => `
  <header style="max-width: 960px; margin: 0 auto; padding: 20px 20px 0; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;">
    <p><a href="/"><strong>Allemojipedia</strong></a> — emoji meanings, copy &amp; paste, and usage guides</p>
    <nav aria-label="Site">
      <a href="/categories/">Categories</a> ·
      <a href="/emoji-meanings/">Emoji Meanings</a> ·
      <a href="/emoji-comparisons/">Comparisons</a> ·
      <a href="/blog/">Blog</a>
    </nav>
  </header>
  <main class="static-seo-fallback" style="max-width: 960px; margin: 0 auto; padding: 32px 20px; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; line-height: 1.6;">
    ${content}
  </main>
  <footer style="max-width: 960px; margin: 0 auto; padding: 0 20px 32px; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; color: #555;">
    <p>© ${new Date().getFullYear()} Allemojipedia · <a href="/about/">About</a> · <a href="/sitemap/">Sitemap</a></p>
  </footer>
`;

const emojiBody = (emoji: Emoji, emojiBySlug: Map<string, Emoji>, allEmojis: Emoji[]) => {
  const relatedEmojis = emoji.relatedEmojis
    .map((slug) => emojiBySlug.get(slug))
    .filter((item): item is Emoji => Boolean(item))
    .slice(0, 6);

  return staticShell(
    buildEmojiStaticArticleHtml({
      emoji,
      relatedEmojis,
      categoryEmojis: getDeterministicCategoryEmojis(emoji, allEmojis),
      getEmojiBySlug: (slug) => emojiBySlug.get(slug),
    })
  );
};

const emojiContextPageBody = (emoji: Emoji, page: EmojiContextPage) => {
  const faqs = buildContextPageFaqs(emoji, page);

  return staticShell(`
  <article>
    <nav><a href="/">Home</a> / <a href="${escapeHtml(emojiContextHubPath)}">Emoji Meanings in Texting</a> / <a href="/emoji/${escapeHtml(emoji.slug)}/">${escapeHtml(`${emoji.unicode} ${emoji.name}`)}</a></nav>
    <p>Reviewed by ${escapeHtml(editorialMeta.teamName)} • Last updated ${escapeHtml(editorialMeta.lastUpdated)}</p>
    <h1>${escapeHtml(`${emoji.unicode} ${page.title}`)}</h1>
    <p>${escapeHtml(page.description)}</p>
    <h2>Quick answer</h2>
    <p>${escapeHtml(page.answer)}</p>
    <h2>Signs this is the intended meaning</h2>
    <ul>${page.signals.map((signal) => `<li>${escapeHtml(signal)}</li>`).join('')}</ul>
    <h2>Example messages</h2>
    <ul>${page.examples.map((example) => `<li>${escapeHtml(example)}</li>`).join('')}</ul>
    <h2>Tone warning</h2>
    <p>${escapeHtml(page.caution)}</p>
    <h2>Frequently asked questions</h2>
    ${faqs
      .map(
        (item) => `
      <h3>${escapeHtml(item.question)}</h3>
      <p>${escapeHtml(item.answer)}</p>`
      )
      .join('')}
    ${renderEditorialSourcesHtml(getEmojiEditorialSources(emoji), escapeHtml, {
      intro:
        'This guide combines Unicode emoji naming, CLDR annotations, and common usage patterns from texting and social platforms.',
    })}
  </article>
`);
};

const emojiContextHubBody = (emojiBySlug: Map<string, Emoji>) => {
  const sections = getContextHubSections();

  return staticShell(`
  <article>
    <nav><a href="/">Home</a> / <a href="/emoji-meanings/">Emoji Meanings</a></nav>
    <h1>${escapeHtml(emojiContextHubMeta.title)}</h1>
    <p>${escapeHtml(emojiContextHubMeta.description)}</p>
    <p>${getContextHubPageCount()} guides across the top searched emojis — organized by sender and platform.</p>
    <nav aria-label="Context sections">
      <ul>
        ${sections
          .map(
            (section) =>
              `<li><a href="#${escapeHtml(section.anchor)}">${escapeHtml(section.title)} (${section.pages.length})</a></li>`
          )
          .join('')}
      </ul>
    </nav>
    ${sections
      .map((section) => {
        const links = section.pages
          .map((page) => {
            const emoji = emojiBySlug.get(page.emojiSlug);
            const label = emoji
              ? `${emoji.unicode} ${emoji.name}`
              : page.title.replace(/ Emoji Meaning.*/i, '');
            return `<li><a href="/emoji/${escapeHtml(page.emojiSlug)}/${escapeHtml(page.context)}/">${escapeHtml(label)} — ${escapeHtml(page.shortTitle)}</a></li>`;
          })
          .join('');

        return `
      <section id="${escapeHtml(section.anchor)}">
        <h2>${escapeHtml(section.title)}</h2>
        <p>${escapeHtml(section.description)}</p>
        <ul>${links}</ul>
      </section>`;
      })
      .join('')}
    <p><a href="/emoji-meanings/">Browse all emoji meaning clusters</a></p>
  </article>
`);
};

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
  subEmojis: Emoji[],
  emojiBySlug: Map<string, Emoji>
) => {
  const editorial = getPeopleSubcategoryEditorial(sub.slug);
  const lead = editorial?.lead ?? sub.description;
  const popularEmojis = editorial
    ? editorial.popularEmojiSlugs
        .map((slug) => emojiBySlug.get(slug))
        .filter((emoji): emoji is Emoji => Boolean(emoji))
    : [];

  return staticShell(`
  <article>
    <nav><a href="/">Home</a> / <a href="/people/">People</a></nav>
    <h1>${escapeHtml(`${sub.icon} ${sub.name} Emojis`)}</h1>
    <p>${escapeHtml(lead)}</p>
    ${editorial
      ? editorial.sections
          .map(
            (section) => `
      <h2>${escapeHtml(section.heading)}</h2>
      <p>${escapeHtml(section.body)}</p>`
          )
          .join('')
      : ''}
    ${popularEmojis.length
      ? `<h2>Popular ${escapeHtml(sub.name)} emojis</h2>${renderLinks(
          popularEmojis.map((emoji) => ({
            href: `/emoji/${emoji.slug}/`,
            label: `${emoji.unicode} ${emoji.name}`,
            description: emoji.shortMeaning,
          }))
        )}`
      : ''}
    <h2>All ${escapeHtml(sub.name)} emojis</h2>
    ${renderLinks(subEmojis.map((emoji) => ({
      href: `/emoji/${emoji.slug}/`,
      label: `${emoji.unicode} ${emoji.name}`,
      description: emoji.shortMeaning,
    })))}
    ${editorial?.faqs.length
      ? `<h2>Frequently asked questions</h2>${editorial.faqs
          .map(
            (faq) => `
      <h3>${escapeHtml(faq.question)}</h3>
      <p>${escapeHtml(faq.answer)}</p>`
          )
          .join('')}`
      : ''}
    ${editorial?.relatedLinks.length
      ? `<h2>Related guides</h2>${renderLinks(
          editorial.relatedLinks.map((link) => ({
            href: link.href,
            label: link.label,
          }))
        )}`
      : ''}
  </article>
`);
};

const mainBody = (title: string, description: string, links: LinkItem[]) => staticShell(`
  <article>
    <h1>${escapeHtml(title)}</h1>
    <p>${escapeHtml(description)}</p>
    ${links.length ? renderLinks(links) : ''}
  </article>
`);

const emojiMeaningsHubBody = () => staticShell(`
  <article>
    <h1>Emoji Meanings by Intent</h1>
    <p>Explore emoji meanings by the situation behind the message: love, texting tone, Gen Z slang, flags, and workplace communication.</p>
    <p><a href="${escapeHtml(emojiContextHubPath)}">Browse all ${getContextHubPageCount()} texting context guides</a> — from a girl, from a guy, WhatsApp, Instagram, and TikTok.</p>
    ${renderLinks(emojiIntentClusters.map((cluster) => ({
      href: `/emoji-meanings/${cluster.slug}/`,
      label: cluster.shortTitle,
      description: cluster.description,
    })))}
  </article>
`);

const emojiIntentClusterBody = (
  cluster: EmojiIntentCluster,
  clusterEmojis: Emoji[],
  relatedPosts: typeof blogPosts
) => staticShell(`
  <article>
    <nav><a href="/">Home</a> / <a href="/emoji-meanings/">Emoji Meanings</a></nav>
    <h1>${escapeHtml(cluster.title)}</h1>
    <p>${escapeHtml(cluster.description)}</p>
    <h2>Key emojis in this guide</h2>
    ${renderLinks(clusterEmojis.map((emoji) => ({
      href: `/emoji/${emoji.slug}/`,
      label: `${emoji.unicode} ${emoji.name}`,
      description: emoji.shortMeaning,
    })))}
    ${cluster.sections.map((section) => `
      <h2>${escapeHtml(section.heading)}</h2>
      <p>${escapeHtml(section.body)}</p>
    `).join('\n')}
    ${relatedPosts.length ? `<h2>Related guides</h2>${renderLinks(relatedPosts.map((post) => ({
      href: `/blog/${post.slug}/`,
      label: post.title,
      description: post.excerpt,
    })))}` : ''}
  </article>
`);

const blogPostBody = (post: (typeof blogPosts)[number]) => {
  const blocks = post.content.split('\n\n').map((block) => block.trim()).filter(Boolean);
  const content = blocks.map((block) => {
    const tableRows = parseMarkdownTable(block);
    if (tableRows) {
      return renderMarkdownTableHtml(tableRows, renderInlineMarkdownHtml);
    }

    if (block.startsWith('## ')) return `<h2>${escapeHtml(block.replace(/^## /, ''))}</h2>`;
    if (block.startsWith('### ')) return `<h3>${escapeHtml(block.replace(/^### /, ''))}</h3>`;
    if (block.startsWith('- ')) {
      const items = block
        .split('\n')
        .filter((line) => line.startsWith('- '))
        .map((line) => `<li>${renderInlineMarkdownHtml(line.replace(/^- /, ''))}</li>`)
        .join('');
      return `<ul>${items}</ul>`;
    }

    if (block.startsWith('[COMPARE]')) {
      const parts = block.replace('[COMPARE]', '').split('|').map((p) => p.trim());
      if (parts.length >= 3) {
        return `<p><strong>Rude:</strong> ${renderInlineMarkdownHtml(parts[0])}</p><p><strong>Polite:</strong> ${renderInlineMarkdownHtml(parts[1])}</p><p><em>Why:</em> ${renderInlineMarkdownHtml(parts[2])}</p>`;
      }
    }

    return `<p>${renderInlineMarkdownHtml(block)}</p>`;
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

const lowerFirst = (value: string) => value.charAt(0).toLowerCase() + value.slice(1);

const emojiTone = (emoji: Emoji) => {
  const firstContext = emoji.usageContexts[0] ?? emoji.shortMeaning;
  return `${emoji.unicode} ${emoji.name} is best for ${lowerFirst(firstContext.replace(/\.$/, ''))}. It usually feels connected to ${emoji.keywords.slice(0, 3).join(', ') || 'its core meaning'}, but the exact tone depends on the words around it.`;
};

const emojiUseCases = (emoji: Emoji) => {
  const contexts = emoji.usageContexts.slice(0, 3);
  return contexts.length ? contexts : [
    `Use ${emoji.unicode} when you want to express ${lowerFirst(emoji.shortMeaning.replace(/\.$/, ''))}.`,
    `Use ${emoji.unicode} in casual messages where the context makes the tone clear.`,
    `Use ${emoji.unicode} when the emoji adds meaning that plain text would not show.`,
  ];
};

const comparisonFaqItems = (left: Emoji, right: Emoji) => [
  {
    question: `What is the difference between ${left.unicode} and ${right.unicode}?`,
    answer: `${left.unicode} ${left.name} usually means ${lowerFirst(left.shortMeaning.replace(/\.$/, ''))}, while ${right.unicode} ${right.name} usually means ${lowerFirst(right.shortMeaning.replace(/\.$/, ''))}. Choose based on the tone and situation of your message.`,
  },
  {
    question: `When should I use ${left.unicode} instead of ${right.unicode}?`,
    answer: `Use ${left.unicode} when your message matches ${lowerFirst((left.usageContexts[0] ?? left.shortMeaning).replace(/\.$/, ''))}. Use ${right.unicode} when the context is closer to ${lowerFirst((right.usageContexts[0] ?? right.shortMeaning).replace(/\.$/, ''))}.`,
  },
  {
    question: `Can ${left.unicode} and ${right.unicode} be used together?`,
    answer: `Yes. You can use ${left.unicode} and ${right.unicode} together when you want to layer similar feelings or make the tone stronger, but avoid stacking them in formal or sensitive messages.`,
  },
];

const comparisonBody = (left: Emoji, right: Emoji) => {
  const faqItems = comparisonFaqItems(left, right);

  return staticShell(`
    <article>
      <nav><a href="/">Home</a> / <a href="/emoji-comparisons/">Emoji Comparisons</a></nav>
      <p>Reviewed by ${escapeHtml(editorialMeta.teamName)} • Last updated ${escapeHtml(editorialMeta.lastUpdated)}</p>
      <h1>${escapeHtml(`${left.unicode} ${left.name} vs ${right.unicode} ${right.name}`)}</h1>
      <p>Compare the meaning, tone, and best use cases for ${escapeHtml(left.name)} and ${escapeHtml(right.name)} so you can choose the emoji that fits your message.</p>

      <h2>Quick difference</h2>
      <p><strong>${escapeHtml(left.unicode)} ${escapeHtml(left.name)}</strong>: ${escapeHtml(left.shortMeaning)}</p>
      <p><strong>${escapeHtml(right.unicode)} ${escapeHtml(right.name)}</strong>: ${escapeHtml(right.shortMeaning)}</p>

      <h2>Side-by-side comparison</h2>
      <table>
        <thead>
          <tr>
            <th>Feature</th>
            <th>${escapeHtml(`${left.unicode} ${left.name}`)}</th>
            <th>${escapeHtml(`${right.unicode} ${right.name}`)}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Core meaning</td>
            <td>${escapeHtml(left.shortMeaning)}</td>
            <td>${escapeHtml(right.shortMeaning)}</td>
          </tr>
          <tr>
            <td>Common tone</td>
            <td>${escapeHtml(emojiTone(left))}</td>
            <td>${escapeHtml(emojiTone(right))}</td>
          </tr>
          <tr>
            <td>Category</td>
            <td>${escapeHtml(left.categorySlug.replace(/-/g, ' '))}</td>
            <td>${escapeHtml(right.categorySlug.replace(/-/g, ' '))}</td>
          </tr>
          <tr>
            <td>Search intent</td>
            <td>${escapeHtml(`${left.name} meaning, ${left.unicode} in texting`)}</td>
            <td>${escapeHtml(`${right.name} meaning, ${right.unicode} in texting`)}</td>
          </tr>
        </tbody>
      </table>

      <h2>${escapeHtml(`When to use ${left.unicode} ${left.name}`)}</h2>
      <ul>${emojiUseCases(left).map((useCase) => `<li>${escapeHtml(useCase)}</li>`).join('')}</ul>
      ${renderParagraphs(left.detailedMeaning, 1)}

      <h2>${escapeHtml(`When to use ${right.unicode} ${right.name}`)}</h2>
      <ul>${emojiUseCases(right).map((useCase) => `<li>${escapeHtml(useCase)}</li>`).join('')}</ul>
      ${renderParagraphs(right.detailedMeaning, 1)}

      <h2>Examples</h2>
      <ul>
        ${left.examples.slice(0, 2).map((example) => `<li><strong>${escapeHtml(left.unicode)} ${escapeHtml(example.context)}:</strong> ${escapeHtml(example.text)}</li>`).join('')}
        ${right.examples.slice(0, 2).map((example) => `<li><strong>${escapeHtml(right.unicode)} ${escapeHtml(example.context)}:</strong> ${escapeHtml(example.text)}</li>`).join('')}
      </ul>

      <h2>Which one should you choose?</h2>
      <p>Choose ${escapeHtml(left.unicode)} when the message is closer to ${escapeHtml(lowerFirst((left.usageContexts[0] ?? left.shortMeaning).replace(/\.$/, '')))}. Choose ${escapeHtml(right.unicode)} when the tone is closer to ${escapeHtml(lowerFirst((right.usageContexts[0] ?? right.shortMeaning).replace(/\.$/, '')))}. If the conversation is serious, professional, or emotionally sensitive, add words instead of relying only on emoji tone.</p>

      <h2>Frequently asked questions</h2>
      ${faqItems.map((faq) => `
        <h3>${escapeHtml(faq.question)}</h3>
        <p>${escapeHtml(faq.answer)}</p>
      `).join('\n')}

      <h2>Related emoji pages</h2>
      ${renderLinks([
        { href: `/emoji/${left.slug}/`, label: `${left.unicode} ${left.name}`, description: left.shortMeaning },
        { href: `/emoji/${right.slug}/`, label: `${right.unicode} ${right.name}`, description: right.shortMeaning },
        { href: '/emoji-comparisons/', label: 'More emoji comparisons', description: 'Compare similar emojis by meaning, tone, and use case.' },
      ])}
    </article>
  `);
};

const renderSections = (sections: Array<{ heading: string; body: string }>) =>
  sections
    .map(
      (section) => `
    <h2>${escapeHtml(section.heading)}</h2>
    <p>${escapeHtml(section.body)}</p>`
    )
    .join('\n');

const renderFaqs = (faqs: Array<{ question: string; answer: string }>) => `
  <h2>Frequently asked questions</h2>
  ${faqs
    .map(
      (faq) => `
    <h3>${escapeHtml(faq.question)}</h3>
    <p>${escapeHtml(faq.answer)}</p>`
    )
    .join('\n')}`;

const faqPageSchema = (faqs: Array<{ question: string; answer: string }>): StructuredData => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});

const platformHubBody = (
  platform: EmojiPlatform,
  featured: Emoji[],
  options: { h1: string; lead: string; breadcrumbLabel?: string; hubPath?: string }
) => {
  const hubPath = options.hubPath ?? `/platforms/${platform.slug}/`;
  const breadcrumbLabel = options.breadcrumbLabel ?? platform.name;

  return staticShell(`
  <article>
    <nav><a href="/">Home</a>${options.hubPath !== hubPath ? ` / <a href="${escapeHtml(hubPath)}">${escapeHtml(platform.name)}</a>` : ''} / ${escapeHtml(breadcrumbLabel)}</nav>
    <p>Reviewed by ${escapeHtml(editorialMeta.teamName)} • Last updated ${escapeHtml(editorialMeta.lastUpdated)}</p>
    <h1>${escapeHtml(options.h1)}</h1>
    <p>${escapeHtml(options.lead)}</p>
    <p>${escapeHtml(platform.copyGuide)}</p>

    <h2>Browse by platform</h2>
    ${renderLinks(
      emojiPlatforms.map((p) => ({
        href: `/platforms/${p.slug}/`,
        label: `${p.icon} ${p.name}`,
        description: p.description.slice(0, 140),
      }))
    )}

    <h2>Popular ${escapeHtml(platform.brandLabel)} emojis — copy &amp; meanings</h2>
    <p>Click any emoji to open its full meaning page. Each entry uses the same Unicode character your device keyboard inserts.</p>
    ${renderLinks(
      featured.map((emoji) => ({
        href: `/emoji/${emoji.slug}/`,
        label: `${emoji.unicode} ${emoji.name}`,
        description: emoji.shortMeaning,
      }))
    )}

    ${renderSections(platform.sections)}
    ${renderFaqs(platform.faqs)}

    ${renderEditorialSourcesHtml(editorialMeta.sources, escapeHtml, {
      intro: `${platform.name} emoji designs follow the Unicode standard. Vendor artwork differs, but code points stay the same across Apple, Google Noto, and Samsung.`,
    })}

    <h2>Related guides</h2>
    ${renderLinks([
      { href: '/emoji-kitchen/', label: 'Emoji Kitchen Guide', description: 'Gboard mashups and copy-ready combo alternatives.' },
      { href: '/emoji-combos/', label: 'Emoji Combos', description: 'ZWJ sequences for couples, families, and celebrations.' },
      { href: '/blog/iphone-emoji-list-copy-every-apple-emoji-2026/', label: 'iPhone Emoji List (2026)', description: 'Complete Apple emoji copy guide with top searches.' },
      { href: '/categories/', label: 'All Emoji Categories', description: 'Browse 3,700+ emoji meanings and copy pages.' },
    ])}
  </article>
`);
};

const platformHubStructuredData = (platform: EmojiPlatform, itemCount: number, pagePath: string): StructuredData[] => [
  {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `${platform.name} Emojis`,
    description: platform.description,
    url: canonicalUrl(pagePath),
    numberOfItems: itemCount,
    dateModified: editorialMeta.lastUpdatedIso,
    isPartOf: {
      '@type': 'WebSite',
      name: 'Allemojipedia',
      url: `${BASE_URL}/`,
    },
  },
  faqPageSchema(platform.faqs),
  breadcrumbSchema([
    { name: 'Home', url: `${BASE_URL}/` },
    { name: platform.name },
  ]),
];

const emojiKitchenBody = () =>
  staticShell(`
  <article>
    <nav><a href="/">Home</a> / Emoji Kitchen</nav>
    <p>Reviewed by ${escapeHtml(editorialMeta.teamName)} • Last updated ${escapeHtml(editorialMeta.lastUpdated)}</p>
    <h1>${escapeHtml(emojiKitchenGuide.title)}</h1>
    <p>${escapeHtml(emojiKitchenGuide.description)}</p>

    ${renderSections(emojiKitchenGuide.sections)}

    <h2>Popular combos to copy</h2>
    <p>Unicode chains that work across apps—alternatives to Kitchen image stickers. Copy the sequence, then explore each base emoji.</p>
    ${renderLinks(
      emojiKitchenCombos.map((combo) => ({
        href: '/emoji-kitchen/',
        label: `${combo.unicode} ${combo.label}`,
        description: combo.description,
      }))
    )}

    <h2>Base emojis in Kitchen-style combos</h2>
    ${renderLinks(
      [...new Set(emojiKitchenCombos.flatMap((c) => c.baseEmojiSlugs))].map((slug) => ({
        href: `/emoji/${slug}/`,
        label: slug.replace(/-/g, ' '),
      }))
    )}

    ${renderFaqs(emojiKitchenGuide.faqs)}

    <h2>Related</h2>
    ${renderLinks([
      { href: '/emoji-combos/', label: 'Emoji Combos hub', description: 'ZWJ couple, family, and celebration sequences.' },
      { href: '/platforms/google/', label: 'Google / Gboard emojis', description: 'Android emoji copy list.' },
      { href: '/platforms/apple/', label: 'iPhone emojis', description: 'Apple emoji copy hub.' },
    ])}
  </article>
`);

const emojiKitchenStructuredData = (): StructuredData[] => [
  webPageSchema(emojiKitchenGuide.title, emojiKitchenGuide.description, canonicalUrl('/emoji-kitchen/')),
  faqPageSchema(emojiKitchenGuide.faqs),
  breadcrumbSchema([
    { name: 'Home', url: `${BASE_URL}/` },
    { name: 'Emoji Kitchen' },
  ]),
];

const emojiCombosHubBody = () =>
  staticShell(`
  <article>
    <nav><a href="/">Home</a> / Emoji Combos</nav>
    <p>Reviewed by ${escapeHtml(editorialMeta.teamName)} • Last updated ${escapeHtml(editorialMeta.lastUpdated)}</p>
    <h1>Emoji Combos — Copy &amp; Meaning</h1>
    <p>Pre-made emoji combinations and ZWJ sequences for couples, families, birthdays, and flirty texts. One click to copy the full sequence.</p>

    <h2>What are emoji combos?</h2>
    <p>Emoji combos chain multiple Unicode characters—sometimes joined by zero-width joiners (ZWJ) to render as a single glyph. Use them when you want a ready-made visual phrase without opening a keyboard sticker tool.</p>

    <h2>All copy-ready combos</h2>
    ${renderLinks(
      emojiCombos.map((combo) => ({
        href: `/emoji-combos/${combo.slug}/`,
        label: `${combo.unicode} ${combo.shortTitle}`,
        description: combo.description,
      }))
    )}

    <h2>Related</h2>
    ${renderLinks([
      { href: '/emoji-kitchen/', label: 'Emoji Kitchen guide', description: 'Gboard mashups and Android combo tips.' },
      { href: '/emoji-meanings/heart-emoji-meanings/', label: 'Heart emoji meanings', description: 'Color hearts and when to use each.' },
      { href: '/platforms/apple/', label: 'iPhone emojis', description: 'Copy Apple emoji list.' },
    ])}
  </article>
`);

const emojiCombosHubStructuredData = (): StructuredData[] => [
  {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Emoji Combos',
    description: 'Copy emoji combinations and ZWJ sequences with meanings.',
    url: canonicalUrl('/emoji-combos/'),
    numberOfItems: emojiCombos.length,
    dateModified: editorialMeta.lastUpdatedIso,
    isPartOf: {
      '@type': 'WebSite',
      name: 'Allemojipedia',
      url: `${BASE_URL}/`,
    },
  },
  breadcrumbSchema([
    { name: 'Home', url: `${BASE_URL}/` },
    { name: 'Emoji Combos' },
  ]),
];

const emojiComboDetailBody = (combo: EmojiCombo, emojiBySlug: Map<string, Emoji>) =>
  staticShell(`
  <article>
    <nav><a href="/">Home</a> / <a href="/emoji-combos/">Emoji Combos</a> / ${escapeHtml(combo.shortTitle)}</nav>
    <p>Reviewed by ${escapeHtml(editorialMeta.teamName)} • Last updated ${escapeHtml(editorialMeta.lastUpdated)}</p>
    <h1>${escapeHtml(combo.title)}</h1>
    <p>${escapeHtml(combo.description)}</p>

    <h2>Copy this combo</h2>
    <p><strong>${escapeHtml(combo.unicode)}</strong> — select and copy the sequence above, or use the interactive copy button on the live page.</p>

    <h2>What this combo means</h2>
    <p>${escapeHtml(combo.meaning)}</p>

    <h2>ZWJ / technical note</h2>
    <p>${escapeHtml(combo.zwjNote)}</p>

    <h2>Example messages</h2>
    <ul>${combo.examples.map((ex) => `<li>${escapeHtml(ex)}</li>`).join('')}</ul>

    <h2>Base emojis in this combo</h2>
    ${renderLinks(
      combo.componentSlugs.map((slug) => {
        const emoji = emojiBySlug.get(slug);
        return emoji
          ? { href: `/emoji/${slug}/`, label: `${emoji.unicode} ${emoji.name}`, description: emoji.shortMeaning }
          : { href: `/emoji/${slug}/`, label: slug.replace(/-/g, ' ') };
      })
    )}

    ${
      combo.relatedComboSlugs.length
        ? `<h2>Related combos</h2>${renderLinks(
            combo.relatedComboSlugs
              .map((slug) => emojiCombos.find((c) => c.slug === slug))
              .filter((c): c is EmojiCombo => Boolean(c))
              .map((related) => ({
                href: `/emoji-combos/${related.slug}/`,
                label: `${related.unicode} ${related.shortTitle}`,
                description: related.description,
              }))
          )}`
        : ''
    }
  </article>
`);

const emojiComboDetailStructuredData = (combo: EmojiCombo): StructuredData[] => [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: combo.title,
    description: combo.description,
    url: canonicalUrl(`/emoji-combos/${combo.slug}/`),
    datePublished: editorialMeta.lastUpdatedIso,
    dateModified: editorialMeta.lastUpdatedIso,
    author: {
      '@type': 'Organization',
      name: editorialMeta.teamName,
      url: `${BASE_URL}/about/`,
    },
    publisher: {
      '@type': 'Organization',
      name: editorialMeta.siteName,
      url: `${BASE_URL}/`,
    },
    mainEntityOfPage: canonicalUrl(`/emoji-combos/${combo.slug}/`),
  },
  breadcrumbSchema([
    { name: 'Home', url: `${BASE_URL}/` },
    { name: 'Emoji Combos', url: canonicalUrl('/emoji-combos/') },
    { name: combo.shortTitle },
  ]),
];

const breadcrumbSchema = (items: Array<{ name: string; url?: string }>): StructuredData => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    ...(item.url ? { item: item.url } : {}),
  })),
});

const webPageSchema = (name: string, description: string, url: string): StructuredData => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name,
  description: compactText(description),
  url,
  dateModified: editorialMeta.lastUpdatedIso,
  author: {
    '@type': 'Organization',
    name: editorialMeta.teamName,
    url: `${BASE_URL}/about/`,
  },
  publisher: {
    '@type': 'Organization',
    name: editorialMeta.siteName,
    url: `${BASE_URL}/`,
  },
  isPartOf: {
    '@type': 'WebSite',
    name: 'Allemojipedia',
    url: `${BASE_URL}/`,
  },
});

const categoryStructuredData = (
  category: (typeof categories)[number],
  categoryEmojis: Emoji[]
): StructuredData[] => [
  {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `${category.name} Emojis`,
    description: category.description,
    url: canonicalUrl(`/category/${category.slug}/`),
    numberOfItems: categoryEmojis.length,
    isPartOf: {
      '@type': 'WebSite',
      name: 'Allemojipedia',
      url: `${BASE_URL}/`,
    },
  },
  breadcrumbSchema([
    { name: 'Home', url: `${BASE_URL}/` },
    { name: 'Categories', url: canonicalUrl('/categories/') },
    { name: category.name },
  ]),
];

const blogPostStructuredData = (post: (typeof blogPosts)[number]): StructuredData[] => [
  {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: compactText(post.excerpt),
    url: canonicalUrl(`/blog/${post.slug}/`),
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: 'Allemojipedia',
      url: `${BASE_URL}/about/`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Allemojipedia',
      url: `${BASE_URL}/`,
    },
    mainEntityOfPage: canonicalUrl(`/blog/${post.slug}/`),
  },
  breadcrumbSchema([
    { name: 'Home', url: `${BASE_URL}/` },
    { name: 'Blog', url: canonicalUrl('/blog/') },
    { name: post.title },
  ]),
];

const emojiComparisonStructuredData = (left: Emoji, right: Emoji): StructuredData[] => {
  const faqItems = comparisonFaqItems(left, right);
  const path = `/emoji/${left.slug}-vs-${right.slug}/`;

  return [
    webPageSchema(
      `${left.unicode} ${left.name} vs ${right.unicode} ${right.name}`,
      `Compare ${left.name} and ${right.name}: meanings, tone, examples, and when to use each emoji.`,
      canonicalUrl(path)
    ),
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqItems.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: `${left.name} vs ${right.name} comparison`,
      itemListElement: [left, right].map((emoji, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'DefinedTerm',
          name: `${emoji.unicode} ${emoji.name}`,
          description: emoji.shortMeaning,
          url: canonicalUrl(`/emoji/${emoji.slug}/`),
        },
      })),
    },
    breadcrumbSchema([
      { name: 'Home', url: `${BASE_URL}/` },
      { name: 'Emoji Comparisons', url: canonicalUrl('/emoji-comparisons/') },
      { name: `${left.unicode} ${left.name} vs ${right.unicode} ${right.name}` },
    ]),
  ];
};

const emojiIntentClusterStructuredData = (
  cluster: EmojiIntentCluster,
  clusterEmojis: Emoji[]
): StructuredData[] => [
  {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: cluster.title,
    description: cluster.description,
    url: canonicalUrl(`/emoji-meanings/${cluster.slug}/`),
    numberOfItems: clusterEmojis.length,
    isPartOf: {
      '@type': 'WebSite',
      name: 'Allemojipedia',
      url: `${BASE_URL}/`,
    },
    about: clusterEmojis.slice(0, 12).map((emoji) => ({
      '@type': 'DefinedTerm',
      name: `${emoji.unicode} ${emoji.name}`,
      url: canonicalUrl(`/emoji/${emoji.slug}/`),
    })),
  },
  breadcrumbSchema([
    { name: 'Home', url: `${BASE_URL}/` },
    { name: 'Emoji Meanings', url: canonicalUrl('/emoji-meanings/') },
    { name: cluster.shortTitle },
  ]),
];

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
  robots = INDEX_FOLLOW_ROBOTS,
  structuredData: StructuredData[] = []
) => {
  const route = canonicalPath(routePath);
  const metaTags = generateMetaTags(title, description, canonicalUrl(route), keywords, ogType, robots);
  const html = injectStaticBody(injectStructuredData(injectMetaTags(template, metaTags), structuredData), bodyHtml);
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

  const homeSeo = getMainPageSeo('/');

  // Home page
  writeStaticPage(
    template,
    '/',
    homeSeo.title,
    homeSeo.description,
    'emoji meanings, emoji dictionary, emoji encyclopedia, copy paste emoji, emoji guide',
    mainBody(
      'Allemojipedia — Emoji Meanings, Names & Copy',
      'Your complete emoji encyclopedia with meanings, examples, copy-paste pages, categories, and emoji usage guides.',
      [
        { href: '/categories/', label: 'Browse emoji categories', description: 'Find emojis by theme and category.' },
        { href: '/emoji-meanings/', label: 'Explore emoji meanings by intent', description: 'Start with hearts, texting tone, Gen Z slang, flags, or work emojis.' },
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
    const seo = getEmojiSeoMeta(emoji);
    const keywords = `${emoji.name} emoji, ${emoji.unicode} meaning, ${emoji.keywords.slice(0, 5).join(', ')}, copy ${emoji.name} emoji`;
    const primaryRelatedSlug = emoji.relatedEmojis[0];
    const primaryRelated = primaryRelatedSlug ? emojiBySlug.get(primaryRelatedSlug) : undefined;

    writeStaticPage(
      template,
      `/emoji/${emoji.slug}/`,
      seo.title,
      seo.description,
      keywords,
      emojiBody(emoji, emojiBySlug, emojis),
      'article',
      getEmojiRobots(emoji),
      buildEmojiStructuredData(emoji, primaryRelated) as StructuredData[]
    );
    count++;
  });

  // Generate high-intent emoji context pages
  console.log('Generating emoji context pages...');
  emojiContextPages.forEach((page) => {
    const emoji = emojiBySlug.get(page.emojiSlug);
    if (!emoji) return;

    const contextSeo = getContextSeoMeta(emoji, page);
    writeStaticPage(
      template,
      `/emoji/${emoji.slug}/${page.context}/`,
      contextSeo.title,
      contextSeo.description,
      `${emoji.name} emoji ${page.shortTitle.toLowerCase()}, ${emoji.unicode} meaning ${page.shortTitle.toLowerCase()}, ${page.title.toLowerCase()}`,
      emojiContextPageBody(emoji, page),
      'article',
      getEmojiRobots(emoji),
      buildContextPageStructuredData(emoji, page) as StructuredData[]
    );
    count++;
  });

  // Texting context hub — internal linking for all context pages
  console.log('Generating emoji context hub page...');
  const contextHubSeo = getMainPageSeo(emojiContextHubPath);
  const hubSections = getContextHubSections();
  writeStaticPage(
    template,
    emojiContextHubPath,
    contextHubSeo.title,
    contextHubSeo.description,
    emojiContextHubMeta.keywords,
    emojiContextHubBody(emojiBySlug),
    'website',
    INDEX_FOLLOW_ROBOTS,
    [
      {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: contextHubSeo.ogTitle ?? emojiContextHubMeta.title,
        description: contextHubSeo.description,
        url: canonicalUrl(emojiContextHubPath),
        numberOfItems: getContextHubPageCount(),
        hasPart: hubSections.flatMap((section) =>
          section.pages.map((page) => ({
            '@type': 'Article',
            name: page.title,
            url: canonicalUrl(`/emoji/${page.emojiSlug}/${page.context}/`),
          }))
        ),
      },
      breadcrumbSchema([
        { name: 'Home', url: `${BASE_URL}/` },
        { name: 'Emoji Meanings', url: canonicalUrl('/emoji-meanings/') },
        { name: emojiContextHubMeta.shortTitle },
      ]),
    ]
  );
  count++;

  // Generate category pages
  console.log('Generating category pages...');
  categories.forEach((category) => {
    const categoryEmojis = emojis.filter(e => e.categorySlug === category.slug);
    const categorySeo = getCategorySeoMeta(category, categoryEmojis.length);
    const keywords = `${category.name.toLowerCase()} emojis, ${category.name.toLowerCase()} emoji list, copy ${category.name.toLowerCase()} emojis`;

    writeStaticPage(
      template,
      `/category/${category.slug}/`,
      categorySeo.title,
      categorySeo.description,
      keywords,
      categoryBody(category, categoryEmojis),
      'website',
      INDEX_FOLLOW_ROBOTS,
      categoryStructuredData(category, categoryEmojis)
    );
    count++;
  });

  // Generate people subcategory pages
  console.log('Generating people subcategory pages...');
  peopleSubcategories.forEach((sub) => {
    const subEmojis = emojis.filter((emoji) => sub.subgroups.includes(emoji.subgroup));
    const subSeo = getPeopleSubSeoMeta(sub, subEmojis.length);
    const keywords = `${sub.name.toLowerCase()} emojis, ${sub.name.toLowerCase()} emoji list, copy ${sub.name.toLowerCase()} emojis`;

    writeStaticPage(template, `/people/${sub.slug}/`, subSeo.title, subSeo.description, keywords, peopleBody(sub, subEmojis, emojiBySlug));
    count++;
  });

  // Generate blog post pages
  console.log('Generating blog post pages...');
  sortedBlogPosts.forEach((post) => {
    const postSeo = getBlogPostSeoMeta(post);
    writeStaticPage(
      template,
      `/blog/${post.slug}/`,
      postSeo.title,
      postSeo.description,
      post.keywords,
      blogPostBody(post),
      'article',
      INDEX_FOLLOW_ROBOTS,
      blogPostStructuredData(post)
    );
    count++;
  });

  // Generate emoji meaning intent cluster pages
  console.log('Generating emoji meaning cluster pages...');
  const emojiMeaningsSeo = getMainPageSeo('/emoji-meanings/');

  writeStaticPage(
    template,
    '/emoji-meanings/',
    emojiMeaningsSeo.title,
    emojiMeaningsSeo.description,
    'emoji meanings, emoji meaning guide, emoji slang, texting emojis, heart emoji meanings',
    emojiMeaningsHubBody(),
    'website',
    INDEX_FOLLOW_ROBOTS,
    [
      webPageSchema(
        'Emoji Meanings by Intent',
        'Explore emoji meaning guides by intent, including heart emojis, Gen Z emoji slang, texting tone, flag emojis, and work emojis.',
        canonicalUrl('/emoji-meanings/')
      ),
      breadcrumbSchema([
        { name: 'Home', url: `${BASE_URL}/` },
        { name: 'Emoji Meanings' },
      ]),
    ]
  );
  count++;

  emojiIntentClusters.forEach((cluster) => {
    const clusterEmojis = cluster.emojiSlugs
      .map((emojiSlug) => emojiBySlug.get(emojiSlug))
      .filter((emoji): emoji is Emoji => Boolean(emoji));
    const relatedPosts = sortedBlogPosts.filter((post) => cluster.blogSlugs.includes(post.slug));

    const clusterSeo = getClusterSeoMeta(cluster);
    writeStaticPage(
      template,
      `/emoji-meanings/${cluster.slug}/`,
      clusterSeo.title,
      clusterSeo.description,
      cluster.keywords,
      emojiIntentClusterBody(cluster, clusterEmojis, relatedPosts),
      'website',
      INDEX_FOLLOW_ROBOTS,
      emojiIntentClusterStructuredData(cluster, clusterEmojis)
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

    const comparisonSeo = getComparisonSeoMeta(left, right);

    writeStaticPage(
      template,
      `/emoji/${slug1}-vs-${slug2}/`,
      comparisonSeo.title,
      comparisonSeo.description,
      `${left.name} vs ${right.name}, ${left.unicode} vs ${right.unicode}, emoji comparison`,
      comparisonBody(left, right),
      'article',
      INDEX_FOLLOW_ROBOTS,
      emojiComparisonStructuredData(left, right)
    );
    count++;
  });

  // Generate main pages
  console.log('Generating main pages...');
  
  const categoriesSeo = getMainPageSeo('/categories/');
  const blogSeo = getMainPageSeo('/blog/');
  const comparisonsHubSeo = getMainPageSeo('/emoji-comparisons/');

  // Categories page
  writeStaticPage(
    template,
    '/categories/',
    categoriesSeo.title,
    categoriesSeo.description,
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

  const peopleHubSeo = getMainPageSeo('/people/');

  // People page
  writeStaticPage(
    template,
    '/people/',
    peopleHubSeo.title,
    peopleHubSeo.description,
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
    blogSeo.title,
    blogSeo.description,
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
    comparisonsHubSeo.title,
    comparisonsHubSeo.description,
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

  // Platform hub pages
  console.log('Generating platform hub pages...');
  emojiPlatforms.forEach((platform) => {
    const platformSeo = getMainPageSeo(`/platforms/${platform.slug}/`);
    const featured = platform.featuredEmojiSlugs
      .map((s) => emojiBySlug.get(s))
      .filter((e): e is Emoji => Boolean(e));
    const pagePath = `/platforms/${platform.slug}/`;

    writeStaticPage(
      template,
      pagePath,
      platformSeo.title,
      platformSeo.description,
      platform.keywords,
      platformHubBody(platform, featured, {
        h1: `${platform.icon} ${platform.name} Emojis`,
        lead: platform.description,
      }),
      'website',
      INDEX_FOLLOW_ROBOTS,
      platformHubStructuredData(platform, featured.length, pagePath)
    );
    count++;
  });

  platformAliasRoutes.forEach(({ path: aliasPath, platform, variant }) => {
    const p = emojiPlatforms.find((pl) => pl.slug === platform);
    if (!p) return;
    const seoPath = `${aliasPath}/`;
    const aliasSeo = getMainPageSeo(seoPath);
    const variantSeo = getPlatformVariantSeo(variant);
    const featured = p.featuredEmojiSlugs
      .map((s) => emojiBySlug.get(s))
      .filter((e): e is Emoji => Boolean(e));
    const h1 = getPlatformAliasH1(variant, p);

    writeStaticPage(
      template,
      `${aliasPath}/`,
      aliasSeo.title,
      aliasSeo.description,
      p.keywords,
      platformHubBody(p, featured, {
        h1,
        lead: variantSeo.description,
        breadcrumbLabel: h1,
        hubPath: `/platforms/${platform}/`,
      }),
      'website',
      INDEX_FOLLOW_ROBOTS,
      platformHubStructuredData(p, featured.length, `${aliasPath}/`)
    );
    count++;
  });

  // Emoji Kitchen
  console.log('Generating emoji kitchen page...');
  const kitchenSeo = getMainPageSeo('/emoji-kitchen/');
  writeStaticPage(
    template,
    '/emoji-kitchen/',
    kitchenSeo.title,
    kitchenSeo.description,
    emojiKitchenGuide.keywords,
    emojiKitchenBody(),
    'article',
    INDEX_FOLLOW_ROBOTS,
    emojiKitchenStructuredData()
  );
  count++;

  // Emoji combos hub + detail pages
  console.log('Generating emoji combo pages...');
  const combosSeo = getMainPageSeo('/emoji-combos/');
  writeStaticPage(
    template,
    '/emoji-combos/',
    combosSeo.title,
    combosSeo.description,
    'emoji combos, emoji combinations, zwj emoji, couple emoji combo',
    emojiCombosHubBody(),
    'website',
    INDEX_FOLLOW_ROBOTS,
    emojiCombosHubStructuredData()
  );
  count++;

  emojiCombos.forEach((combo) => {
    writeStaticPage(
      template,
      `/emoji-combos/${combo.slug}/`,
      `${combo.title} | Allemojipedia`,
      combo.description,
      combo.keywords,
      emojiComboDetailBody(combo, emojiBySlug),
      'article',
      INDEX_FOLLOW_ROBOTS,
      emojiComboDetailStructuredData(combo)
    );
    count++;
  });

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
        { href: '/emoji-meanings/', label: 'Emoji Meanings' },
        { href: '/people/', label: 'People Emojis' },
        { href: '/blog/', label: 'Emoji Blog' },
        { href: '/emoji-comparisons/', label: 'Emoji Comparisons' },
        { href: '/platforms/apple/', label: 'Apple / iPhone Emojis' },
        { href: '/emoji-kitchen/', label: 'Emoji Kitchen' },
        { href: '/emoji-combos/', label: 'Emoji Combos' },
      ]
    )
  );
  count++;

  // About page
  writeStaticPage(
    template,
    '/about/',
    'About Allemojipedia — Editorial Process & Emoji Sources | Allemojipedia',
    'How Allemojipedia reviews emoji meanings using Unicode, CLDR, platform designs, and real-world texting. Meet our sources and editorial process.',
    'about allemojipedia, emoji encyclopedia, unicode emoji sources',
    staticShell(`
  <article>
    <nav><a href="/">Home</a> / About</nav>
    <h1>About Allemojipedia</h1>
    <p>Allemojipedia is a free emoji encyclopedia for meanings, copy-and-paste, texting tone, and platform differences — grounded in Unicode standards.</p>
    <h2>Editorial process</h2>
    <p>Meanings are reviewed by the ${escapeHtml(editorialMeta.teamName)}. We start with the official Unicode name and code point, cross-check CLDR annotations, then document real-world usage in chats and social feeds.</p>
    <p>Last editorial update: ${escapeHtml(editorialMeta.lastUpdated)}.</p>
    ${renderEditorialSourcesHtml(editorialMeta.sources, escapeHtml, {
      title: 'Sources we cite',
      intro:
        'These are the organizations that create or document emoji standards. We link them so readers and search engines can verify our references.',
    })}
    <h2>Who creates emojis?</h2>
    <p>New emoji are proposed to and encoded by the <a href="https://unicode.org/emoji/proposals.html" target="_blank">Unicode Consortium</a>. Vendors such as Apple, Google (Noto Color Emoji), Samsung, and Microsoft design how each character looks. For vendor artwork history, see also <a href="https://emojipedia.org/" target="_blank" rel="noopener">Emojipedia</a>.</p>
    <p><a href="/emoji-meanings-in-texting/">Browse 250 texting context guides</a> · <a href="/contact/">Contact</a></p>
  </article>
`)
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
