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
  
  const categoryEmojis = getEmojisByCategory(emoji.categorySlug)
    .filter(e => e.slug !== emoji.slug)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  const primaryRelated = relatedEmojis[0];

  const faqItems = [
    { 
      question: `What does ${emoji.unicode} mean in texting?`, 
      answer: `In texting, ${emoji.unicode} typically means ${emoji.shortMeaning.toLowerCase()} People use it to ${emoji.usageContexts[0]?.toLowerCase() || 'express emotion'}.` 
    },
    { 
      question: `Is ${emoji.unicode} friendly or sarcastic?`, 
      answer: emoji.misunderstandings.length > 0 
        ? `The ${emoji.name} emoji is generally friendly, though ${emoji.misunderstandings[0].toLowerCase()}` 
        : `The ${emoji.name} emoji is typically used in a friendly, genuine way to express ${emoji.keywords[0] || 'positive feelings'}.`
    },
    { 
      question: `Can ${emoji.unicode} be used at work?`, 
      answer: emoji.usageContexts.some(ctx => ctx.toLowerCase().includes('professional') || ctx.toLowerCase().includes('work'))
        ? `Yes, ${emoji.unicode} is generally appropriate for workplace communication when used in casual team chats or friendly emails.`
        : `Use ${emoji.unicode} cautiously at work. It's best suited for casual team chats rather than formal emails or client communication.`
    },
    { 
      question: `What emojis are similar to ${emoji.unicode}?`, 
      answer: relatedEmojis.length > 0 
        ? `Similar emojis include ${relatedEmojis.slice(0, 3).map(e => `${e?.unicode} ${e?.name}`).join(", ")}. Each has slightly different nuances.`
        : `Check the Related Emojis section for alternatives that convey similar feelings.`
    },
    { 
      question: primaryRelated ? `What's the difference between ${emoji.unicode} and ${primaryRelated.unicode}?` : `How do I copy the ${emoji.name} emoji?`,
      answer: primaryRelated 
        ? `While both express similar feelings, ${emoji.unicode} ${emoji.name} emphasizes ${emoji.keywords[0] || 'the emotion'}, whereas ${primaryRelated.unicode} ${primaryRelated.name} is more about ${primaryRelated.keywords?.[0] || 'a related feeling'}.`
        : `Click on the ${emoji.unicode} emoji in the Copy & Paste section above to instantly copy it to your clipboard.`
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": { "@type": "Answer", "text": item.answer }
    }))
  };

  return (
    <Layout>
      <Helmet>
        <title>{emoji.unicode} {emoji.name} Emoji — Meaning & Copy | Allemojipedia</title>
        <meta name="description" content={`${emoji.unicode} ${emoji.name} emoji meaning: ${emoji.shortMeaning} Copy and paste ${emoji.unicode} for texting, social media, and work.`} />
        <meta name="keywords" content={`${emoji.name} emoji, ${emoji.unicode} meaning, ${emoji.keywords.slice(0, 5).join(', ')}, copy ${emoji.name} emoji, ${emoji.name} emoji meaning`} />
        <link rel="canonical" href={`https://allemojipedia.com/emoji/${slug}`} />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="container-page section-spacing">
        <Breadcrumbs items={[
          { label: "Home", href: "/" },
          { label: category?.name || "Category", href: `/category/${emoji.categorySlug}` },
          { label: `${emoji.unicode} ${emoji.name}` }
        ]} />

        <article className="max-w-3xl">
          {/* H1 - SEO optimized with Copy */}
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">
              <span className="emoji">{emoji.unicode}</span> {emoji.name} Emoji — Meaning & Copy
            </h1>
            <p className="text-lg text-muted-foreground">{emoji.shortMeaning}</p>
          </header>

          {/* Quick Summary - Featured Snippet Target */}
          <section className="mb-8 p-5 rounded-xl bg-primary/5 border border-primary/20">
            <h2 className="text-lg font-semibold mb-2">Quick Summary</h2>
            <p className="text-foreground">
              {emoji.shortMeaning} People commonly use <span className="emoji">{emoji.unicode}</span> {emoji.usageContexts[0]?.toLowerCase().startsWith('to ') ? '' : 'to '}{emoji.usageContexts[0]?.toLowerCase() || 'express this feeling'}.
            </p>
          </section>

          <CopyEmojiCard unicode={emoji.unicode} name={emoji.name} />

          {/* What does X mean? */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">What Does <span className="emoji">{emoji.unicode}</span> {emoji.name} Mean?</h2>
            <p className="mb-3 text-lg">{emoji.shortMeaning}</p>
            {emoji.detailedMeaning.split('\n\n').map((p, i) => (
              <p key={i} className="mb-3 text-muted-foreground leading-relaxed">{p}</p>
            ))}
          </section>

          {/* Context-based meaning */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4"><span className="emoji">{emoji.unicode}</span> Meaning in Texting, Social Media & Work</h2>
            
            <div className="space-y-5">
              <div className="p-4 rounded-lg bg-muted/30">
                <h3 className="text-lg font-medium mb-2">📱 In Texting</h3>
                <p className="text-muted-foreground">
                  When texting friends or family, <span className="emoji">{emoji.unicode}</span> is perfect for {emoji.usageContexts[0]?.toLowerCase() || 'expressing your feelings'}. 
                  It adds warmth and personality to your messages without being over the top.
                </p>
              </div>
              
              <div className="p-4 rounded-lg bg-muted/30">
                <h3 className="text-lg font-medium mb-2">📲 On Social Media</h3>
                <p className="text-muted-foreground">
                  On platforms like Instagram, Twitter, and TikTok, <span className="emoji">{emoji.unicode}</span> helps convey {emoji.keywords[0] || 'emotion'} in captions and comments. 
                  It's widely recognized and adds emotional context to your posts.
                </p>
              </div>
              
              <div className="p-4 rounded-lg bg-muted/30">
                <h3 className="text-lg font-medium mb-2">💼 At Work</h3>
                <p className="text-muted-foreground">
                  {emoji.usageContexts.some(ctx => ctx.toLowerCase().includes('professional'))
                    ? `The ${emoji.name} emoji can work well in casual workplace communication like Slack or Teams messages with colleagues you know well.`
                    : `Use ${emoji.unicode} sparingly at work. It's best for informal team chats rather than emails to clients or executives.`
                  }
                </p>
              </div>
            </div>
          </section>

          {/* How to use */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">How to Use <span className="emoji">{emoji.unicode}</span> {emoji.name}</h2>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              {emoji.usageContexts.map((ctx, i) => <li key={i}>{ctx}</li>)}
            </ul>
          </section>

          {/* Examples */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4"><span className="emoji">{emoji.unicode}</span> {emoji.name} Examples</h2>
            <div className="space-y-3">
              {emoji.examples.map((ex, i) => (
                <div key={i} className="p-4 rounded-lg bg-muted/50 border border-border/50">
                  <h3 className="text-sm font-semibold text-primary mb-1">{ex.context}</h3>
                  <p className="text-foreground">"{ex.text}"</p>
                </div>
              ))}
            </div>
          </section>

          {/* Variations */}
          {emoji.variations && emoji.variations.length > 0 && (
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4"><span className="emoji">{emoji.unicode}</span> Variations & Skin Tones</h2>
              <div className="flex flex-wrap gap-3">
                {emoji.variations.map((v, i) => (
                  <div key={i} className="flex items-center gap-2 p-3 rounded-lg bg-muted/50 border border-border/50">
                    <span className="emoji text-2xl">{v.emoji}</span>
                    <span className="text-sm text-muted-foreground">{v.description}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* When NOT to use */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">When NOT to Use <span className="emoji">{emoji.unicode}</span></h2>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Avoid using <span className="emoji">{emoji.unicode}</span> in formal emails or professional documents where emojis may seem unprofessional.</li>
              <li>Skip it when delivering serious or sensitive news — the tone may come across as dismissive.</li>
              {emoji.misunderstandings.map((m, i) => (
                <li key={i}>Be careful: {m.toLowerCase()}</li>
              ))}
              <li>Consider your audience — older recipients or different cultures may interpret it differently.</li>
            </ul>
          </section>

          {/* Common Misunderstandings */}
          {emoji.misunderstandings.length > 0 && (
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4"><span className="emoji">{emoji.unicode}</span> Common Misunderstandings</h2>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                {emoji.misunderstandings.map((m, i) => <li key={i}>{m}</li>)}
              </ul>
            </section>
          )}

          {/* Related Emojis */}
          {relatedEmojis.length > 0 && (
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Related Emojis to <span className="emoji">{emoji.unicode}</span></h2>
              <div className="flex flex-wrap gap-3">
                {relatedEmojis.map(e => e && (
                  <Link key={e.slug} to={`/emoji/${e.slug}`} className="flex items-center gap-2 p-3 rounded-lg bg-muted/50 border border-border/50 hover:border-primary/30 hover:bg-muted transition-all">
                    <span className="emoji text-2xl">{e.unicode}</span>
                    <span className="text-sm font-medium">{e.name}</span>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* FAQ */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4"><span className="emoji">{emoji.unicode}</span> {emoji.name} FAQ</h2>
            <div className="space-y-4">
              {faqItems.map((item, i) => (
                <div key={i} className="p-4 rounded-lg bg-muted/30">
                  <h3 className="font-semibold mb-2">{item.question}</h3>
                  <p className="text-muted-foreground">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Explore More */}
          <section className="mb-8 p-5 rounded-xl bg-muted/30 border border-border">
            <h2 className="text-xl font-semibold mb-4">Explore More Emojis</h2>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to={`/category/${emoji.categorySlug}`} className="text-primary hover:underline font-medium">
                  → Browse all {category?.name || 'emojis in this category'}
                </Link>
              </li>
              {primaryRelated && (
                <li>
                  <Link to={`/emoji/${primaryRelated.slug}`} className="text-primary hover:underline font-medium">
                    → Compare: <span className="emoji">{emoji.unicode}</span> vs <span className="emoji">{primaryRelated.unicode}</span> {primaryRelated.name}
                  </Link>
                </li>
              )}
              {relatedEmojis[1] && (
                <li>
                  <Link to={`/emoji/${relatedEmojis[1].slug}`} className="text-primary hover:underline font-medium">
                    → See also: <span className="emoji">{relatedEmojis[1].unicode}</span> {relatedEmojis[1].name}
                  </Link>
                </li>
              )}
            </ul>
          </section>

          {/* You Might Also Like */}
          {categoryEmojis.length > 0 && (
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">You Might Also Like</h2>
              <div className="grid grid-cols-3 gap-3">
                {categoryEmojis.map(e => (
                  <Link 
                    key={e.slug} 
                    to={`/emoji/${e.slug}`} 
                    className="flex flex-col items-center gap-2 p-4 rounded-xl bg-gradient-to-br from-muted/50 to-muted border border-border/50 hover:border-primary/30 hover:shadow-lg hover:scale-105 transition-all duration-300 group"
                  >
                    <span className="emoji text-4xl group-hover:scale-110 transition-transform duration-300">{e.unicode}</span>
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
