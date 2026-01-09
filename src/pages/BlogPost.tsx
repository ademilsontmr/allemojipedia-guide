import { Helmet } from "react-helmet-async";
import { Link, useParams, Navigate } from "react-router-dom";
import { Layout, Breadcrumbs } from "@/components/Layout";
import { blogPosts } from "@/data/blogPosts";
import { Calendar, Clock, ArrowLeft, MessageCircle } from "lucide-react";

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

// Parse emoji line with Meaning: and Example: pattern
const parseEmojiLine = (line: string) => {
  // Match: emoji(s) [optional name in parentheses] Meaning: text Example: "text"
  const meaningIndex = line.indexOf('Meaning:');
  if (meaningIndex === -1) return null;

  const emojiPart = line.slice(0, meaningIndex).trim();
  const restPart = line.slice(meaningIndex + 8).trim();
  
  // Extract example if present
  const exampleMatch = restPart.match(/Example:\s*"([^"]+)"/);
  const meaning = exampleMatch 
    ? restPart.slice(0, restPart.indexOf('Example:')).trim()
    : restPart.trim();
  const example = exampleMatch ? exampleMatch[1] : '';

  // Extract emoji and optional name
  const nameMatch = emojiPart.match(/\(([^)]+)\)\s*$/);
  const emoji = nameMatch ? emojiPart.slice(0, emojiPart.indexOf('(')).trim() : emojiPart;
  const name = nameMatch ? nameMatch[1] : '';

  return { emoji, name, meaning, example };
};

// Check if text contains emoji meaning pattern
const hasEmojiMeaningPattern = (text: string) => {
  return text.includes('Meaning:') && /[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}✨]/u.test(text);
};

// Parse Gen Z style emoji explanation blocks
interface GenZEmojiBlock {
  emoji: string;
  name: string;
  oldMeaning?: string;
  genZMeaning?: string;
  examples?: string[];
}

const parseGenZEmojiBlock = (blocks: string[], startIndex: number): { block: GenZEmojiBlock | null; endIndex: number } => {
  const header = blocks[startIndex];
  if (!header?.startsWith('### ')) return { block: null, endIndex: startIndex };
  
  // Extract emoji and name from header like "### 💀 Skull Emoji"
  const headerText = header.replace('### ', '');
  const emojiMatch = headerText.match(/^([\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}👍😂❤️🙏😊💀😭🙂👉👈✨🤡🗿💅🔥🫶🥹🫡🤝‼️😐🧍⁉️📸]+)\s*(.+)?$/u);
  if (!emojiMatch) return { block: null, endIndex: startIndex };
  
  const emoji = emojiMatch[1];
  const name = emojiMatch[2]?.trim() || '';
  
  let oldMeaning = '';
  let genZMeaning = '';
  const examples: string[] = [];
  let i = startIndex + 1;
  
  while (i < blocks.length && !blocks[i]?.startsWith('### ') && !blocks[i]?.startsWith('## ')) {
    const block = blocks[i];
    if (block?.includes('**What older generations think:**')) {
      oldMeaning = block.replace('**What older generations think:**', '').trim();
    } else if (block?.includes('**What Gen Z means:**')) {
      genZMeaning = block.replace('**What Gen Z means:**', '').trim();
    } else if (block?.includes('**Example usage:**')) {
      // Next block should be examples
    } else if (block?.startsWith('- ') && genZMeaning) {
      const exampleLines = block.split('\n').filter(l => l.startsWith('- '));
      exampleLines.forEach(line => {
        examples.push(line.replace('- ', '').trim());
      });
    }
    i++;
  }
  
  if (emoji && (genZMeaning || oldMeaning)) {
    return { block: { emoji, name, oldMeaning, genZMeaning, examples }, endIndex: i - 1 };
  }
  
  return { block: null, endIndex: startIndex };
};

// Check if this is a Gen Z emoji explanation section
const isGenZEmojiSection = (blocks: string[], index: number): boolean => {
  const block = blocks[index];
  if (!block?.startsWith('### ')) return false;
  
  // Check if following blocks contain Gen Z patterns
  for (let i = index + 1; i < Math.min(index + 5, blocks.length); i++) {
    if (blocks[i]?.includes('**What Gen Z means:**') || blocks[i]?.includes('**What older generations think:**')) {
      return true;
    }
    if (blocks[i]?.startsWith('### ') || blocks[i]?.startsWith('## ')) break;
  }
  return false;
};

// Beautiful Emoji Card Component
const EmojiCard = ({ emoji, name, meaning, example }: { emoji: string; name?: string; meaning: string; example?: string }) => (
  <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300">
    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-primary/10 rounded-full -translate-y-16 translate-x-16" />
    <div className="relative p-5">
      <div className="flex gap-4">
        <div className="flex-shrink-0">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
            {emoji}
          </div>
        </div>
        <div className="flex-1 min-w-0">
          {name && (
            <span className="inline-block text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full mb-2">
              {name}
            </span>
          )}
          <p className="text-foreground font-medium leading-snug mb-2">{meaning}</p>
          {example && (
            <div className="flex items-start gap-2 mt-3 p-3 bg-muted/50 rounded-lg">
              <MessageCircle className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
              <p className="text-sm text-muted-foreground italic">"{example}"</p>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
);

// Gen Z Emoji Explanation Card
const GenZEmojiCard = ({ emoji, name, oldMeaning, genZMeaning, examples }: { 
  emoji: string; 
  name: string; 
  oldMeaning?: string; 
  genZMeaning?: string; 
  examples?: string[] 
}) => (
  <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg transition-all duration-300 mb-6">
    <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-500/5 to-pink-500/10 rounded-full -translate-y-20 translate-x-20" />
    <div className="relative p-6">
      {/* Header */}
      <div className="flex items-center gap-4 mb-5">
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center text-5xl group-hover:scale-110 transition-transform duration-300 shadow-inner">
          {emoji}
        </div>
        <div>
          <h4 className="text-xl font-bold text-foreground">{name || 'Emoji'}</h4>
          <span className="text-sm text-muted-foreground">Tap to copy</span>
        </div>
      </div>
      
      {/* Meanings comparison */}
      <div className="grid gap-4 sm:grid-cols-2 mb-5">
        {oldMeaning && (
          <div className="p-4 rounded-xl bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-800">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">👴</span>
              <span className="text-xs font-semibold uppercase tracking-wide text-orange-700 dark:text-orange-400">Older Generations</span>
            </div>
            <p className="text-sm text-orange-900 dark:text-orange-200">{oldMeaning}</p>
          </div>
        )}
        {genZMeaning && (
          <div className="p-4 rounded-xl bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">🧑‍💻</span>
              <span className="text-xs font-semibold uppercase tracking-wide text-purple-700 dark:text-purple-400">Gen Z Meaning</span>
            </div>
            <p className="text-sm text-purple-900 dark:text-purple-200">{genZMeaning}</p>
          </div>
        )}
      </div>
      
      {/* Examples */}
      {examples && examples.length > 0 && (
        <div className="space-y-2">
          <div className="flex items-center gap-2 mb-3">
            <MessageCircle className="w-4 h-4 text-muted-foreground" />
            <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Example Usage</span>
          </div>
          <div className="space-y-2">
            {examples.map((ex, i) => (
              <div key={i} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                <span className="text-muted-foreground">💬</span>
                <p className="text-sm text-muted-foreground">{renderInlineMarkdown(ex)}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  </div>
);

// Simple emoji grid for lists
const EmojiGridSimple = ({ items }: { items: { emoji: string; description: string }[] }) => (
  <div className="my-8 grid gap-3 sm:grid-cols-2">
    {items.map((item, i) => (
      <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 border border-border hover:border-primary/30 transition-colors">
        <span className="text-3xl">{item.emoji}</span>
        <span className="text-muted-foreground">{item.description}</span>
      </div>
    ))}
  </div>
);

// Highlight box for tips/notes
const HighlightBox = ({ children, icon = "💡" }: { children: React.ReactNode; icon?: string }) => (
  <div className="my-8 p-5 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 border border-amber-200 dark:border-amber-800">
    <div className="flex gap-4">
      <span className="text-2xl">{icon}</span>
      <div className="flex-1">{children}</div>
    </div>
  </div>
);

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
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
    let i = 0;

    while (i < blocks.length) {
      const paragraph = blocks[i];

      // H2 Headers
      if (paragraph.startsWith("## ")) {
        result.push(
          <h2 key={i} className="text-2xl md:text-3xl font-bold mt-14 mb-6 text-foreground flex items-center gap-3">
            <span className="w-1 h-8 bg-primary rounded-full" />
            {renderInlineMarkdown(paragraph.replace("## ", ""))}
          </h2>
        );
        i++;
        continue;
      }

      // H3 Headers - Check for Gen Z emoji explanation pattern
      if (paragraph.startsWith("### ")) {
        if (isGenZEmojiSection(blocks, i)) {
          const { block, endIndex } = parseGenZEmojiBlock(blocks, i);
          if (block) {
            result.push(
              <GenZEmojiCard 
                key={i} 
                emoji={block.emoji}
                name={block.name}
                oldMeaning={block.oldMeaning}
                genZMeaning={block.genZMeaning}
                examples={block.examples}
              />
            );
            i = endIndex + 1;
            continue;
          }
        }
        
        // Regular H3
        result.push(
          <h3 key={i} className="text-xl font-semibold mt-10 mb-4 text-foreground">
            {renderInlineMarkdown(paragraph.replace("### ", ""))}
          </h3>
        );
        i++;
        continue;
      }

      // Skip blocks that are part of Gen Z emoji explanations (already processed)
      if (paragraph.includes('**What older generations think:**') || 
          paragraph.includes('**What Gen Z means:**') ||
          paragraph.includes('**Example usage:**')) {
        i++;
        continue;
      }

      // Emoji meaning patterns - parse each line
      if (hasEmojiMeaningPattern(paragraph)) {
        const lines = paragraph.split("\n").filter(Boolean);
        const emojiItems: { emoji: string; name?: string; meaning: string; example?: string }[] = [];
        const otherLines: string[] = [];
        
        for (const line of lines) {
          const parsed = parseEmojiLine(line.trim());
          if (parsed && parsed.emoji && parsed.meaning) {
            emojiItems.push(parsed);
          } else {
            otherLines.push(line);
          }
        }
        
        // Render non-emoji lines as paragraph
        if (otherLines.length > 0) {
          result.push(
            <p key={`${i}-text`} className="text-muted-foreground leading-relaxed mb-6 text-lg">
              {renderInlineMarkdown(otherLines.join(' '))}
            </p>
          );
        }
        
        // Render emoji cards
        if (emojiItems.length > 0) {
          result.push(
            <div key={`${i}-cards`} className="my-8 space-y-4">
              {emojiItems.map((item, j) => (
                <EmojiCard key={j} {...item} />
              ))}
            </div>
          );
        }
        
        i++;
        continue;
      }

      // Simple emoji lists (- emoji = meaning)
      if (paragraph.startsWith("- ")) {
        const lines = paragraph.split("\n").filter((line) => line.startsWith("- "));
        
        const emojiPattern = /^-\s*([\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}👍😂❤️🙏😊💀😭🙂👉👈✨🤡🗿💅🔥🫶🥹🫡🤝‼️😐🧍⁉️📸]+)/u;
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
          
          result.push(<EmojiGridSimple key={i} items={items} />);
          i++;
          continue;
        }

        // Regular bullet list
        result.push(
          <ul key={i} className="my-6 space-y-3 pl-1">
            {lines.map((item, j) => (
              <li key={j} className="flex items-start gap-4 text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                <span className="leading-relaxed text-lg">{renderInlineMarkdown(item.replace("- ", ""))}</span>
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
          <ol key={i} className="my-8 space-y-4">
            {items.map((item, j) => (
              <li key={j} className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center text-sm">
                  {j + 1}
                </span>
                <span className="pt-1 text-muted-foreground leading-relaxed text-lg">{renderInlineMarkdown(item.replace(/^\d+\.\s*/, ""))}</span>
              </li>
            ))}
          </ol>
        );
        i++;
        continue;
      }

      // Blockquotes
      if (paragraph.startsWith(">")) {
        result.push(
          <HighlightBox key={i}>
            <p className="text-muted-foreground leading-relaxed">
              {renderInlineMarkdown(paragraph.replace(/^>\s*/, ""))}
            </p>
          </HighlightBox>
        );
        i++;
        continue;
      }

      // Regular paragraph
      result.push(
        <p key={i} className="text-muted-foreground leading-relaxed mb-6 text-lg">
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

        {/* Hero Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-5xl shadow-lg">
              {post.image}
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </span>
              </div>
            </div>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight tracking-tight">
            {post.title}
          </h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            {post.excerpt}
          </p>
          
          <div className="mt-8 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </header>

        {/* Content */}
        <div className="prose-custom">
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
                to={`/blog/${suggestedPost.slug}`}
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
