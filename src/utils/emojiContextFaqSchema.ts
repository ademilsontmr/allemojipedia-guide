import type { Emoji } from "@/data/emojis";
import type { EmojiContextPage, EmojiContextType } from "@/data/emojiContextPages";
import { editorialMeta } from "@/data/editorialMeta";
import { getContextSeoMeta } from "@/data/seoMeta";

const BASE_URL = "https://allemojipedia.com";

export type ContextFaqItem = { question: string; answer: string };

const contextPhrase: Record<EmojiContextType, string> = {
  "from-a-girl": "from a girl",
  "from-a-guy": "from a guy",
  whatsapp: "on WhatsApp",
  instagram: "on Instagram",
  tiktok: "on TikTok",
};

export const buildContextPageFaqs = (emoji: Emoji, page: EmojiContextPage): ContextFaqItem[] => {
  const phrase = contextPhrase[page.context];
  const u = emoji.unicode;

  return [
    {
      question: `What does ${u} mean ${phrase}?`,
      answer: page.answer,
    },
    {
      question: `How do you know what ${u} means ${phrase}?`,
      answer: `Watch for these signals: ${page.signals.join(" ")}`,
    },
    {
      question: `What are example messages with ${u} ${phrase}?`,
      answer: `Common examples include: ${page.examples.join("; ")}.`,
    },
    {
      question: `What should you avoid when reading ${u} ${phrase}?`,
      answer: page.caution,
    },
    {
      question: `What is the ${emoji.name} emoji?`,
      answer: `${u} ${emoji.name}: ${emoji.shortMeaning} See the full ${emoji.name.toLowerCase()} meaning guide for copy, related emojis, and more context.`,
    },
  ];
};

export const buildContextFaqPageSchema = (faqs: ContextFaqItem[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
});

export type ContextSchemaObject = Record<string, unknown>;

export const buildContextPageStructuredData = (
  emoji: Emoji,
  page: EmojiContextPage
): ContextSchemaObject[] => {
  const seo = getContextSeoMeta(emoji, page);
  const pageUrl = `${BASE_URL}/emoji/${emoji.slug}/${page.context}/`;
  const faqs = buildContextPageFaqs(emoji, page);

  return [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: seo.ogTitle ?? `${emoji.unicode} ${page.title}`,
      description: seo.description,
      url: pageUrl,
      datePublished: editorialMeta.lastUpdatedIso,
      dateModified: editorialMeta.lastUpdatedIso,
      author: {
        "@type": "Organization",
        name: editorialMeta.teamName,
        url: `${BASE_URL}/about/`,
      },
      publisher: {
        "@type": "Organization",
        name: editorialMeta.siteName,
        url: `${BASE_URL}/`,
      },
      mainEntityOfPage: pageUrl,
      about: {
        "@type": "DefinedTerm",
        name: `${emoji.unicode} ${emoji.name}`,
        url: `${BASE_URL}/emoji/${emoji.slug}/`,
      },
    },
    buildContextFaqPageSchema(faqs),
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_URL}/` },
        {
          "@type": "ListItem",
          position: 2,
          name: "Emoji Meanings in Texting",
          item: `${BASE_URL}/emoji-meanings-in-texting/`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: `${emoji.unicode} ${emoji.name}`,
          item: `${BASE_URL}/emoji/${emoji.slug}/`,
        },
        { "@type": "ListItem", position: 4, name: page.shortTitle },
      ],
    },
  ];
};
