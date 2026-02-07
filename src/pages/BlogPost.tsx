import { Helmet } from "react-helmet-async";
import { Link, useParams, Navigate } from "react-router-dom";
import { Layout, Breadcrumbs } from "@/components/Layout";
import { blogPosts } from "@/data/blogPosts";
import { Calendar, Clock, ArrowLeft } from "lucide-react";

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

  // Get suggested posts
  const definedRelated = post.relatedPosts
    ? blogPosts.filter(p => post.relatedPosts?.includes(p.slug))
    : [];

  const otherPosts = blogPosts
    .filter(p => p.id !== post.id && !post.relatedPosts?.includes(p.slug))
    .sort(() => Math.random() - 0.5);

  const suggestedPosts = [...definedRelated, ...otherPosts].slice(0, 6);

  // Process content into blocks
  const renderContent = () => {
    const blocks = post.content.split("\n\n");
    const result: React.ReactNode[] = [];

    for (let i = 0; i < blocks.length; i++) {
      const paragraph = blocks[i];

      // H2 Headers
      if (paragraph.startsWith("## ")) {
        result.push(
          <h2 key={i} className="text-2xl md:text-3xl font-bold mt-16 mb-8 text-foreground flex items-center gap-3 scroll-mt-24">
            <span className="w-1.5 h-10 bg-gradient-to-b from-primary to-primary/50 rounded-full flex-shrink-0" />
            <span className="leading-tight">{renderInlineMarkdown(paragraph.replace("## ", ""))}</span>
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

    return result;
  };

  return (
    <Layout>
      <Helmet>
        <title>{post.title} | Allemojipedia Blog</title>
        <meta name="description" content={post.excerpt} />
        {post.keywords && <meta name="keywords" content={post.keywords} />}
        <meta name="author" content="Emoji Pedia" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href={`https://allemojipedia.com/blog/${post.slug}/`} />
      </Helmet>

      <article className="container-page py-8 max-w-3xl mx-auto">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
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

        {/* Hero Header */}
        <header className="mb-16">
          <div className="flex items-center gap-5 mb-8">
            <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 flex items-center justify-center text-6xl shadow-lg border border-primary/10">
              {post.image}
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-2 bg-muted/50 px-3 py-1.5 rounded-full">
                  <Calendar className="h-4 w-4" />
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                <span className="flex items-center gap-2 bg-muted/50 px-3 py-1.5 rounded-full">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </span>
              </div>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-[1.2] tracking-tight">
            {post.title}
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground leading-[1.6] font-light">
            {post.excerpt}
          </p>

          <div className="mt-10 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </header>

        {/* Content */}
        <div className="prose-custom max-w-none">
          {renderContent()}
        </div>

        {/* Continue Reading */}
        <div className="mt-20 pt-12 border-t border-border">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="text-3xl">📚</span>
            Continue Reading
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {suggestedPosts.map((suggestedPost) => (
              <Link
                key={suggestedPost.id}
                to={`/blog/${suggestedPost.slug}/`}
                className="group block rounded-2xl border border-border p-5 hover:border-primary/50 hover:shadow-xl transition-all duration-300 bg-card"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
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
    </Layout>
  );
};

export default BlogPost;
