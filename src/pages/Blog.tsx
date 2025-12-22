import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Layout, Breadcrumbs } from "@/components/Layout";
import { blogPosts } from "@/data/blogPosts";
import { Calendar, Clock } from "lucide-react";

const Blog = () => {
  return (
    <Layout>
      <Helmet>
        <title>Emoji Blog - Tips, Guides & Insights | Allemojipedia</title>
        <meta
          name="description"
          content="Explore our emoji blog for tips, guides, and fascinating insights about emojis, their meanings, and how to use them effectively."
        />
        <meta name="keywords" content="emoji blog, emoji tips, emoji guides, emoji insights, how to use emojis, emoji meanings blog, emoji articles" />
        <link rel="canonical" href="https://allemojipedia.com/blog" />
      </Helmet>

      <div className="container-page py-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Blog" },
          ]}
        />

        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            📝 Emoji Blog
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Discover fascinating articles about emojis, their history, meanings,
            and best practices for using them in your daily communication.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="group block rounded-xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:border-primary/50"
            >
              <div className="text-5xl mb-4">{post.image}</div>
              <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                {post.title}
              </h2>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {post.readTime}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
