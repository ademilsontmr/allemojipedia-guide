import type { Emoji } from "@/data/emojis";
import { getCategoryBySlug } from "@/data/categories";
import { editorialMeta } from "@/data/editorialMeta";
import { getTopEmojiEditorial } from "@/data/topEmojiEditorial";
import { getEmojiSeoMeta } from "@/data/seoMeta";

const BASE_URL = "https://allemojipedia.com";

export type SchemaObject = Record<string, unknown>;

export const buildEmojiFaqItems = (emoji: Emoji, primaryRelated?: Emoji | null) => {
  const editorial = getTopEmojiEditorial(emoji);

  return [
    ...(editorial?.faqs ?? []),
    {
      question: `Is the ${emoji.unicode} emoji informal?`,
      answer: emoji.usageContexts.some(
        (ctx) => ctx.toLowerCase().includes("casual") || ctx.toLowerCase().includes("friend")
      )
        ? `Yes, the ${emoji.name} emoji is generally considered informal and works best in casual conversations with friends and family.`
        : `The ${emoji.name} emoji can be used in both casual and semi-formal contexts, depending on your relationship with the recipient.`,
    },
    {
      question: `Can I use the ${emoji.unicode} emoji at work?`,
      answer: emoji.usageContexts.some(
        (ctx) => ctx.toLowerCase().includes("professional") || ctx.toLowerCase().includes("work")
      )
        ? `Yes, ${emoji.unicode} is generally appropriate for workplace communication when used in casual team chats or friendly emails with colleagues you know well.`
        : `Use ${emoji.unicode} cautiously at work. It's acceptable in informal team chats but avoid it in formal emails or communication with clients and executives.`,
    },
    {
      question: primaryRelated
        ? `What is the difference between ${emoji.unicode} and ${primaryRelated.unicode}?`
        : `How do I copy the ${emoji.name} emoji?`,
      answer: primaryRelated
        ? `While both emojis may seem similar, ${emoji.unicode} ${emoji.name} is typically used to ${emoji.usageContexts[0]?.toLowerCase() || "express a specific feeling"}, whereas ${primaryRelated.unicode} ${primaryRelated.name} conveys ${primaryRelated.keywords?.[0] || "a different nuance"}. Choose based on the exact tone you want to communicate.`
        : `Simply click on the ${emoji.unicode} emoji on the emoji page to instantly copy it to your clipboard. Then paste it anywhere you need.`,
    },
  ];
};

export const buildEmojiStructuredData = (
  emoji: Emoji,
  primaryRelated?: Emoji | null
): SchemaObject[] => {
  const editorial = getTopEmojiEditorial(emoji);
  const seo = getEmojiSeoMeta(emoji);
  const category = getCategoryBySlug(emoji.categorySlug);
  const pageUrl = `${BASE_URL}/emoji/${emoji.slug}/`;
  const faqItems = buildEmojiFaqItems(emoji, primaryRelated);

  return [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: seo.ogTitle ?? `${emoji.unicode} ${emoji.name} Emoji Meaning`,
      description: seo.description,
      url: pageUrl,
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
      isPartOf: {
        "@type": "WebSite",
        name: "Allemojipedia",
        url: `${BASE_URL}/`,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "DefinedTerm",
      name: `${emoji.unicode} ${emoji.name}`,
      description: editorial?.snippetAnswer ?? emoji.shortMeaning,
      url: pageUrl,
      inDefinedTermSet: {
        "@type": "DefinedTermSet",
        name: "Unicode Emoji",
        url: "https://unicode.org/emoji/",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_URL}/` },
        {
          "@type": "ListItem",
          position: 2,
          name: category?.name ?? "Category",
          item: `${BASE_URL}/category/${emoji.categorySlug}/`,
        },
        { "@type": "ListItem", position: 3, name: `${emoji.unicode} ${emoji.name}` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: `How to Copy and Use ${emoji.unicode} ${emoji.name} Emoji`,
      description: `Learn how to copy the ${emoji.name} emoji and use it in your messages, social media, and more.`,
      step: [
        {
          "@type": "HowToStep",
          name: "Click to Copy",
          text: `Click on the ${emoji.unicode} emoji on the page to copy it instantly.`,
        },
        {
          "@type": "HowToStep",
          name: "Paste Anywhere",
          text: "Paste the emoji in any app - WhatsApp, Instagram, Twitter, Facebook, or any text field.",
        },
        {
          "@type": "HowToStep",
          name: "Use in Context",
          text: `Use ${emoji.unicode} when ${emoji.usageContexts[0]?.toLowerCase() || "expressing this emotion"}.`,
        },
      ],
    },
  ];
};
