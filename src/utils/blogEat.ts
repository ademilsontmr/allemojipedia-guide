import type { BlogPost } from "@/data/blogPosts";
import { editorialMeta } from "@/data/editorialMeta";

export type BlogHeading = { id: string; text: string };

export const formatBlogDate = (iso: string): string =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });

export const getBlogDateModified = (post: Pick<BlogPost, "date">): string =>
  post.date > editorialMeta.blogReviewedIso ? post.date : editorialMeta.blogReviewedIso;

const slugifyHeading = (text: string): string =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 72) || "section";

const stripInlineMarkdown = (text: string): string =>
  text.replace(/\*\*(.+?)\*\*/g, "$1").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").trim();

/** H2s outside fenced code, in document order — used for TOC and heading ids. */
export const getBlogHeadings = (content: string): BlogHeading[] => {
  const prose = content
    .split("```")
    .filter((_, index) => index % 2 === 0)
    .join("\n");
  const seen = new Map<string, number>();
  const headings: BlogHeading[] = [];

  for (const line of prose.split("\n")) {
    if (!line.startsWith("## ") || line.startsWith("### ")) continue;
    const text = stripInlineMarkdown(line.slice(3));
    let id = slugifyHeading(text);
    const count = (seen.get(id) ?? 0) + 1;
    seen.set(id, count);
    if (count > 1) id = `${id}-${count}`;
    headings.push({ id, text });
  }

  return headings;
};

export const getBlogToc = (post: Pick<BlogPost, "content" | "faqs">): BlogHeading[] => {
  const headings = getBlogHeadings(post.content);
  headings.push({ id: "sources", text: "Sources" });
  if (post.faqs?.length) headings.push({ id: "frequently-asked-questions", text: "FAQ" });
  return headings;
};

export const getBlogUpdateNote = (post: Pick<BlogPost, "title">): string => {
  const shortTitle = post.title.replace(/\s*\(20\d{2}\)\s*$/, "").replace(/:.*$/, "");
  return `Updated ${formatBlogDate(editorialMeta.blogReviewedIso)}: Reviewed “${shortTitle}” for E-E-A-T — editorial byline, publication and review dates, Unicode and CLDR sources, and an on-page table of contents.`;
};

export const getBlogTopicLabel = (post: Pick<BlogPost, "keywords">): string => {
  const first = post.keywords?.split(",")[0]?.trim();
  if (!first) return "Emoji Guide";
  return first.replace(/\b\w/g, (letter) => letter.toUpperCase());
};
