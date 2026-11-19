# Writing brief: emoji pages

One JSON file per emoji at `src/content/emoji/<slug>.json`. The page template adds the
technical facts (codepoints, Unicode version, shortcodes, skin tones) automatically, so the
file holds only editorial copy. Audience: English speakers who searched "what does X emoji mean".

## Quality bar (the reason this site was rebuilt)

Google declined to index the previous version because pages read as templated. Every file must
read as if a knowledgeable editor wrote it about THIS emoji specifically.

- Say something specific and true. Lead with how people actually use the emoji today, including
  slang, irony, generational and platform differences where they really exist.
- No filler and no template phrases ("In today's digital world", "versatile emoji", "adds a touch
  of", "whether you're... or..."). Never repeat the same sentence skeleton across emojis.
- Do not invent facts. No made-up statistics, studies, dates, rankings or quotes. Unicode
  version/year is supplied in the input: use that, nothing else. Mention platform design
  differences (Apple/Google/Samsung/Microsoft/WhatsApp) only when you are confident they are real
  (e.g. the pistol became a water gun; Samsung's old cookie was crackers); otherwise describe
  the design generally or say designs are consistent.
- If an emoji has little slang life (a taco, a paperclip), do not fake one. Go deeper on literal
  use, captions, cultural associations, common pairings and confusions instead.
- Sensitive meanings (sexual, drugs, self-harm, politics, religion): explain plainly and neutrally,
  like a dictionary. Flags of disputed territories: stick to neutral facts.
- Plain text only: no markdown, no HTML, no links. American English. Curly or straight quotes fine.
- The old-site copy in the input (`old`) is raw material only. Keep what is accurate, but rewrite;
  do not copy sentences.

## Schema (all fields required unless marked optional)

```json
{
  "slug": "skull",
  "title": "Skull Emoji 💀 Meaning: “I’m Dead” Explained",
  "description": "150-160 char meta description that answers the question and gives a reason to click.",
  "summary": "40-60 words. Direct answer to 'what does this emoji mean', written to stand alone.",
  "meaning": ["3 or 4 paragraphs, 60-110 words each: what it means, how the meaning developed, literal vs figurative use, who uses it how."],
  "contexts": [{ "label": "In texting", "body": "50-90 words" }],
  "examples": [{ "text": "a realistic message containing the emoji", "meaning": "what the sender means, 10-25 words" }],
  "combos": [{ "combo": "💀😭", "meaning": "10-25 words" }],
  "confusedWith": [{ "slug": "skull-and-crossbones", "difference": "25-50 words on how they differ" }],
  "avoid": ["When NOT to use it, one sentence each"],
  "design": "40-90 words on what the glyph depicts and any real cross-platform differences.",
  "faqs": [{ "q": "A question people really search", "a": "30-70 word answer" }],
  "related": ["six", "slugs", "of", "related", "emojis", "here"]
}
```

Counts: `meaning` 3-4, `contexts` 3-4, `examples` 5-6, `combos` 3-4, `confusedWith` 2-3,
`avoid` 2-3, `faqs` 4-5, `related` exactly 6.

- `title`: 45-60 characters, includes the emoji character and the word "Emoji", no site name.
  Vary the hook after the colon; do not use the same pattern for every emoji.
- `contexts` labels: choose the 3-4 that matter for this emoji, e.g. "In texting", "On TikTok and
  Instagram", "From a crush", "At work", "In sports", "In captions", "Around the world",
  "On holidays", "In gaming". Flags: who uses it and when (national days, sport, diaspora, travel).
- `faqs`: do not restate the summary. Answer distinct questions (vs. another emoji, from a guy/girl,
  is it rude, what it means on a specific app, when it was added).
- `confusedWith.slug` and `related` must be slugs that exist in `src/data/emojis.json`. Prefer
  slugs listed in `src/data/curated.json` (those have their own page). Never list the emoji itself.
- Total editorial length per file: roughly 600-850 words.

## Validate

Run `node scripts/validate-content.mjs` (optionally followed by slugs) and fix every error it reports.
