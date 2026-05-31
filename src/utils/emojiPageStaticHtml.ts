import type { Emoji } from "@/data/emojis";
import { getCategoryBySlug } from "@/data/categories";
import { getEmojiIntentClustersForEmoji } from "@/data/emojiIntentClusters";
import { popularComparisons } from "@/data/emojiComparisons";
import { getTopEmojiEditorial } from "@/data/topEmojiEditorial";
import { getEmojiContextPagesForEmoji } from "@/data/emojiContextPages";
import { editorialMeta } from "@/data/editorialMeta";
import { buildEmojiFaqItems } from "@/utils/emojiPageSchema";

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export type EmojiStaticHtmlOptions = {
  emoji: Emoji;
  relatedEmojis?: Emoji[];
  categoryEmojis?: Emoji[];
};

export const getDeterministicCategoryEmojis = (
  emoji: Emoji,
  allEmojis: Emoji[],
  count = 3
): Emoji[] =>
  allEmojis
    .filter((item) => item.categorySlug === emoji.categorySlug && item.slug !== emoji.slug)
    .sort((a, b) => a.slug.localeCompare(b.slug))
    .slice(0, count);

export const buildEmojiStaticArticleHtml = ({
  emoji,
  relatedEmojis = [],
  categoryEmojis = [],
}: EmojiStaticHtmlOptions): string => {
  const category = getCategoryBySlug(emoji.categorySlug);
  const editorial = getTopEmojiEditorial(emoji);
  const contextPages = getEmojiContextPagesForEmoji(emoji.slug);
  const intentClusters = getEmojiIntentClustersForEmoji(emoji.slug);
  const primaryRelated = relatedEmojis[0];
  const faqItems = buildEmojiFaqItems(emoji, primaryRelated);
  const primaryComparison = primaryRelated
    ? popularComparisons.find(
        ({ slug1, slug2 }) =>
          (slug1 === emoji.slug && slug2 === primaryRelated.slug) ||
          (slug1 === primaryRelated.slug && slug2 === emoji.slug)
      )
    : null;

  const usagePhrase = emoji.usageContexts[0]?.toLowerCase().startsWith("to ")
    ? emoji.usageContexts[0]?.toLowerCase()
    : `to ${emoji.usageContexts[0]?.toLowerCase() || "express this feeling"}`;

  const workAdvice = emoji.usageContexts.some((ctx) =>
    ctx.toLowerCase().includes("professional")
  )
    ? `The ${emoji.name} emoji can work well in casual workplace communication like Slack or Teams messages with colleagues you know well.`
    : `Use ${emoji.unicode} sparingly at work. It's best for informal team chats rather than emails to clients or executives.`;

  const linkList = (items: { href: string; label: string; description?: string }[]) =>
    `<ul>${items
      .map(
        (item) =>
          `<li><a href="${escapeHtml(item.href)}">${escapeHtml(item.label)}</a>${
            item.description ? `<p>${escapeHtml(item.description)}</p>` : ""
          }</li>`
      )
      .join("")}</ul>`;

  return `
    <article>
      <nav aria-label="Breadcrumb">
        <a href="/">Home</a> /
        <a href="/category/${escapeHtml(emoji.categorySlug)}/">${escapeHtml(category?.name ?? "Category")}</a> /
        <span>${escapeHtml(`${emoji.unicode} ${emoji.name}`)}</span>
      </nav>
      <p>Reviewed by ${escapeHtml(editorialMeta.teamName)} • Last updated ${escapeHtml(editorialMeta.lastUpdated)}</p>

      <h1>${escapeHtml(`${emoji.unicode} ${emoji.name} Emoji: Meaning and How to Use`)}</h1>
      <p>${escapeHtml(emoji.shortMeaning)}</p>

      <section>
        <p><strong>Copy ${escapeHtml(emoji.unicode)} ${escapeHtml(emoji.name)}</strong> — tap or click the emoji on the live page to copy it to your clipboard for WhatsApp, iMessage, Instagram, and other apps.</p>
      </section>

      ${
        editorial
          ? `
      <section>
        <h2>Quick answer</h2>
        <p>${escapeHtml(editorial.snippetAnswer)}</p>
      </section>
      `
          : ""
      }

      <section>
        <h2>Quick summary</h2>
        <p>${escapeHtml(emoji.shortMeaning)} People commonly use ${escapeHtml(emoji.unicode)} ${escapeHtml(usagePhrase)}.</p>
      </section>

      ${
        contextPages.length
          ? `
      <section>
        <h2>Meaning by sender and platform</h2>
        <p>These guides explain how ${escapeHtml(emoji.unicode)} can change meaning depending on who sends it and where it appears.</p>
        ${linkList(
          contextPages.map((page) => ({
            href: `/emoji/${emoji.slug}/${page.context}/`,
            label: page.shortTitle,
            description: page.description,
          }))
        )}
      </section>
      `
          : ""
      }

      ${
        editorial
          ? `
      <section>
        <h2>${escapeHtml(`${emoji.unicode} meaning in texting and social media`)}</h2>
        <h3>In texting</h3>
        <p>${escapeHtml(editorial.textingMeaning)}</p>
        <h3>On social media</h3>
        <p>${escapeHtml(editorial.socialMeaning)}</p>
        <h3>Tone warning</h3>
        <p>${escapeHtml(editorial.caution)}</p>
      </section>
      `
          : ""
      }

      <section>
        <h2>What does the ${escapeHtml(emoji.unicode)} emoji mean?</h2>
        <p>${escapeHtml(emoji.shortMeaning)}</p>
        ${emoji.detailedMeaning
          .split("\n\n")
          .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
          .join("")}
      </section>

      <section>
        <h2>Meaning in different contexts</h2>
        <h3>In conversations</h3>
        <p>When chatting with friends or family, ${escapeHtml(emoji.unicode)} is perfect for ${escapeHtml(emoji.usageContexts[0]?.toLowerCase() || "expressing your feelings")}. It adds warmth and personality to your messages without being over the top.</p>
        <h3>On social media</h3>
        <p>On platforms like Instagram, Twitter, and WhatsApp, ${escapeHtml(emoji.unicode)} helps convey ${escapeHtml(emoji.keywords[0] || "emotion")} in captions and comments. It's widely recognized and adds emotional context to your posts.</p>
        <h3>At work</h3>
        <p>${escapeHtml(workAdvice)}</p>
      </section>

      <section>
        <h2>How to use the ${escapeHtml(emoji.unicode)} emoji correctly</h2>
        <p>The ${escapeHtml(emoji.name)} emoji works best when you want to ${escapeHtml(emoji.usageContexts[0]?.toLowerCase() || "express a specific feeling")}. Here are the best practices:</p>
        <ul>${emoji.usageContexts.map((context) => `<li>${escapeHtml(context)}</li>`).join("")}</ul>
      </section>

      <section>
        <h2>Examples</h2>
        <ul>${emoji.examples
          .slice(0, 5)
          .map(
            (example) =>
              `<li><strong>${escapeHtml(example.context)}:</strong> ${escapeHtml(example.text)}</li>`
          )
          .join("")}</ul>
      </section>

      <section>
        <h2>Meaning by intent</h2>
        <p>The ${escapeHtml(emoji.unicode)} ${escapeHtml(emoji.name)} emoji can change tone depending on the message around it. In texting, it often helps clarify emotion; on social media, it can work as a fast reaction, caption signal, or community shorthand.</p>
        ${
          intentClusters.length
            ? linkList(
                intentClusters.map((cluster) => ({
                  href: `/emoji-meanings/${cluster.slug}/`,
                  label: cluster.shortTitle,
                  description: cluster.description,
                }))
              )
            : ""
        }
      </section>

      ${
        editorial
          ? `
      <section>
        <h2>Popular searches for ${escapeHtml(emoji.unicode)}</h2>
        <ul>${editorial.searchIntents.map((intent) => `<li>${escapeHtml(intent)}</li>`).join("")}</ul>
      </section>
      `
          : ""
      }

      <section>
        <h2>When NOT to use the ${escapeHtml(emoji.unicode)} emoji</h2>
        <p>While ${escapeHtml(emoji.unicode)} is versatile, there are situations where it may be misunderstood or inappropriate:</p>
        <ul>
          <li>Avoid using ${escapeHtml(emoji.unicode)} in formal emails or professional documents where emojis may seem unprofessional.</li>
          <li>Skip it when delivering serious or sensitive news — the tone may come across as dismissive.</li>
          ${emoji.misunderstandings.map((item) => `<li>Be careful: ${escapeHtml(item.toLowerCase())}</li>`).join("")}
          <li>Consider your audience — older recipients or different cultures may interpret it differently.</li>
        </ul>
      </section>

      <section>
        <h2>Frequently asked questions</h2>
        ${faqItems
          .map(
            (item) => `
          <div>
            <h3>${escapeHtml(item.question)}</h3>
            <p>${escapeHtml(item.answer)}</p>
          </div>
        `
          )
          .join("")}
      </section>

      <section>
        <h2>Editorial review and sources</h2>
        <p>This emoji guide is reviewed by ${escapeHtml(editorialMeta.teamName)}. We combine Unicode naming, CLDR annotations, and common usage patterns from texting and social platforms.</p>
        <ul>${editorialMeta.sources
          .map(
            (source) =>
              `<li><a href="${escapeHtml(source.url)}" rel="nofollow">${escapeHtml(source.name)}</a></li>`
          )
          .join("")}</ul>
      </section>

      ${
        relatedEmojis.length
          ? `
      <section>
        <h2>Related emojis</h2>
        <p>Here are some emojis that are similar or related to ${escapeHtml(emoji.unicode)} ${escapeHtml(emoji.name)}:</p>
        <ul>${relatedEmojis
          .map(
            (related) =>
              `<li><a href="/emoji/${escapeHtml(related.slug)}/">${escapeHtml(`${related.unicode} ${related.name}`)}</a></li>`
          )
          .join("")}</ul>
      </section>
      `
          : ""
      }

      ${
        emoji.variations && emoji.variations.length
          ? `
      <section>
        <h2>Variations &amp; Skin Tones</h2>
        <ul>${emoji.variations
          .map(
            (variation) =>
              `<li>${escapeHtml(variation.emoji)} — ${escapeHtml(variation.description)}</li>`
          )
          .join("")}</ul>
      </section>
      `
          : ""
      }

      <section>
        <h2>Explore More Emojis</h2>
        <ul>
          <li><a href="/category/${escapeHtml(emoji.categorySlug)}/">Browse all ${escapeHtml(category?.name ?? "emojis in this category")}</a></li>
          ${
            primaryRelated
              ? `<li><a href="${primaryComparison ? `/emoji/${primaryComparison.slug1}-vs-${primaryComparison.slug2}/` : `/emoji/${primaryRelated.slug}/`}">${primaryComparison ? "Compare" : "Related"}: ${escapeHtml(`${emoji.unicode} and ${primaryRelated.unicode} ${primaryRelated.name}`)}</a></li>`
              : ""
          }
        </ul>
      </section>

      ${
        categoryEmojis.length
          ? `
      <section>
        <h2>You Might Also Like</h2>
        <ul>${categoryEmojis
          .map(
            (item) =>
              `<li><a href="/emoji/${escapeHtml(item.slug)}/">${escapeHtml(`${item.unicode} ${item.name}`)}</a></li>`
          )
          .join("")}</ul>
      </section>
      `
          : ""
      }
    </article>
  `;
};
