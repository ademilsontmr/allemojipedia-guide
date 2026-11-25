export const SITE = {
  name: "Allemojipedia",
  url: "https://allemojipedia.com",
  tagline: "Emoji meanings, explained properly",
  description: "Emoji meanings explained in plain English, with real message examples, look-alike comparisons and one-tap copy and paste for every emoji.",
  /** Date the rebuilt site's content was written; used when a page has no later `updated` date. */
  launched: "2026-11-19",
  team: "Allemojipedia Editorial Team",
  email: "smartxdigitalx@gmail.com",
  adsenseClient: "ca-pub-7369074864505211",
  ogImage: "/og-image.png",
};

export const abs = (path: string) => new URL(path, SITE.url).href;

export const fmtDate = (iso: string | Date) =>
  new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });

/** Date every emoji page last changed as a set (2026-11-24: each page got its own title and reworded FAQs). */
const EMOJI_REVISED = "2026-11-24";
/** Last-reviewed date of an emoji page: its own `updated` date, else the later of its publication and the last site-wide revision. */
export const reviewDate = (d: { published?: string; updated?: string }) =>
  d.updated ?? ((d.published ?? SITE.launched) > EMOJI_REVISED ? d.published! : EMOJI_REVISED);
