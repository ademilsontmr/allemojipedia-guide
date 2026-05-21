import fs from 'fs';
import path from 'path';
import { emojis, type Emoji } from '../src/data/emojis';
import { categories, peopleSubcategories } from '../src/data/categories';
import { blogPosts } from '../src/data/blogPosts';
import { popularComparisons } from '../src/data/emojiComparisons';
import { emojiIntentClusters, getEmojiIntentClustersForEmoji, type EmojiIntentCluster } from '../src/data/emojiIntentClusters';
import { getTopEmojiEditorial } from '../src/data/topEmojiEditorial';
import { getBlogPostSeoMeta, getClusterSeoMeta, getComparisonSeoMeta, getEmojiSeoMeta, getMainPageSeo } from '../src/data/seoMeta';
import { editorialMeta } from '../src/data/editorialMeta';
import { emojiContextPages, getEmojiContextPagesForEmoji, type EmojiContextPage } from '../src/data/emojiContextPages';
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
  <main class="static-seo-fallback" style="max-width: 960px; margin: 0 auto; padding: 32px 20px; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; line-height: 1.6;">
    ${content}
  </main>
`;

const emojiBody = (emoji: Emoji) => {
  const clusters = getEmojiIntentClustersForEmoji(emoji.slug);
  const contextPages = getEmojiContextPagesForEmoji(emoji.slug);
  const editorial = getTopEmojiEditorial(emoji);
  const relatedLinks = emoji.relatedEmojis.slice(0, 6).map((slug) => ({
    href: `/emoji/${slug}/`,
    label: slug.split('-').map((word) => word[0]?.toUpperCase() + word.slice(1)).join(' '),
  }));

  return staticShell(`
    <article>
      <nav><a href="/">Home</a> / <a href="/category/${escapeHtml(emoji.categorySlug)}/">Category</a></nav>
      <p>Reviewed by ${escapeHtml(editorialMeta.teamName)} • Last updated ${escapeHtml(editorialMeta.lastUpdated)}</p>
      <h1>${escapeHtml(`${emoji.unicode} ${emoji.name} Emoji: Meaning and How to Use`)}</h1>
      <p><strong>${escapeHtml(emoji.shortMeaning)}</strong></p>
      ${editorial ? `
        <h2>Quick answer</h2>
        <p>${escapeHtml(editorial.snippetAnswer)}</p>
        <h2>${escapeHtml(`${emoji.unicode} meaning in texting and social media`)}</h2>
        <h3>In texting</h3>
        <p>${escapeHtml(editorial.textingMeaning)}</p>
        <h3>On social media</h3>
        <p>${escapeHtml(editorial.socialMeaning)}</p>
        <h3>Tone warning</h3>
        <p>${escapeHtml(editorial.caution)}</p>
      ` : ''}
      ${renderParagraphs(emoji.detailedMeaning)}
      <h2>Common uses</h2>
      <ul>${emoji.usageContexts.map((context) => `<li>${escapeHtml(context)}</li>`).join('')}</ul>
      <h2>Examples</h2>
      <ul>${emoji.examples.slice(0, 3).map((example) => `<li><strong>${escapeHtml(example.context)}:</strong> ${escapeHtml(example.text)}</li>`).join('')}</ul>
      <h2>Meaning by intent</h2>
      <p>The ${escapeHtml(emoji.name)} emoji can shift meaning depending on tone, platform, and relationship. In texting it may clarify emotion, while on social media it often acts as a fast reaction or caption signal.</p>
      <h2>Search terms people use for this emoji</h2>
      <ul>${(editorial?.searchIntents ?? emoji.keywords.slice(0, 8).map((keyword) => `${keyword} emoji meaning`)).map((intent) => `<li>${escapeHtml(intent)}</li>`).join('')}</ul>
      ${clusters.length ? `<h2>Related meaning guides</h2>${renderLinks(clusters.map((cluster) => ({
        href: `/emoji-meanings/${cluster.slug}/`,
        label: cluster.shortTitle,
        description: cluster.description,
      })))}` : ''}
      ${contextPages.length ? `<h2>Meaning by sender and platform</h2>${renderLinks(contextPages.map((page) => ({
        href: `/emoji/${emoji.slug}/${page.context}/`,
        label: page.shortTitle,
        description: page.description,
      })))}` : ''}
      <h2>Editorial review and sources</h2>
      <p>This emoji guide is reviewed by ${escapeHtml(editorialMeta.teamName)}. We combine Unicode naming, CLDR annotations, and common usage patterns from texting and social platforms.</p>
      ${renderLinks(editorialMeta.sources.map((source) => ({
        href: source.url,
        label: source.name,
      })))}
      ${relatedLinks.length ? `<h2>Often compared with</h2>${renderLinks(relatedLinks)}` : ''}
    </article>
  `);
};

const emojiContextPageBody = (emoji: Emoji, page: EmojiContextPage) => staticShell(`
  <article>
    <nav><a href="/">Home</a> / <a href="/emoji/${escapeHtml(emoji.slug)}/">${escapeHtml(`${emoji.unicode} ${emoji.name}`)}</a></nav>
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
    <h2>Editorial review and sources</h2>
    <p>This guide combines Unicode emoji naming, CLDR annotations, and common usage patterns from texting and social platforms.</p>
    ${renderLinks(editorialMeta.sources.map((source) => ({
      href: source.url,
      label: source.name,
    })))}
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

const emojiMeaningsHubBody = () => staticShell(`
  <article>
    <h1>Emoji Meanings by Intent</h1>
    <p>Explore emoji meanings by the situation behind the message: love, texting tone, Gen Z slang, flags, and workplace communication.</p>
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

const emojiStructuredData = (emoji: Emoji): StructuredData[] => {
  const editorial = getTopEmojiEditorial(emoji);
  const seo = getEmojiSeoMeta(emoji);

  return [
    webPageSchema(seo.ogTitle ?? `${emoji.unicode} ${emoji.name} Emoji Meaning`, seo.description, canonicalUrl(`/emoji/${emoji.slug}/`)),
    {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    name: `${emoji.unicode} ${emoji.name}`,
    description: compactText(editorial?.snippetAnswer ?? emoji.shortMeaning),
    url: canonicalUrl(`/emoji/${emoji.slug}/`),
    inDefinedTermSet: {
      '@type': 'DefinedTermSet',
      name: 'Unicode Emoji',
      url: 'https://unicode.org/emoji/',
    },
    },
    ...(editorial ? [{
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: editorial.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    }] : []),
    breadcrumbSchema([
    { name: 'Home', url: `${BASE_URL}/` },
    { name: 'Category', url: canonicalUrl(`/category/${emoji.categorySlug}/`) },
    { name: `${emoji.unicode} ${emoji.name}` },
    ]),
  ];
};

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

const emojiContextPageStructuredData = (emoji: Emoji, page: EmojiContextPage): StructuredData[] => [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${emoji.unicode} ${page.title}`,
    description: page.description,
    url: canonicalUrl(`/emoji/${emoji.slug}/${page.context}/`),
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
    mainEntityOfPage: canonicalUrl(`/emoji/${emoji.slug}/${page.context}/`),
    about: {
      '@type': 'DefinedTerm',
      name: `${emoji.unicode} ${emoji.name}`,
      url: canonicalUrl(`/emoji/${emoji.slug}/`),
    },
  },
  breadcrumbSchema([
    { name: 'Home', url: `${BASE_URL}/` },
    { name: `${emoji.unicode} ${emoji.name}`, url: canonicalUrl(`/emoji/${emoji.slug}/`) },
    { name: page.shortTitle },
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

    writeStaticPage(
      template,
      `/emoji/${emoji.slug}/`,
      seo.title,
      seo.description,
      keywords,
      emojiBody(emoji),
      'article',
      getEmojiRobots(emoji),
      emojiStructuredData(emoji)
    );
    count++;
  });

  // Generate high-intent emoji context pages
  console.log('Generating emoji context pages...');
  emojiContextPages.forEach((page) => {
    const emoji = emojiBySlug.get(page.emojiSlug);
    if (!emoji) return;

    writeStaticPage(
      template,
      `/emoji/${emoji.slug}/${page.context}/`,
      `${emoji.unicode} ${page.title} | Allemojipedia`,
      page.description,
      `${emoji.name} emoji ${page.shortTitle.toLowerCase()}, ${emoji.unicode} meaning ${page.shortTitle.toLowerCase()}, ${page.title.toLowerCase()}`,
      emojiContextPageBody(emoji, page),
      'article',
      getEmojiRobots(emoji),
      emojiContextPageStructuredData(emoji, page)
    );
    count++;
  });

  // Generate category pages
  console.log('Generating category pages...');
  categories.forEach((category) => {
    const categoryEmojis = emojis.filter(e => e.categorySlug === category.slug);
    const title = `${category.name} Emojis — Copy & Paste All ${categoryEmojis.length} | Allemojipedia`;
    const description = `${category.description} Copy and paste ${categoryEmojis.length} ${category.name.toLowerCase()} emojis instantly.`;
    const keywords = `${category.name.toLowerCase()} emojis, ${category.name.toLowerCase()} emoji list, copy ${category.name.toLowerCase()} emojis`;

    writeStaticPage(
      template,
      `/category/${category.slug}/`,
      title,
      description,
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
    const title = `${sub.name} Emojis — Copy & Paste | Allemojipedia`;
    const description = `${sub.description} Copy and paste ${sub.name.toLowerCase()} emojis instantly.`;
    const keywords = `${sub.name.toLowerCase()} emojis, ${sub.name.toLowerCase()} emoji list, copy ${sub.name.toLowerCase()} emojis`;

    writeStaticPage(template, `/people/${sub.slug}/`, title, description, keywords, peopleBody(sub, subEmojis));
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
