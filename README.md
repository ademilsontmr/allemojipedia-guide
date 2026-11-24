# Allemojipedia

Static emoji reference site built with [Astro](https://astro.build). Every page is plain HTML;
JavaScript is used only for copy buttons, search and the flag quiz.

## Commands

| Command | What it does |
|---|---|
| `npm run dev` | Local dev server at http://localhost:4321 |
| `npm run build` | Builds `dist/` and writes `dist/_redirects` (old URLs → new) |
| `npm run validate` | Checks emoji pages and guides against the writing briefs |
| `npm run data` | Regenerates `src/data/emojis.json` and `curated.json` from Unicode data |
| `npm run deploy` | Build and deploy to Cloudflare Pages |
| `python3 -I scripts/audit-keywords.py` | After a build: checks every page has a unique primary keyword present in its title, H1 and description |
| `python3 -I scripts/audit-html.py` | After a build: HTML structure and accessibility checks (ids, alt text, labels, heading order, link text) |
| `npm run indexnow` | Submit every sitemap URL to IndexNow (Bing, Yandex) after a deploy |

## Content

- `src/content/emoji/<slug>.json`: editorial copy for one emoji page (`/emojis/<slug>/`). Brief: `docs/emoji-page-brief.md`.
- `src/content/guides/<slug>.md`: long-form guides (`/guides/<slug>/`). Brief: `docs/guide-brief.md`.
- `scripts/curated-picks.txt`: which emojis get their own page. An emoji needs both an entry here and a content file.
- `src/data/categories.json`: the nine category pages (`/categories/<slug>/`), which list every emoji for copy and paste.

Set `updated` (emoji JSON) or `updatedDate` (guide frontmatter) only when the content really changes;
the sitemap's `lastmod` comes from those dates, not from the build date.

## URLs

`/`, `/emojis/`, `/emojis/<slug>/`, `/categories/`, `/categories/<slug>/`, `/guides/`, `/guides/<slug>/`,
`/flag-emoji-quiz/`, `/search/` (noindex), `/about/`, `/editorial-policy/`, `/contact/`, `/privacy/`, `/sitemap.xml`.
