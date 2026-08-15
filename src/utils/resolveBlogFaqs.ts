import type { BlogPost } from "@/data/blogPosts";
import { blogFaqsLote1 } from "@/data/blogFaqsLote1";
import { blogFaqsLote2 } from "@/data/blogFaqsLote2";
import { blogFaqsLote3 } from "@/data/blogFaqsLote3";
import { blogFaqsLote4 } from "@/data/blogFaqsLote4";
import { blogFaqsLote5 } from "@/data/blogFaqsLote5";

export type BlogFaq = { question: string; answer: string };

const stripMd = (s: string): string =>
  s
    .replace(/\*\*/g, "")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\|/g, " ")
    .replace(/^[-*]\s+/gm, "")
    .replace(/\s+/g, " ")
    .trim();

const firstSentences = (text: string, max = 240): string => {
  const clean = stripMd(text);
  const parts = clean.split(/(?<=[.!?])\s+/).filter(Boolean);
  let out = "";
  for (const part of parts) {
    const next = out ? `${out} ${part}` : part;
    if (next.length > max && out) break;
    out = next;
    if (out.length >= max * 0.65) break;
  }
  const result = out || clean.slice(0, max);
  return /[.!?]$/.test(result) ? result : `${result}.`;
};

const sectionBody = (content: string, heading: string): string | null => {
  const re = new RegExp(`##\\s*${heading}\\s*\\n+([\\s\\S]*?)(?=\\n##\\s|$)`, "i");
  const match = content.match(re);
  if (!match?.[1]) return null;
  const body = stripMd(match[1]);
  return body.length > 40 ? body : null;
};

/** Prefer a stable, post-unique label for FAQ questions. */
const topicLabel = (post: BlogPost): string => {
  const cleaned = post.title.replace(/\s*\(?20\d{2}\)?\s*$/i, "").trim();
  // Keep subtitle after ":" when the left side alone would collide across posts
  if (cleaned.includes(":")) {
    return cleaned.length > 90 ? `${cleaned.slice(0, 87)}…` : cleaned;
  }
  const before = cleaned.split(/[—–|]/)[0]?.trim() || cleaned;
  return before;
};

const primaryKeyword = (post: BlogPost): string => {
  const first = post.keywords?.split(",")[0]?.trim();
  return first || topicLabel(post).toLowerCase();
};

const hashSlug = (slug: string): number => {
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) >>> 0;
  return h;
};

const pick = <T>(items: T[], slug: string, salt: number): T =>
  items[(hashSlug(slug) + salt) % items.length];

/**
 * Prefer author FAQs; otherwise build 5 unique Q&As from title, excerpt, and sections.
 * Questions always include post-specific topic/keyword/emoji so they stay exclusive.
 */
export function resolveBlogFaqs(post: BlogPost): BlogFaq[] {
  if (post.faqs && post.faqs.length > 0) return post.faqs;
  const loteFaqs =
    blogFaqsLote1[post.slug] ??
    blogFaqsLote2[post.slug] ??
    blogFaqsLote3[post.slug] ??
    blogFaqsLote4[post.slug] ??
    blogFaqsLote5[post.slug];
  if (loteFaqs?.length) return loteFaqs;

  const topic = topicLabel(post);
  const kw = primaryKeyword(post);
  const emoji = post.image?.trim() || "";
  const emojiBit = emoji ? ` ${emoji}` : "";
  const quick =
    sectionBody(post.content, "Quick answer") ||
    sectionBody(post.content, "Bottom line") ||
    firstSentences(post.excerpt);
  const bottom = sectionBody(post.content, "Bottom line");
  const slug = post.slug;
  const isMeaning = /meaning|what-does|explained|decoded/i.test(`${slug} ${post.title}`);
  const isList = /list|copy|combos?|keyboard|kitchen|shortcut/i.test(`${slug} ${post.title}`);
  const isVs = /\bvs\b|difference|compare/i.test(`${slug} ${post.title}`);

  const q1 = isMeaning
    ? {
        question: `What does ${kw} mean in “${topic}”?`,
        answer: firstSentences(quick),
      }
    : isList
      ? {
          question: `How do I copy or use ${topic}?`,
          answer: firstSentences(
            `${quick} Open the matching Allemojipedia hub or emoji page, tap to copy, then paste into your chat or caption.`,
          ),
        }
      : {
          question: `What does the “${topic}” guide cover?`,
          answer: firstSentences(`${post.excerpt} ${quick}`),
        };

  const q2Variants: BlogFaq[] = [
    {
      question: `When should I use ideas from “${topic}”${emojiBit ? ` (${emoji})` : ""} in a text or comment?`,
      answer: firstSentences(
        `Use them when the tone matches this guide: ${post.excerpt} Context from the rest of the message matters more than the symbol alone.`,
      ),
    },
    {
      question: `Is “${topic}” guidance okay for work or group chats?`,
      answer: firstSentences(
        `It depends on your audience. ${quick} Prefer clearer words for formal email, and keep playful emoji use for friends or casual channels.`,
      ),
    },
    {
      question: `Does “${topic}” change on TikTok or Instagram?`,
      answer: firstSentences(
        `Platform slang can amplify or flip the tone. ${post.excerpt} Read the caption and comments around${emojiBit} before assuming the dictionary meaning.`,
      ),
    },
  ];

  const q3Variants: BlogFaq[] = isVs
    ? [
        {
          question: `What is the main difference covered in “${topic}”?`,
          answer: firstSentences(quick),
        },
      ]
    : [
        {
          question: `What is a common mistake when applying “${topic}”?`,
          answer: firstSentences(
            `A common mistake is reading${emojiBit} without context or swapping it for a lookalike face. ${bottom || quick} Match the symbol to the feeling you actually mean.`,
          ),
        },
        {
          question: `Can tips in “${topic}” read as flirty, funny, or serious?`,
          answer: firstSentences(
            `Yes—tone shifts with relationship and wording. ${post.excerpt} Pair${emojiBit} with clear text when you need the intent to land cleanly.`,
          ),
        },
        {
          question: `How is “${topic}” different from similar emoji guides?`,
          answer: firstSentences(
            `${quick} Similar faces can share a vibe but differ in intensity, romance, sarcasm, or platform slang—use this article’s comparisons before swapping them.`,
          ),
        },
      ];

  const q4: BlogFaq = {
    question: `How do I copy emojis from the “${topic}” article${emojiBit}?`,
    answer: firstSentences(
      emoji
        ? `Tap ${emoji} on its Allemojipedia emoji page or use the emoji copy-and-paste hub, then paste into WhatsApp, iMessage, Instagram, or Slack. The character is Unicode, so it pastes on iPhone and Android.`
        : `Use the linked emoji pages and copy hubs in this guide. Tap an emoji to copy, then paste into your app—Unicode characters work across phones even when artwork differs.`,
    ),
  };

  const q5Variants: BlogFaq[] = [
    {
      question: `What is the quick takeaway from “${topic}”?`,
      answer: firstSentences(bottom || quick || post.excerpt),
    },
    {
      question: `Who should read the “${topic}” guide?`,
      answer: firstSentences(
        `This guide is for anyone searching ${kw} who wants a clear meaning, copy-ready symbols, and texting examples—not just a bare emoji dump. ${post.excerpt}`,
      ),
    },
    {
      question: `Should I stack many emojis after reading “${topic}”?`,
      answer: firstSentences(
        `One well-chosen${emojiBit} is usually clearer than a long stack. Repeating the same face can feel meme-heavy or dramatic; add words if the tone might be misread.`,
      ),
    },
  ];

  const faqs = [q1, pick(q2Variants, slug, 1), pick(q3Variants, slug, 2), q4, pick(q5Variants, slug, 3)];

  // Guarantee unique question strings within the post
  const seen = new Set<string>();
  return faqs.filter((faq) => {
    const key = faq.question.toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}
