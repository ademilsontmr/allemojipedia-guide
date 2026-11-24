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
