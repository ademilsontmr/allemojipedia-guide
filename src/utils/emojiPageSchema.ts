import type { Emoji } from "@/data/emojis";
import { getCategoryBySlug } from "@/data/categories";
import { editorialMeta, formatUnicodeCodepoint, getUnicodeCodepointHex } from "@/data/editorialMeta";
import { getTopEmojiEditorial } from "@/data/topEmojiEditorial";
import { getEmojiSeoMeta } from "@/data/seoMeta";
import { getEnrichedExamples } from "@/utils/emojiUniqueContent";

const BASE_URL = "https://allemojipedia.com";

export type SchemaObject = Record<string, unknown>;

export const buildEmojiFaqItems = (emoji: Emoji, primaryRelated?: Emoji | null) => {
  const editorial = getTopEmojiEditorial(emoji);
  const faqs = [...editorial.faqs];

  if (primaryRelated && !faqs.some((item) => item.question.includes("difference"))) {
    faqs.push({
      question: `What is the difference between ${emoji.unicode} and ${primaryRelated.unicode}?`,
      answer: `${emoji.unicode} ${emoji.name} fits messages about ${emoji.usageContexts[0]?.toLowerCase() || "this topic"}, while ${primaryRelated.unicode} ${primaryRelated.name} leans toward ${primaryRelated.usageContexts[0]?.toLowerCase() || "a different tone"}. Compare both in context before choosing.`,
    });
  }

  if (!faqs.some((item) => item.question.toLowerCase().includes("copy"))) {
    faqs.push({
      question: `How do I copy ${emoji.unicode}?`,
      answer: `Tap or click the ${emoji.unicode} emoji at the top of this page to copy it, then paste into WhatsApp, iMessage, Instagram, TikTok, or any text field.`,
    });
  }

  return faqs.slice(0, 6);
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
      description: editorial.snippetAnswer,
      url: pageUrl,
      ...(formatUnicodeCodepoint(emoji.unicode)
        ? { termCode: formatUnicodeCodepoint(emoji.unicode) }
        : {}),
      sameAs: [
        ...(getUnicodeCodepointHex(emoji.unicode)
          ? [
              `https://util.unicode.org/UnicodeJsps/character.jsp?a=${getUnicodeCodepointHex(emoji.unicode)}`,
              `https://unicode.org/emoji/charts/full-emoji-list.html#${getUnicodeCodepointHex(emoji.unicode)}`,
            ]
          : []),
        `https://emojipedia.org/${emoji.slug}/`,
      ],
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
          text: `Use ${emoji.unicode} when ${emoji.usageContexts[0]?.toLowerCase() || "expressing this emotion"}. Example: "${getEnrichedExamples(emoji)[0]?.text ?? emoji.shortMeaning}".`,
        },
      ],
    },
  ];
};
