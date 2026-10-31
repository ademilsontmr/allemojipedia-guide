const INLINE_LINK = /\[([^\]]+)\]\((\/[^)\s]*)\)/g;

export type InlineSegment = { text: string; href?: string };

export const splitInlineLinks = (text: string): InlineSegment[] => {
  const segments: InlineSegment[] = [];
  let last = 0;
  for (const match of text.matchAll(INLINE_LINK)) {
    const index = match.index ?? 0;
    if (index > last) segments.push({ text: text.slice(last, index) });
    segments.push({ text: match[1], href: match[2] });
    last = index + match[0].length;
  }
  if (last < text.length) segments.push({ text: text.slice(last) });
  return segments;
};

export const stripInlineLinks = (text: string): string => text.replace(INLINE_LINK, "$1");

export const renderInlineLinksHtml = (text: string, escapeHtml: (value: string) => string): string =>
  splitInlineLinks(text)
    .map((segment) =>
      segment.href
        ? `<a href="${escapeHtml(segment.href)}">${escapeHtml(segment.text)}</a>`
        : escapeHtml(segment.text)
    )
    .join("");
