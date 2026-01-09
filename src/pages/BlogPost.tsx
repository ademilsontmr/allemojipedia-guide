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

  // Process links and bold text
  while (remaining.length > 0) {
    // Check for markdown link [text](/url)
    const linkMatch = remaining.match(/\[([^\]]+)\]\(([^)]+)\)/);
    // Check for bold **text**
    const boldMatch = remaining.match(/\*\*(.+?)\*\*/);

    // Find which comes first
    const linkIndex = linkMatch ? remaining.indexOf(linkMatch[0]) : -1;
    const boldIndex = boldMatch ? remaining.indexOf(boldMatch[0]) : -1;

    if (linkIndex === -1 && boldIndex === -1) {
      // No more matches, add remaining text
      parts.push(remaining);
      break;
    }

    // Determine which match comes first
    let firstMatchIndex = -1;
    let matchType: 'link' | 'bold' | null = null;

    if (linkIndex !== -1 && (boldIndex === -1 || linkIndex < boldIndex)) {
      firstMatchIndex = linkIndex;
      matchType = 'link';
    } else if (boldIndex !== -1) {
      firstMatchIndex = boldIndex;
      matchType = 'bold';
    }

    // Add text before the match
    if (firstMatchIndex > 0) {
      parts.push(remaining.slice(0, firstMatchIndex));
    }

    if (matchType === 'link' && linkMatch) {
      const [fullMatch, linkText, linkUrl] = linkMatch;
      // Check if it's an internal link
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

// Check if line contains emoji pattern (emoji + description)
const isEmojiLine = (line: string) => {
  const emojiPattern = /^-?\s*[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/u;
  return emojiPattern.test(line.trim());
};

// Parse emoji content into structured data
const parseEmojiContent = (lines: string[]) => {
  return lines.map(line => {
    const cleanLine = line.replace(/^-\s*/, '').trim();
    const separators = [' = ', ' — ', ' - ', ': '];
    for (const sep of separators) {
      const idx = cleanLine.indexOf(sep);
      if (idx > 0) {
        return {
          emoji: cleanLine.slice(0, idx).trim(),
          description: cleanLine.slice(idx + sep.length).trim()
        };
      }
    }
    return { emoji: cleanLine, description: '' };
  });
};

// Render emoji table
const EmojiTable = ({ items }: { items: { emoji: string; description: string }[] }) => (
  <div className="my-6 overflow-x-auto">
    <table className="w-full border-collapse rounded-lg overflow-hidden">
      <thead>
        <tr className="bg-muted/50">
          <th className="px-4 py-3 text-left text-sm font-semibold border-b border-border">Emoji</th>
          <th className="px-4 py-3 text-left text-sm font-semibold border-b border-border">Meaning</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, i) => (
          <tr key={i} className="hover:bg-muted/30 transition-colors">
            <td className="px-4 py-3 text-2xl border-b border-border/50">{item.emoji}</td>
            <td className="px-4 py-3 text-muted-foreground border-b border-border/50">{item.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// Render emoji cards for combinations
const EmojiCards = ({ items }: { items: { emoji: string; description: string }[] }) => (
  <div className="my-6 grid gap-3 sm:grid-cols-2">
    {items.map((item, i) => (
      <div key={i} className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors">
        <span className="text-3xl shrink-0">{item.emoji}</span>
        <span className="text-sm text-muted-foreground">{item.description}</span>
      </div>
    ))}
  </div>
);

// Render key facts as badges
const KeyFactsBadges = ({ facts }: { facts: string[] }) => (
  <div className="my-4 flex flex-wrap gap-2">
    {facts.map((fact, i) => (
      <span key={i} className="inline-flex items-center px-3 py-1.5 rounded-full text-sm bg-primary/10 text-primary border border-primary/20">
        {fact.trim()}
      </span>
    ))}
  </div>
);

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Get related posts
  const relatedPosts = post.relatedPosts 
    ? blogPosts.filter(p => post.relatedPosts?.includes(p.slug))
    : blogPosts.filter(p => p.id !== post.id).slice(0, 3);

  // Process content into blocks
  const renderContent = () => {
    const blocks = post.content.split("\n\n");
    const result: React.ReactNode[] = [];
    let i = 0;

    while (i < blocks.length) {
      const paragraph = blocks[i];

      // Headers
      if (paragraph.startsWith("## ")) {
        result.push(
          <h2 key={i} className="text-2xl font-bold mt-10 mb-4 pb-2 border-b border-border">
            {renderInlineMarkdown(paragraph.replace("## ", ""))}
          </h2>
        );
        i++;
        continue;
      }

      if (paragraph.startsWith("### ")) {
        result.push(
          <h3 key={i} className="text-xl font-semibold mt-8 mb-3 text-foreground">
            {renderInlineMarkdown(paragraph.replace("### ", ""))}
          </h3>
        );
        i++;
        continue;
      }

      // Check for "Key facts:" pattern
      if (paragraph.toLowerCase().includes("key facts:")) {
        const factsMatch = paragraph.match(/key facts:?\s*[-–]?\s*(.*)/i);
        if (factsMatch) {
          const facts = factsMatch[1].split(/\s*[-–]\s*/).filter(Boolean);
          result.push(<KeyFactsBadges key={i} facts={facts} />);
          i++;
          continue;
        }
      }

      // Check for emoji combinations/lists
      if (paragraph.startsWith("- ")) {
        const lines = paragraph.split("\n").filter((line) => line.startsWith("- "));
        
        if (lines.some(isEmojiLine)) {
          const emojiData = parseEmojiContent(lines);
          if (lines[0].includes(" + ") || lines[0].includes("=")) {
            result.push(<EmojiCards key={i} items={emojiData} />);
          } else {
            result.push(<EmojiTable key={i} items={emojiData} />);
          }
          i++;
          continue;
        }

        // Regular list
        result.push(
          <ul key={i} className="space-y-2 my-4 ml-4">
            {lines.map((item, j) => (
              <li key={j} className="flex items-start gap-2 text-muted-foreground">
                <span className="text-primary mt-1.5">•</span>
                <span>{renderInlineMarkdown(item.replace("- ", ""))}</span>
              </li>
            ))}
          </ul>
        );
        i++;
        continue;
      }

      // Numbered lists
      if (paragraph.startsWith("1. ")) {
        const items = paragraph.split("\n").filter((line) => /^\d+\./.test(line));
        result.push(
          <ol key={i} className="space-y-3 my-4 ml-4">
            {items.map((item, j) => (
              <li key={j} className="flex items-start gap-3 text-muted-foreground">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-medium flex items-center justify-center">
                  {j + 1}
                </span>
                <span className="pt-0.5">{renderInlineMarkdown(item.replace(/^\d+\.\s*/, ""))}</span>
              </li>
            ))}
          </ol>
        );
        i++;
        continue;
      }

      // Check for inline emoji patterns
      const emojiLinePattern = /^[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}].*[=—-]/u;
      if (emojiLinePattern.test(paragraph.trim())) {
        const lines = paragraph.split("\n").filter(Boolean);
        const emojiData = parseEmojiContent(lines);
        result.push(<EmojiCards key={i} items={emojiData} />);
        i++;
        continue;
      }

      // Regular paragraph
      result.push(
        <p key={i} className="text-muted-foreground leading-relaxed mb-4">
          {renderInlineMarkdown(paragraph)}
        </p>
      );
      i++;
    }

    return result;
  };

  return (
    <Layout>
      <Helmet>
        <title>{post.title} | Allemojipedia Blog</title>
        <meta name="description" content={post.excerpt} />
        {post.keywords && <meta name="keywords" content={post.keywords} />}
        <link rel="canonical" href={`https://allemojipedia.com/blog/${post.slug}`} />
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
          to="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>

        <header className="mb-8">
          <div className="text-6xl mb-4">{post.image}</div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </span>
          </div>
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          {renderContent()}
        </div>

        {/* Related Articles */}
        <div className="mt-12 pt-8 border-t border-border">
          <h2 className="text-2xl font-semibold mb-6">Related Articles</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {relatedPosts.slice(0, 3).map((relatedPost) => (
              <Link
                key={relatedPost.id}
                to={`/blog/${relatedPost.slug}`}
                className="block rounded-lg border border-border p-4 hover:border-primary/50 hover:shadow-md transition-all"
              >
                <div className="flex flex-col gap-3">
                  <span className="text-4xl">{relatedPost.image}</span>
                  <div>
                    <h3 className="font-medium line-clamp-2 mb-2">{relatedPost.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{relatedPost.excerpt}</p>
                    <p className="text-xs text-muted-foreground mt-2">{relatedPost.readTime}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* More Articles */}
        <div className="mt-8 pt-8 border-t border-border">
          <h2 className="text-xl font-semibold mb-4">More Articles</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {blogPosts
              .filter((p) => p.id !== post.id && !post.relatedPosts?.includes(p.slug))
              .slice(0, 4)
              .map((otherPost) => (
                <Link
                  key={otherPost.id}
                  to={`/blog/${otherPost.slug}`}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <span className="text-2xl">{otherPost.image}</span>
                  <div>
                    <h4 className="font-medium text-sm line-clamp-2">{otherPost.title}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{otherPost.readTime}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
