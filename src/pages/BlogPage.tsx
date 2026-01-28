import { Helmet } from "react-helmet-async";
import { Link, useParams, Navigate } from "react-router-dom";
import { Layout, Breadcrumbs } from "@/components/Layout";
import { blogPosts } from "@/data/blogPosts";
import { Calendar, Clock } from "lucide-react";
import BlogPagination from "@/components/BlogPagination";

const POSTS_PER_PAGE = 9;

const BlogPage = () => {
  const { page } = useParams<{ page: string }>();
  const pageNumber = parseInt(page || "1", 10);
  
  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);
  
  // Redirect invalid pages
  if (isNaN(pageNumber) || pageNumber < 1) {
    return <Navigate to="/blog" replace />;
  }
  
  if (pageNumber > totalPages) {
    return <Navigate to={`/blog/page/${totalPages.toString().padStart(2, "0")}/`} replace />;
  }
  
  // Page 1 should redirect to /blog
  if (pageNumber === 1) {
    return <Navigate to="/blog/" replace />;
  }
  
  const startIndex = (pageNumber - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = blogPosts.slice(startIndex, endIndex);
  
  const formatPageNumber = (num: number) => num.toString().padStart(2, "0");

  return (
    <Layout>
      <Helmet>
        <title>{`Emoji Blog - Page ${pageNumber} | Allemojipedia`}</title>
        <meta
          name="description"
          content={`Browse emoji articles, tips, and guides - Page ${pageNumber} of ${totalPages}`}
        />
        <link rel="canonical" href={`https://allemojipedia.com/blog/page/${formatPageNumber(pageNumber)}/`} />
      </Helmet>

      <div className="container-page py-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: `Page ${pageNumber}` },
          ]}
        />

        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            📝 Emoji Blog
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Discover fascinating articles about emojis, their history, meanings,
            and best practices for using them in your daily communication.
            <span className="ml-2 text-sm">({blogPosts.length} articles)</span>
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {currentPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}/`}
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

        <BlogPagination
          currentPage={pageNumber}
          totalPages={totalPages}
          totalPosts={blogPosts.length}
          postsPerPage={POSTS_PER_PAGE}
        />
      </div>
    </Layout>
  );
};

export default BlogPage;
