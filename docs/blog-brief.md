# Writing brief: the blog (emoji news)

One Markdown file per post at `src/content/blog/<slug>.md`, served at `/blog/<slug>/`. The blog is for
**dated news and analysis**: Unicode releases and draft candidates, when new emojis reach each platform,
design changes, and news about Allemojipedia itself. Evergreen how-tos and meanings belong in
`src/content/guides/` instead; link to them from posts.

## Rules

- Every fact must be checkable. Unicode and platform news cite a primary source in `sources` (unicode.org,
  the vendor's own release notes or blog). Never report something only another emoji site has reported
  unless the post says so and names it.
- Never backdate. `pubDate` is the day the post is written; correct later with `updatedDate`.
- Lead with the news in the first two sentences: what happened, when, what it means for the reader.
- No filler, no invented quotes, numbers or release dates. If timing is uncertain, say so.
- American English. Plain, specific headlines in title case.

## Frontmatter (YAML)

```yaml
---
title: "35-65 characters, the headline"
description: "135-165 characters for search results"
dek: "15-50 words shown under the headline and on cards."
category: "Unicode Emoji Update"   # or Platform Emoji Update, Emoji Culture, Allemojipedia News
pubDate: 2026-11-24
hero: "🥒 🦋 🌠 🗼"                 # 3-8 emojis with Twemoji artwork: header collage and social image
keywords: ["primary keyword first, unique on the site", "secondary"]
sources:                           # required for Unicode and Platform updates
  - name: "Unicode: Emoji Recently Added, v18.0"
    url: "https://www.unicode.org/emoji/charts-18.0/emoji-released.html"
related: ["other-post-slugs"]
---
```

## Body

500-1,800 words, 3-8 `##` sections, no H1. 4-20 internal links ending in a slash: emoji pages
`/emojis/<slug>/` (curated slugs only), guides `/guides/<slug>/`, other posts `/blog/<slug>/`, symbol pages,
categories and the main hubs. At most 4 external links in the body (sources go in frontmatter).

Validate with `node scripts/validate-blog.mjs <slug>`.
