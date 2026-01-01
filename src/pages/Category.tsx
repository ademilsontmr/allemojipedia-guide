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

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://allemojipedia.com" },
      { "@type": "ListItem", "position": 2, "name": "Categories", "item": "https://allemojipedia.com/categories" },
      { "@type": "ListItem", "position": 3, "name": category.name }
    ]
  };

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": `${category.name} Emojis`,
    "description": category.description,
    "url": `https://allemojipedia.com/category/${slug}`,
    "numberOfItems": emojis.length,
    "isPartOf": {
      "@type": "WebSite",
      "name": "Allemojipedia",
      "url": "https://allemojipedia.com"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `How many ${category.name.toLowerCase()} emojis are there?`,
        "acceptedAnswer": { "@type": "Answer", "text": `There are ${emojis.length} ${category.name.toLowerCase()} emojis available. This includes all variations and skin tones.` }
      },
      {
        "@type": "Question",
        "name": `How do I copy ${category.name.toLowerCase()} emojis?`,
        "acceptedAnswer": { "@type": "Answer", "text": `Click on any emoji in the list below to copy it instantly. Then paste it anywhere - WhatsApp, Instagram, Twitter, or any text field.` }
      },
      {
        "@type": "Question",
        "name": `What are the most popular ${category.name.toLowerCase()} emojis?`,
        "acceptedAnswer": { "@type": "Answer", "text": `The most popular ${category.name.toLowerCase()} emojis include ${emojis.slice(0, 5).map(e => e.unicode).join(' ')}. Click on any emoji to learn more about its meaning.` }
      }
    ]
  };

  return (
    <Layout>
      <Helmet>
        <title>{category.name} Emojis — Copy & Paste All {emojis.length} | Allemojipedia</title>
        <meta name="description" content={`${category.description} Copy and paste ${emojis.length} ${category.name.toLowerCase()} emojis instantly.`} />
        <meta name="keywords" content={`${category.name.toLowerCase()} emojis, ${category.name.toLowerCase()} emoji list, ${category.name.toLowerCase()} emoticons, copy ${category.name.toLowerCase()} emojis, ${category.name.toLowerCase()} symbols`} />
        <link rel="canonical" href={`https://allemojipedia.com/category/${slug}`} />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(collectionSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
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
