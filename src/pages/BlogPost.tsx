import { Helmet } from "react-helmet-async";
import { Link, useParams, Navigate } from "react-router-dom";
import { Layout, Breadcrumbs } from "@/components/Layout";
import { blogPosts } from "@/data/blogPosts";
import { Clock, ArrowLeft } from "lucide-react";
import { getBlogPostSeoMeta } from "@/data/seoMeta";
import { parseMarkdownTable } from "@/utils/blogMarkdownTables";
import { resolveBlogFaqs } from "@/utils/resolveBlogFaqs";
import { getRelatedBlogPosts } from "@/utils/relatedBlogPosts";
import { EditorialSources } from "@/components/EditorialSources";
import { BlogEditorialByline } from "@/components/BlogEditorialByline";
import { editorialMeta } from "@/data/editorialMeta";
import { getBlogDateModified, getBlogHeadings, getBlogToc, getBlogTopicLabel } from "@/utils/blogEat";

// Helper function to render inline markdown (bold, italic, links)
const renderInlineMarkdown = (text: string): React.ReactNode => {
  const parts: React.ReactNode[] = [];
  let remaining = text;
  let keyIndex = 0;

  while (remaining.length > 0) {
    const linkMatch = remaining.match(/\[([^\]]+)\]\(([^)]+)\)/);
    const boldMatch = remaining.match(/\*\*(.+?)\*\*/);

    const linkIndex = linkMatch ? remaining.indexOf(linkMatch[0]) : -1;
    const boldIndex = boldMatch ? remaining.indexOf(boldMatch[0]) : -1;

    if (linkIndex === -1 && boldIndex === -1) {
      parts.push(remaining);
      break;
    }

    let firstMatchIndex = -1;
    let matchType: 'link' | 'bold' | null = null;

    if (linkIndex !== -1 && (boldIndex === -1 || linkIndex < boldIndex)) {
      firstMatchIndex = linkIndex;
      matchType = 'link';
    } else if (boldIndex !== -1) {
      firstMatchIndex = boldIndex;
      matchType = 'bold';
    }

    if (firstMatchIndex > 0) {
      parts.push(remaining.slice(0, firstMatchIndex));
    }

    if (matchType === 'link' && linkMatch) {
      const [fullMatch, linkText, linkUrl] = linkMatch;
      if (linkUrl.startsWith('/')) {
        parts.push(
          <Link
            key={`link-${keyIndex++}`}
            to={linkUrl}
            className="text-primary hover:underline font-medium"
          >
            {linkText}
          </Link>
        );
      } else {
        parts.push(
          <a
            key={`link-${keyIndex++}`}
            href={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-medium"
          >
            {linkText}
          </a>
        );
      }
      remaining = remaining.slice(firstMatchIndex + fullMatch.length);
    } else if (matchType === 'bold' && boldMatch) {
      const [fullMatch, boldText] = boldMatch;
      parts.push(
        <strong key={`bold-${keyIndex++}`} className="font-semibold text-foreground">
          {boldText}
        </strong>
      );
      remaining = remaining.slice(firstMatchIndex + fullMatch.length);
    }
  }

  return parts.length > 0 ? parts : text;
};

// Highlight box for tips/notes
const HighlightBox = ({ children, icon = "💡", type = "default" }: { children: React.ReactNode; icon?: string; type?: "default" | "success" | "warning" | "error" }) => {
  const bgColors = {
    default: "from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 border-amber-200 dark:border-amber-800",
    success: "from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 border-emerald-200 dark:border-emerald-800",
    warning: "from-amber-50 to-yellow-50 dark:from-amber-950/30 dark:to-yellow-950/30 border-amber-200 dark:border-amber-800",
    error: "from-rose-50 to-red-50 dark:from-rose-950/30 dark:to-red-950/30 border-rose-200 dark:border-rose-800",
  };

  return (
    <div className={`my-10 p-8 rounded-2xl bg-gradient-to-r border-2 ${bgColors[type]} shadow-sm`}>
      <div className="flex gap-5">
        <span className="text-3xl flex-shrink-0 leading-none">{icon}</span>
        <div className="flex-1 space-y-4 text-lg leading-relaxed">{children}</div>
      </div>
    </div>
  );
};

const MarkdownTable = ({
  rows,
  highlight = false,
}: {
  rows: string[][];
  highlight?: boolean;
}) => {
  const [header, ...body] = rows;

  return (
    <div
      className={
        highlight
          ? "my-10 rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 via-background to-background p-1 shadow-sm"
          : "my-10"
      }
    >
      <div className="overflow-x-auto rounded-xl border border-border bg-card shadow-md">
        <table className="w-full min-w-[300px] border-collapse text-left">
          <thead>
            <tr className="border-b border-border bg-muted/60">
              {header.map((cell, index) => (
                <th
                  key={index}
                  className="px-5 py-4 text-xs font-bold uppercase tracking-wider text-foreground"
                >
                  {renderInlineMarkdown(cell)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {body.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={`border-b border-border/50 last:border-0 ${
                  rowIndex % 2 === 0 ? "bg-background" : "bg-muted/15"
                }`}
              >
                {row.map((cell, colIndex) => (
                  <td
                    key={colIndex}
                    className={`px-5 py-4 align-top ${
                      colIndex === 0
                        ? "text-xl font-medium text-foreground whitespace-nowrap"
                        : "text-base text-muted-foreground leading-relaxed"
                    }`}
                  >
                    {renderInlineMarkdown(cell)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Comparison component for Rude vs Polite
const ComparisonBox = ({ rude, polite, why }: { rude: string; polite: string; why: string }) => (
  <div className="my-12 overflow-hidden rounded-3xl border-2 border-border bg-card shadow-lg">
    <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
      <div className="p-8 bg-rose-50/50 dark:bg-rose-950/10">
        <div className="flex items-center gap-2.5 mb-5 text-rose-600 dark:text-rose-400 font-bold uppercase text-xs tracking-wider">
          <span className="text-xl">🚩</span> Rude / Blunt
        </div>
        <p className="text-xl font-medium text-foreground italic leading-relaxed">"{rude}"</p>
      </div>
      <div className="p-8 bg-emerald-50/50 dark:bg-emerald-950/10">
        <div className="flex items-center gap-2.5 mb-5 text-emerald-600 dark:text-emerald-400 font-bold uppercase text-xs tracking-wider">
          <span className="text-xl">✅</span> Polite / Better
        </div>
        <p className="text-xl font-medium text-foreground italic leading-relaxed">"{polite}"</p>
      </div>
    </div>
    <div className="p-6 bg-muted/30 border-t-2 border-border">
      <p className="text-base text-muted-foreground italic leading-relaxed">
        <span className="font-bold text-foreground not-italic mr-2">Why:</span> {why}
      </p>
    </div>
  </div>
);

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog/" replace />;
  }

  const seo = getBlogPostSeoMeta(post);
  const faqs = resolveBlogFaqs(post);

  // Get suggested posts
  const suggestedPosts = getRelatedBlogPosts(post, blogPosts);
  const headings = getBlogHeadings(post.content);
  const toc = getBlogToc({ ...post, faqs });
  const dateModified = getBlogDateModified(post);
  const canonical = `https://allemojipedia.com/blog/${post.slug}/`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    url: canonical,
    datePublished: post.date,
    dateModified,
    image: "https://allemojipedia.com/og-image.png",
    author: {
      "@type": "Organization",
      name: editorialMeta.teamName,
      url: editorialMeta.teamUrl,
      description: editorialMeta.teamBio,
    },
    publisher: {
      "@type": "Organization",
      name: editorialMeta.siteName,
      url: "https://allemojipedia.com/",
      logo: {
        "@type": "ImageObject",
        url: "https://allemojipedia.com/icon-512.png",
      },
    },
    mainEntityOfPage: canonical,
    citation: editorialMeta.sources.map((source) => ({
      "@type": "CreativeWork",
      name: source.name,
      url: source.url,
    })),
  };

  // Process content into blocks
  const renderContent = () => {
    const result: React.ReactNode[] = [];
    let highlightNextTable = false;
    let h2Index = 0;

    post.content.split("```").forEach((segment, s) => {
      if (s % 2 === 1) {
        result.push(
          <pre key={`code-${s}`} className="my-6 p-5 rounded-xl bg-muted/50 overflow-x-auto whitespace-pre-wrap text-base leading-relaxed">
            {segment.replace(/^\n+|\n+$/g, "")}
          </pre>
        );
        return;
      }
      const blocks = segment.split("\n\n").map((block) => block.trim()).filter(Boolean);

      for (let b = 0; b < blocks.length; b++) {
        const i = `${s}-${b}`;
        const paragraph = blocks[b];
        const tableRows = parseMarkdownTable(paragraph);

        // H2 Headers
        if (paragraph.startsWith("## ") && !paragraph.startsWith("### ")) {
          const heading = paragraph.replace("## ", "");
          highlightNextTable = heading.toLowerCase().includes("quick answer");
          const headingId = headings[h2Index]?.id;
          h2Index += 1;
          result.push(
            <h2
              key={i}
              id={headingId}
              className="text-2xl md:text-3xl font-bold mt-16 mb-8 text-foreground flex items-center gap-3 scroll-mt-24"
            >
              <span className="w-1.5 h-10 bg-gradient-to-b from-primary to-primary/50 rounded-full flex-shrink-0" />
              <span className="leading-tight">{renderInlineMarkdown(heading)}</span>
            </h2>
          );
          continue;
        }

        // H3 Headers
        if (paragraph.startsWith("### ")) {
          result.push(
            <h3 key={i} className="text-xl md:text-2xl font-semibold mt-12 mb-6 text-foreground leading-snug">
              {renderInlineMarkdown(paragraph.replace("### ", ""))}
            </h3>
          );
          continue;
        }

        // Bullet lists
        if (paragraph.startsWith("- ")) {
          const lines = paragraph.split("\n").filter((line) => line.startsWith("- "));
          result.push(
            <ul key={i} className="my-8 space-y-4 pl-2">
              {lines.map((item, j) => (
                <li key={j} className="flex items-start gap-4 text-muted-foreground group">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary mt-2.5 flex-shrink-0 group-hover:scale-125 transition-transform" />
                  <span className="leading-relaxed text-lg flex-1">{renderInlineMarkdown(item.replace("- ", ""))}</span>
                </li>
              ))}
            </ul>
          );
          continue;
        }

        // Numbered lists
        if (paragraph.startsWith("1. ")) {
          const items = paragraph.split("\n").filter((line) => /^\d+\./.test(line));
          result.push(
            <ol key={i} className="my-10 space-y-6">
              {items.map((item, j) => (
                <li key={j} className="flex items-start gap-5 group">
                  <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/70 text-primary-foreground font-bold flex items-center justify-center text-base shadow-sm group-hover:scale-110 transition-transform">
                    {j + 1}
                  </span>
                  <span className="pt-2 text-muted-foreground leading-relaxed text-lg flex-1">{renderInlineMarkdown(item.replace(/^\d+\.\s*/, ""))}</span>
                </li>
              ))}
            </ol>
          );
          continue;
        }

        // Comparison Box (Custom syntax: [COMPARE] Rude | Polite | Why)
        if (paragraph.startsWith("[COMPARE]")) {
          const parts = paragraph.replace("[COMPARE]", "").split("|").map(p => p.trim());
          if (parts.length >= 3) {
            result.push(
              <ComparisonBox
                key={i}
                rude={parts[0]}
                polite={parts[1]}
                why={parts[2]}
              />
            );
            continue;
          }
        }

        // Markdown tables
        if (tableRows) {
          result.push(
            <MarkdownTable key={i} rows={tableRows} highlight={highlightNextTable} />
          );
          highlightNextTable = false;
          continue;
        }

        // Blockquotes
        if (paragraph.startsWith(">")) {
          const lines = paragraph.split("\n").map(line => line.replace(/^>\s*/, ""));
          result.push(
            <HighlightBox key={i}>
              {lines.map((line, idx) => (
                <p key={idx} className="text-muted-foreground leading-[1.8] text-lg">
                  {renderInlineMarkdown(line)}
                </p>
              ))}
            </HighlightBox>
          );
          continue;
        }

        // Regular paragraph
        result.push(
          <p key={i} className="text-muted-foreground leading-[1.8] mb-7 text-lg max-w-none">
            {renderInlineMarkdown(paragraph)}
          </p>
        );
      }
    });

    return result;
  };

  return (
    <Layout>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        {post.keywords && <meta name="keywords" content={post.keywords} />}
        <meta name="author" content={editorialMeta.author} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={seo.ogTitle ?? seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:modified_time" content={dateModified} />
      </Helmet>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            }),
          }}
        />
      )}

      <div className="container-page py-8 max-w-5xl mx-auto">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog/" },
            { label: post.title },
          ]}
        />

        <Link
          to="/blog/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>

        <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_16rem] lg:gap-12 lg:items-start">
      <article>
        <header className="mb-10">
          <p className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-4">
            <span>{getBlogTopicLabel(post)}</span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </span>
          </p>

          <h1 className="text-3xl md:text-4xl font-bold mb-8 leading-[1.2] tracking-tight">
            {post.title}
          </h1>

          <BlogEditorialByline post={post} />

          <p className="mt-8 text-lg md:text-xl text-muted-foreground leading-[1.6]">
            {post.excerpt}
          </p>
        </header>

        <nav aria-label="On this page" className="mb-10 rounded-xl border border-border p-4 lg:hidden">
          <p className="font-semibold mb-3">On this page</p>
          <ol className="space-y-2 text-sm">
            {toc.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-muted-foreground hover:text-primary hover:underline">
                  {item.text}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="prose-custom max-w-none">
          {renderContent()}
        </div>

        {faqs.length > 0 && (
          <section className="mt-16" aria-labelledby="frequently-asked-questions">
            <h2 id="frequently-asked-questions" className="text-2xl md:text-3xl font-bold mb-8 scroll-mt-24">
              Frequently asked questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.question} className="rounded-xl border border-border bg-muted/20 p-5">
                  <h3 className="font-semibold mb-2 text-lg">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="mt-16">
          <EditorialSources
            title="Sources"
            intro="This guide is checked against Unicode emoji charts and CLDR annotations, then compared with how people use the symbols in texting and social apps. See our editorial process on the About page."
            sources={editorialMeta.sources}
          />
        </div>

        <div className="mt-20 pt-12 border-t border-border">
          <h2 className="text-2xl font-bold mb-8">Continue Reading</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {suggestedPosts.map((suggestedPost) => (
              <Link
                key={suggestedPost.id}
                to={`/blog/${suggestedPost.slug}/`}
                className="group block rounded-2xl border border-border p-5 hover:border-primary/50 hover:shadow-xl transition-all duration-300 bg-card"
              >
                <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {suggestedPost.image}
                </div>
                <h3 className="font-semibold line-clamp-2 mb-2 group-hover:text-primary transition-colors">
                  {suggestedPost.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                  {suggestedPost.excerpt}
                </p>
                <p className="text-xs text-muted-foreground font-medium">
                  {suggestedPost.readTime}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </article>

        <aside className="hidden lg:block">
          <nav aria-label="On this page" className="sticky top-24 rounded-xl border border-border bg-card p-5">
            <p className="font-semibold mb-3">On this page</p>
            <ol className="space-y-2 text-sm">
              {toc.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="text-muted-foreground hover:text-primary hover:underline">
                    {item.text}
                  </a>
                </li>
              ))}
            </ol>
            <p className="mt-5 pt-4 border-t border-border text-sm">
              <Link to="/about/" className="text-primary hover:underline">
                Editorial process
              </Link>
            </p>
          </nav>
        </aside>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPost;
