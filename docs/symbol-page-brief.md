# Writing brief: text symbol and kaomoji pages

One Markdown file per page at `src/content/symbols/<slug>.md`, served at `/<slug>/` by
`src/pages/[symbolset].astro`. These are copy-and-paste tool pages: the reader came to copy something,
so the sets come first and the article after them explains, organizes and answers questions.
Audience: English speakers. American English.

## Pages (slug list read by scripts/validate-symbols.mjs)

| slug | topic |
|---|---|
| text-symbols | Hub: the most useful Unicode text symbols to copy (hearts, stars, arrows, checkmarks, bullets, math, currency, brackets, music, weather, zodiac, chess and cards) and links to every focused page |
| kaomoji | Japanese-style text faces (^_^) by emotion: happy, love, sad, angry, surprised, shrug, table flip, embarrassed, animals, actions |
| cute-symbols | Aesthetic and cute symbols for bios, captions and usernames: tiny hearts, flowers, sparkles, stars, bows, brackets, dividers and ready-made combos |
| heart-symbols | Every heart to copy: text hearts (♡ ♥ ❥ ❣ ღ), heart emojis by color, heart combos and borders |
| star-symbols | Star symbols and star emojis to copy: ★ ☆ ✦ ✧ ✩ ✪ ✫ ⭐ 🌟 ✨, sparkles, asterisks and rating stars |

## Quality bar

Google declined to index this site's earlier version because pages read as templated or scaled.
Each page must be the one a careful editor would want to rank: specific, accurate, organized for the
person who wants to copy something quickly.

- Do not invent facts: no statistics, studies, dates or claims about fonts or apps you are not sure of.
  Unicode names are added automatically, so do not restate them for every symbol.
- No filler or AI-sounding phrases ("in today's digital world", "elevate your", "let's dive in").
- The sets are the product. Group them the way a reader thinks (by look or by use), put the most
  wanted symbols first, avoid near-duplicates that look identical, and only use characters that display
  on current iPhone, Android, Windows and Mac fonts. Avoid private-use and obscure script characters.
- Kaomoji: classic, widely used faces only. No slurs, sexual faces or faces mocking ethnic features.

## Frontmatter (YAML)

```yaml
---
title: "40-64 characters, includes the primary keyword, no site name"
description: "135-165 characters, includes the primary keyword, says what the reader can copy"
h1: "Short page heading, e.g. Heart symbols"
lead: "25-70 words that answer the search directly: what these are and how to copy them."
hero: "♡"
keywords: ["primary keyword first, unique to this page", "secondary", "secondary"]
published: "2026-11-24"
sets:
  - id: "text-hearts"          # lowercase-hyphen, unique on the page; becomes the #anchor
    title: "Text hearts"
    note: "Optional one sentence of guidance shown under the title."
    chars: "♡ ♥ ❤ ❥ ❣ ღ"       # single symbols separated by spaces, 6-60 per set
  - id: "happy"
    title: "Happy kaomoji"
    items: ["(◕‿◕)", "(＾▽＾)"] # multi-character items (kaomoji, combos, borders), 6-60 per set
faqs:                          # 4-6 questions people really search, 25-90 word answers
  - q: "..."
    a: "..."
related: ["other-symbol-page-slugs"]
---
```

`sets`: 5-12 per page. Each set uses exactly one of `chars` or `items`.

## Body (Markdown, after the frontmatter)

900-1,800 words, 4-8 `##` sections, no H1, no FAQ or Conclusion heading (the FAQ renders from
frontmatter). Explain what the symbols are, what they mean or signal where that is real, where they
work (bios, usernames, games, documents) and where they do not (some fonts, screen readers, games that
filter characters), how to type them without copy and paste on Windows, Mac, iPhone and Android where
that is genuinely possible, and accessibility (screen readers read each symbol aloud by name, so long
decorative strings are tiring to hear). Include at least one table.

Internal links, 6-20, all ending in a slash: other symbol pages `/<slug>/` from the list above, emoji
pages `/emojis/<slug>/` only for slugs in `src/data/curated.json`, category pages
`/categories/<slug>/`, guides `/guides/<slug>/` from `docs/guide-list.md`, and `/emoji-copy-and-paste/`,
`/what-does-this-emoji-mean/`, `/emojis/`, `/categories/`, `/guides/`. External links: at most 3, only
authoritative pages you are sure exist (e.g. https://www.unicode.org/charts/).

## Validate

`node scripts/validate-symbols.mjs <slug>` and fix every error. Running it with no arguments validates
every page and refreshes `src/data/symbol-names.json`, the Unicode names used for copy-button labels.
