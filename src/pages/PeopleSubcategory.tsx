import { useParams } from "react-router-dom";
import { Layout, Breadcrumbs } from "@/components/Layout";
import { EmojiCard } from "@/components/EmojiCard";
import { getEmojisByCategory } from "@/data/emojis";
import { peopleSubcategories } from "@/data/categories";
import { Helmet } from "react-helmet-async";
import NotFound from "./NotFound";

const PeopleSubcategory = () => {
  const { slug } = useParams<{ slug: string }>();
  const subcategory = peopleSubcategories.find(s => s.slug === slug);
  const allPeopleEmojis = getEmojisByCategory("people-and-body");
  
  // Filter based on subcategory subgroups
  const emojis = subcategory 
    ? allPeopleEmojis.filter(e => subcategory.subgroups.includes(e.subgroup))
    : [];

  if (!subcategory) return <NotFound />;

  return (
    <Layout>
      <Helmet>
        <title>{subcategory.name} Emojis | Allemojipedia</title>
        <meta name="description" content={subcategory.description} />
        <link rel="canonical" href={`https://allemojipedia.com/people/${slug}`} />
      </Helmet>

      <div className="container-page section-spacing">
        <Breadcrumbs items={[
          { label: "Home", href: "/" },
          { label: "People Hub", href: "/people" },
          { label: subcategory.name }
        ]} />

        <div className="flex items-center gap-4 mb-8">
          <span className="emoji text-5xl">{subcategory.icon}</span>
          <div>
            <h1 className="text-3xl font-bold">{subcategory.name} Emojis</h1>
            <p className="text-muted-foreground mt-1">{subcategory.description}</p>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {emojis.map(emoji => <EmojiCard key={emoji.slug} emoji={emoji} />)}
        </div>
      </div>
    </Layout>
  );
};

export default PeopleSubcategory;
