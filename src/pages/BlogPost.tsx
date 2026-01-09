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

// Parse emoji combination line: "👉👈 (Pointing fingers together) Meaning: Shy... Example: ..."
const parseEmojiMeaningLine = (line: string) => {
  // Pattern: emoji (name) Meaning: meaning Example: "example"
  const match = line.match(/^([\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{200D}\u{FE0F}\s]+)\s*(?:\(([^)]+)\))?\s*(?:Meaning:\s*)?([^"]*?)(?:\s*Example:\s*"([^"]+)")?$/u);
  
  if (match) {
    return {
      emoji: match[1]?.trim() || '',
      name: match[2]?.trim() || '',
      meaning: match[3]?.trim() || '',
      example: match[4]?.trim() || ''
    };
  }
  
  // Simpler pattern: emoji Meaning: meaning Example: "example"
  const simpleMatch = line.match(/^([\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{200D}\u{FE0F}\s✨]+)\s*Meaning:\s*([^"]*?)(?:\s*Example:\s*"([^"]+)")?$/u);
  if (simpleMatch) {
    return {
      emoji: simpleMatch[1]?.trim() || '',
      name: '',
      meaning: simpleMatch[2]?.trim() || '',
      example: simpleMatch[3]?.trim() || ''
    };
  }
  
  return null;
};

// Check if paragraph contains emoji meaning patterns
const hasEmojiMeaningPattern = (text: string) => {
  return /[\u{1F300}-\u{1F9FF}].*Meaning:/u.test(text);
};

// Emoji Meaning Card Component
const EmojiMeaningCard = ({ emoji, name, meaning, example }: { emoji: string; name?: string; meaning: string; example?: string }) => (
  <div className="p-4 rounded-xl bg-gradient-to-br from-muted/50 to-muted border border-border hover:border-primary/30 transition-all">
    <div className="flex items-start gap-4">
      <span className="text-4xl flex-shrink-0">{emoji}</span>
      <div className="flex-1 min-w-0">
        {name && <p className="text-xs text-muted-foreground mb-1">{name}</p>}
        <p className="text-foreground font-medium mb-2">{meaning}</p>
        {example && (
          <p className="text-sm text-muted-foreground italic bg-background/50 px-3 py-2 rounded-lg">
            "{example}"
          </p>
        )}
      </div>
    </div>
  </div>
);

// Emoji Grid for simple emoji lists
const EmojiGrid = ({ items }: { items: { emoji: string; description: string }[] }) => (
  <div className="my-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
    {items.map((item, i) => (
      <div key={i} className="flex items-center gap-3 p-3 rounded-lg border border-border bg-card hover:border-primary/30 transition-colors">
        <span className="text-2xl">{item.emoji}</span>
        <span className="text-sm text-muted-foreground">{item.description}</span>
      </div>
    ))}
  </div>
);

// Callout/Highlight Box
const CalloutBox = ({ children, type = 'info' }: { children: React.ReactNode; type?: 'info' | 'tip' | 'warning' }) => {
  const styles = {
    info: 'bg-blue-50 border-blue-200 dark:bg-blue-950/30 dark:border-blue-800',
    tip: 'bg-green-50 border-green-200 dark:bg-green-950/30 dark:border-green-800',
    warning: 'bg-amber-50 border-amber-200 dark:bg-amber-950/30 dark:border-amber-800'
  };
  
  return (
    <div className={`my-6 p-4 rounded-xl border-l-4 ${styles[type]}`}>
      {children}
    </div>
  );
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Get related posts - mix of defined related and random others
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
    let i = 0;

    while (i < blocks.length) {
      const paragraph = blocks[i];

      // Headers
      if (paragraph.startsWith("## ")) {
        result.push(
          <h2 key={i} className="text-2xl font-bold mt-12 mb-6 pb-3 border-b border-border text-foreground">
            {renderInlineMarkdown(paragraph.replace("## ", ""))}
          </h2>
        );
        i++;
        continue;
      }

      if (paragraph.startsWith("### ")) {
        result.push(
          <h3 key={i} className="text-xl font-semibold mt-8 mb-4 text-foreground">
            {renderInlineMarkdown(paragraph.replace("### ", ""))}
          </h3>
        );
        i++;
        continue;
      }

      // Check for emoji meaning patterns (Gen Z style)
      if (hasEmojiMeaningPattern(paragraph)) {
        const lines = paragraph.split("\n").filter(Boolean);
        const emojiItems: { emoji: string; name?: string; meaning: string; example?: string }[] = [];
        
        for (const line of lines) {
          const parsed = parseEmojiMeaningLine(line.trim());
          if (parsed && parsed.emoji) {
            emojiItems.push(parsed);
          }
        }
        
        if (emojiItems.length > 0) {
          result.push(
            <div key={i} className="my-6 space-y-4">
              {emojiItems.map((item, j) => (
                <EmojiMeaningCard key={j} {...item} />
              ))}
            </div>
          );
          i++;
          continue;
        }
      }

      // Check for simple emoji lists (- emoji = meaning)
      if (paragraph.startsWith("- ")) {
        const lines = paragraph.split("\n").filter((line) => line.startsWith("- "));
        
        // Check if these are emoji definition lines
        const emojiPattern = /^-\s*([\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]+)/u;
        const hasEmojis = lines.some(line => emojiPattern.test(line));
        
        if (hasEmojis) {
          const items = lines.map(line => {
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
          
          result.push(<EmojiGrid key={i} items={items} />);
          i++;
          continue;
        }

        // Regular list with better styling
        result.push(
          <ul key={i} className="my-6 space-y-3">
            {lines.map((item, j) => (
              <li key={j} className="flex items-start gap-3 text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="leading-relaxed">{renderInlineMarkdown(item.replace("- ", ""))}</span>
              </li>
            ))}
          </ul>
        );
        i++;
        continue;
      }

      // Numbered lists with better styling
      if (paragraph.startsWith("1. ")) {
        const items = paragraph.split("\n").filter((line) => /^\d+\./.test(line));
        result.push(
          <ol key={i} className="my-6 space-y-4">
            {items.map((item, j) => (
              <li key={j} className="flex items-start gap-4 text-muted-foreground">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold flex items-center justify-center text-sm">
                  {j + 1}
                </span>
                <span className="pt-1 leading-relaxed">{renderInlineMarkdown(item.replace(/^\d+\.\s*/, ""))}</span>
              </li>
            ))}
          </ol>
        );
        i++;
        continue;
      }

      // Blockquote style for important notes
      if (paragraph.startsWith(">")) {
        result.push(
          <CalloutBox key={i} type="tip">
            <p className="text-muted-foreground leading-relaxed">
              {renderInlineMarkdown(paragraph.replace(/^>\s*/, ""))}
            </p>
          </CalloutBox>
        );
        i++;
        continue;
      }

      // Regular paragraph with better typography
      result.push(
        <p key={i} className="text-muted-foreground leading-relaxed mb-6 text-[17px]">
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
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>

        <header className="mb-10">
          <div className="text-7xl mb-6">{post.image}</div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">{post.title}</h1>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{post.excerpt}</p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground border-t border-b border-border py-4">
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </span>
          </div>
        </header>

        <div className="prose-custom">
          {renderContent()}
        </div>

        {/* Continue Reading - Single unified section */}
        <div className="mt-16 pt-10 border-t border-border">
          <h2 className="text-2xl font-bold mb-8">Continue Reading</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {suggestedPosts.map((suggestedPost) => (
              <Link
                key={suggestedPost.id}
                to={`/blog/${suggestedPost.slug}`}
                className="group block rounded-xl border border-border p-5 hover:border-primary/50 hover:shadow-lg transition-all bg-card"
              >
                <span className="text-4xl block mb-4 group-hover:scale-110 transition-transform">{suggestedPost.image}</span>
                <h3 className="font-semibold line-clamp-2 mb-2 group-hover:text-primary transition-colors">{suggestedPost.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{suggestedPost.excerpt}</p>
                <p className="text-xs text-muted-foreground">{suggestedPost.readTime}</p>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
