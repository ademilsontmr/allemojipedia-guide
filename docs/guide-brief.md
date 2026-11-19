# Writing brief: guides (the blog)

One Markdown file per guide at `src/content/guides/<slug>.md`. These are pillar articles: each one
should be the page a careful editor would want to rank for its topic. Audience: English speakers.

## Quality bar

- 1,900-2,700 words of body copy. Depth comes from specifics: real examples of messages, concrete
  differences, edge cases, step-by-step instructions that actually work, not from padding.
- Open with a 2-3 sentence answer to the main question. No throat-clearing intros.
- Do not invent facts: no made-up statistics, surveys, studies, quotes, dates or product features.
  State only what you are confident is true as of late 2026; where things vary by app version or
  region, say so. Attribute by name where relevant (Unicode Consortium, CLDR, Apple, Google).
- No filler or AI-sounding phrases ("In today's digital world", "it's important to note",
  "let's dive in", "game-changer", "ever-evolving"). No keyword stuffing. American English.
- Sensitive topics (sexual slang, drugs, religion, politics): plain, neutral, dictionary tone.

## Structure

- Frontmatter (YAML), all fields required:

```yaml
---
title: "45-62 characters, no site name"
description: "145-160 character meta description"
excerpt: "One or two sentences for listing cards (under 200 characters)."
pubDate: 2026-11-18
category: "Meanings"   # one of: Meanings, Platforms, How-to, Culture, Flags, Holidays
heroEmoji: "💬"         # a single emoji that represents the guide
keyTakeaways:
  - "3 to 5 one-sentence takeaways"
faqs:
  - q: "5 or 6 questions people really search, not repeating headings verbatim"
    a: "40-80 word answer"
related: ["three-other", "guide-slugs", "from-the-list"]
---
```

- Body: Markdown. No H1 (the template renders the title). 6-10 `##` sections with descriptive
  headings, `###` where useful. Include at least one Markdown table (comparison/quick reference)
  and at least two lists. Do not write an FAQ section or a "Key takeaways" section in the body;
  the template renders those from frontmatter. Do not end with a generic "Conclusion" heading;
  end with something useful (a checklist, a quick-reference table, a rule of thumb).
- Internal links (12-25 per guide, natural anchors): emoji pages `/emojis/<slug>/` ONLY for slugs in
  `src/data/curated.json`; category pages `/categories/<category-slug>/` (smileys-and-emotion,
  people-and-body, animals-and-nature, food-and-drink, travel-and-places, activities, objects,
  symbols, flags); the quiz `/flag-emoji-quiz/`; other guides `/guides/<slug>/` using only slugs
  from `docs/guide-list.md`. All internal links end with a trailing slash.
- External links: at most 3, only to authoritative pages you are sure exist (e.g.
  https://unicode.org/emoji/charts/full-emoji-list.html, https://home.unicode.org/emoji/).

## Validate

Run `node scripts/validate-guides.mjs <slug> ...` and fix every error it reports.

## Holiday and collection guides (copyList)

Guides about a holiday or an emoji collection add an optional `copyList` to the frontmatter. The template
renders it as tap-to-copy rows ABOVE the article body, under the heading "Copy and paste ... emojis",
so do not repeat the full lists as plain text in the body.

```yaml
copyList:
  - title: "Food and the feast"
    emojis: "🦃 🥧 🌽 🍠 🥔 🍗 🍞 🥖 🧈 🍷 🍽️"
```

Use 5-8 rows of 6-16 emojis each, grouped the way a reader would want them. Only real emoji that exist in
`src/data/emojis.json` (no kaomoji or text symbols). Put the most expected emojis first in each row.
