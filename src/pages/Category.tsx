import { useParams } from "react-router-dom";
import { Layout, Breadcrumbs } from "@/components/Layout";
import { EmojiCard } from "@/components/EmojiCard";
import { getCategoryBySlug } from "@/data/categories";
import { getEmojisByCategory } from "@/data/emojis";
import { Helmet } from "react-helmet-async";
import NotFound from "./NotFound";

const Category = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = getCategoryBySlug(slug || "");
  const emojis = getEmojisByCategory(slug || "");

  if (!category) return <NotFound />;

  return (
    <Layout>
      <Helmet>
        <title>{category.name} Emojis | Allemojipedia</title>
        <meta name="description" content={category.description} />
        <link rel="canonical" href={`https://allemojipedia.com/category/${slug}`} />
      </Helmet>

      <div className="container-page section-spacing">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Categories", href: "/categories" }, { label: category.name }]} />
        
        <div className="flex items-center gap-4 mb-6">
          <span className="emoji text-5xl">{category.icon}</span>
          <div>
            <h1 className="text-3xl font-bold">{category.name} Emojis</h1>
            <p className="text-muted-foreground mt-1">{category.description}</p>
          </div>
        </div>

        {emojis.length > 0 ? (
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {emojis.map(emoji => <EmojiCard key={emoji.slug} emoji={emoji} />)}
          </div>
        ) : (
          <p className="text-muted-foreground">No emojis found in this category yet.</p>
        )}
      </div>
    </Layout>
  );
};

export default Category;
