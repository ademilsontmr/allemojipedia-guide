import { Helmet } from "react-helmet-async";
import { Link, useParams, Navigate } from "react-router-dom";
import { Layout, Breadcrumbs } from "@/components/Layout";
import { blogPosts } from "@/data/blogPosts";
import { Calendar, Clock, ArrowLeft } from "lucide-react";

// Helper function to render inline markdown (bold, italic)
const renderInlineMarkdown = (text: string) => {
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  
  // Match **bold** patterns
  const boldRegex = /\*\*(.+?)\*\*/g;
  let match;
  
  while ((match = boldRegex.exec(text)) !== null) {
    // Add text before the match
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    // Add the bold text
    parts.push(<strong key={match.index} className="font-semibold text-foreground">{match[1]}</strong>);
    lastIndex = match.index + match[0].length;
  }
  
  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }
  
  return parts.length > 0 ? parts : text;
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <Layout>
      <Helmet>
        <title>{post.title} | Allemojipedia Blog</title>
        <meta name="description" content={post.excerpt} />
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
          {post.content.split("\n\n").map((paragraph, index) => {
            if (paragraph.startsWith("## ")) {
              return (
                <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
                  {renderInlineMarkdown(paragraph.replace("## ", ""))}
                </h2>
              );
            }
            if (paragraph.startsWith("### ")) {
              return (
                <h3 key={index} className="text-xl font-semibold mt-6 mb-3">
                  {renderInlineMarkdown(paragraph.replace("### ", ""))}
                </h3>
              );
            }
            if (paragraph.startsWith("- ")) {
              const items = paragraph.split("\n").filter((line) => line.startsWith("- "));
              return (
                <ul key={index} className="list-disc pl-6 space-y-2 my-4">
                  {items.map((item, i) => (
                    <li key={i} className="text-muted-foreground">
                      {renderInlineMarkdown(item.replace("- ", ""))}
                    </li>
                  ))}
                </ul>
              );
            }
            if (paragraph.startsWith("1. ")) {
              const items = paragraph.split("\n").filter((line) => /^\d+\./.test(line));
              return (
                <ol key={index} className="list-decimal pl-6 space-y-2 my-4">
                  {items.map((item, i) => (
                    <li key={i} className="text-muted-foreground">
                      {renderInlineMarkdown(item.replace(/^\d+\.\s*/, ""))}
                    </li>
                  ))}
                </ol>
              );
            }
            return (
              <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                {renderInlineMarkdown(paragraph)}
              </p>
            );
          })}
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <h3 className="text-xl font-semibold mb-4">More Articles</h3>
          <div className="grid gap-4 md:grid-cols-2">
            {blogPosts
              .filter((p) => p.id !== post.id)
              .slice(0, 2)
              .map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.slug}`}
                  className="block rounded-lg border border-border p-4 hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-3xl">{relatedPost.image}</span>
                    <div>
                      <h4 className="font-medium line-clamp-2">{relatedPost.title}</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        {relatedPost.readTime}
                      </p>
                    </div>
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
