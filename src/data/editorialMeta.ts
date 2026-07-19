export type EditorialSource = {
  name: string;
  url: string;
  /** Omit or leave empty for dofollow (preferred for primary authorities). */
  rel?: "nofollow" | "noopener";
  /** primary = standards bodies; further = reference encyclopedias / vendors */
  kind?: "primary" | "further-reading";
};

export const editorialMeta = {
  siteName: "Allemojipedia",
  teamName: "Allemojipedia Editorial Team",
  /** HTML meta author — matches emoji detail pages */
  author: "Allemojipedia Editorial Team",
  /** HTML meta publisher */
  publisher: "Allemojipedia",
  lastUpdated: "July 19, 2026",
  lastUpdatedIso: "2026-07-19",
  methodologyUrl: "https://allemojipedia.com/about/",
  /**
   * Sitewide authoritative sources. Primary links are dofollow so Google
   * can treat citations to Unicode / CLDR as trust signals.
   */
  sources: [
    {
      name: "Unicode Emoji Charts",
      url: "https://unicode.org/emoji/charts/",
      kind: "primary",
    },
    {
      name: "Unicode Full Emoji List",
      url: "https://unicode.org/emoji/charts/full-emoji-list.html",
      kind: "primary",
    },
    {
      name: "Unicode CLDR Emoji Annotations",
      url: "https://cldr.unicode.org/",
      kind: "primary",
    },
    {
      name: "Unicode Emoji Proposals & Process",
      url: "https://unicode.org/emoji/proposals.html",
      kind: "primary",
    },
    {
      name: "Google Noto Color Emoji",
      url: "https://fonts.google.com/noto/specimen/Noto+Color+Emoji",
      kind: "further-reading",
    },
    {
      name: "Emojipedia — emoji encyclopedia",
      url: "https://emojipedia.org/",
      kind: "further-reading",
    },
    {
      name: "Allemojipedia editorial methodology",
      url: "https://allemojipedia.com/about/",
      kind: "further-reading",
    },
  ] satisfies EditorialSource[],
};

/** First code point of an emoji string as lowercase hex (e.g. "1f602"). */
export const getUnicodeCodepointHex = (unicode: string): string | null => {
  const first = [...unicode][0];
  if (!first) return null;
  const cp = first.codePointAt(0);
  if (cp == null) return null;
  return cp.toString(16).toLowerCase();
};

/** Format U+1F602 from emoji unicode. */
export const formatUnicodeCodepoint = (unicode: string): string | null => {
  const hex = getUnicodeCodepointHex(unicode);
  return hex ? `U+${hex.toUpperCase()}` : null;
};

/**
 * Per-emoji primary + further-reading sources for ranking / E-E-A-T.
 * Deep-links the character in Unicode character tools when possible.
 */
export const getEmojiEditorialSources = (emoji: {
  unicode: string;
  slug: string;
  name: string;
}): EditorialSource[] => {
  const hex = getUnicodeCodepointHex(emoji.unicode);
  const codepoint = hex ? `U+${hex.toUpperCase()}` : null;

  const primary: EditorialSource[] = [
    ...(hex
      ? [
          {
            name: `${emoji.name} in Unicode (${codepoint})`,
            url: `https://util.unicode.org/UnicodeJsps/character.jsp?a=${hex}`,
            kind: "primary" as const,
          },
          {
            name: `${emoji.name} on Unicode Full Emoji List`,
            url: `https://unicode.org/emoji/charts/full-emoji-list.html#${hex}`,
            kind: "primary" as const,
          },
        ]
      : []),
    {
      name: "Unicode Emoji Charts",
      url: "https://unicode.org/emoji/charts/",
      kind: "primary",
    },
    {
      name: "Unicode CLDR Emoji Annotations",
      url: "https://cldr.unicode.org/",
      kind: "primary",
    },
  ];

  const further: EditorialSource[] = [
    {
      name: `${emoji.name} on Emojipedia`,
      url: `https://emojipedia.org/${emoji.slug}/`,
      kind: "further-reading",
    },
    {
      name: "Google Noto Color Emoji (Android / Gboard)",
      url: "https://fonts.google.com/noto/specimen/Noto+Color+Emoji",
      kind: "further-reading",
    },
    {
      name: "Allemojipedia editorial methodology",
      url: "https://allemojipedia.com/about/",
      kind: "further-reading",
    },
  ];

  return [...primary, ...further];
};

export const sourceLinkRel = (source: EditorialSource): string | undefined => {
  if (source.rel) return source.rel;
  // Primary standards links stay dofollow for trust citation.
  if (source.kind === "primary") return undefined;
  // Further reading / third-party encyclopedias: noopener only (still crawlable).
  return "noopener";
};
