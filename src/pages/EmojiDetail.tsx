import { useParams, Link } from "react-router-dom";
import { Layout, Breadcrumbs } from "@/components/Layout";
import { CopyEmojiCard } from "@/components/CopyEmojiCard";
import { getEmojiBySlug, getEmojisByCategory } from "@/data/emojis";
import { getCategoryBySlug } from "@/data/categories";
import { Helmet } from "react-helmet-async";
import NotFound from "./NotFound";

const EmojiDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const emoji = getEmojiBySlug(slug || "");

  if (!emoji) return <NotFound />;

  const category = getCategoryBySlug(emoji.categorySlug);
  const relatedEmojis = emoji.relatedEmojis.map(s => getEmojiBySlug(s)).filter(Boolean).slice(0, 6);
  
  // Get 3 random emojis from the same category for "You Might Also Like"
  const categoryEmojis = getEmojisByCategory(emoji.categorySlug)
    .filter(e => e.slug !== emoji.slug)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": `What does ${emoji.unicode} mean?`, "acceptedAnswer": { "@type": "Answer", "text": emoji.shortMeaning } },
      { "@type": "Question", "name": `When should I use ${emoji.unicode}?`, "acceptedAnswer": { "@type": "Answer", "text": emoji.usageContexts.join(", ") } },
      { "@type": "Question", "name": `How do I copy the ${emoji.name} emoji?`, "acceptedAnswer": { "@type": "Answer", "text": `Click on the ${emoji.unicode} emoji above to copy it to your clipboard instantly.` } },
      { "@type": "Question", "name": `What are similar emojis to ${emoji.unicode}?`, "acceptedAnswer": { "@type": "Answer", "text": emoji.relatedEmojis.length > 0 ? `Similar emojis include those in the related emojis section above.` : "Check the related emojis section for alternatives." } },
      { "@type": "Question", "name": `Can I use ${emoji.unicode} on all platforms?`, "acceptedAnswer": { "@type": "Answer", "text": `Yes, the ${emoji.name} emoji is supported on all major platforms including iOS, Android, Windows, and Mac.` } }
    ]
  };

  return (
    <Layout>
      <Helmet>
        <title>{emoji.unicode} {emoji.name} Emoji Meaning | Allemojipedia</title>
        <meta name="description" content={`${emoji.unicode} ${emoji.name} meaning: ${emoji.shortMeaning} Learn how to use this emoji and copy it.`} />
        <link rel="canonical" href={`https://allemojipedia.com/emoji/${slug}`} />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="container-page section-spacing">
        <Breadcrumbs items={[
          { label: "Home", href: "/" },
          { label: category?.name || "Category", href: `/category/${emoji.categorySlug}` },
          { label: emoji.name }
        ]} />

        <article className="max-w-3xl">
          <header className="flex items-start gap-6 mb-6">
            <span className="emoji-text-4xl">{emoji.unicode}</span>
            <div>
              <h1 className="text-3xl font-bold mb-2">{emoji.unicode} {emoji.name} Emoji Meaning</h1>
              <p className="text-muted-foreground">{emoji.shortMeaning}</p>
            </div>
          </header>

          <CopyEmojiCard unicode={emoji.unicode} name={emoji.name} />

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Quick Meaning</h2>
            <p>{emoji.shortMeaning}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Detailed Meaning</h2>
            {emoji.detailedMeaning.split('\n\n').map((p, i) => <p key={i} className="mb-3 text-muted-foreground">{p}</p>)}
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">How People Use It</h2>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              {emoji.usageContexts.map((ctx, i) => <li key={i}>{ctx}</li>)}
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Examples</h2>
            <div className="space-y-3">
              {emoji.examples.map((ex, i) => (
                <div key={i} className="p-3 rounded-lg bg-muted/50">
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">{ex.context}</h3>
                  <p>"{ex.text}"</p>
                </div>
              ))}
            </div>
          </section>

          {emoji.variations && emoji.variations.length > 0 && (
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-3">Variations (Skin Tone / Gender)</h2>
              <div className="flex flex-wrap gap-3">
                {emoji.variations.map((v, i) => (
                  <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-muted/50">
                    <span className="emoji text-2xl">{v.emoji}</span>
                    <span className="text-sm text-muted-foreground">{v.description}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Common Misunderstandings</h2>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              {emoji.misunderstandings.map((m, i) => <li key={i}>{m}</li>)}
            </ul>
          </section>

          {relatedEmojis.length > 0 && (
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-3">Related Emojis</h2>
              <div className="flex flex-wrap gap-3">
                {relatedEmojis.map(e => e && (
                  <Link key={e.slug} to={`/emoji/${e.slug}`} className="flex items-center gap-2 p-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                    <span className="emoji text-2xl">{e.unicode}</span>
                    <span className="text-sm">{e.name}</span>
                  </Link>
                ))}
              </div>
            </section>
          )}


          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">FAQ</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium">What does {emoji.unicode} mean?</h3>
                <p className="text-muted-foreground">{emoji.shortMeaning}</p>
              </div>
              <div>
                <h3 className="font-medium">When should I use {emoji.unicode}?</h3>
                <p className="text-muted-foreground">Use this emoji when: {emoji.usageContexts.join(", ")}.</p>
              </div>
              <div>
                <h3 className="font-medium">How do I copy the {emoji.name} emoji?</h3>
                <p className="text-muted-foreground">Simply click on the {emoji.unicode} emoji in the "Copy & Paste" section above. It will be instantly copied to your clipboard.</p>
              </div>
              <div>
                <h3 className="font-medium">What are similar emojis to {emoji.unicode}?</h3>
                <p className="text-muted-foreground">
                  {relatedEmojis.length > 0 
                    ? `Similar emojis include ${relatedEmojis.slice(0, 3).map(e => e?.unicode).join(", ")}. Check the Related Emojis section for more options.`
                    : "Check the Related Emojis section above for similar alternatives."}
                </p>
              </div>
              <div>
                <h3 className="font-medium">Can I use {emoji.unicode} on all platforms?</h3>
                <p className="text-muted-foreground">Yes! The {emoji.name} emoji is supported on all major platforms including iOS, Android, Windows, Mac, and web browsers.</p>
              </div>
            </div>
          </section>

          {categoryEmojis.length > 0 && (
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-3">You Might Also Like</h2>
              <div className="grid grid-cols-3 gap-3">
                {categoryEmojis.map(e => (
                  <Link 
                    key={e.slug} 
                    to={`/emoji/${e.slug}`} 
                    className="flex flex-col items-center gap-2 p-4 rounded-xl bg-gradient-to-br from-muted/50 to-muted border border-border/50 hover:border-primary/30 hover:shadow-lg hover:scale-105 transition-all duration-300 group"
                  >
                    <span className="text-4xl group-hover:scale-110 transition-transform duration-300">{e.unicode}</span>
                    <span className="text-sm text-center text-muted-foreground group-hover:text-foreground transition-colors line-clamp-2">{e.name}</span>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </article>
      </div>
    </Layout>
  );
};

export default EmojiDetail;
