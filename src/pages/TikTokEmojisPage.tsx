import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Check, Copy } from "lucide-react";
import { toast } from "sonner";
import { Layout, Breadcrumbs } from "@/components/Layout";
import { editorialMeta } from "@/data/editorialMeta";
import { getMainPageSeo } from "@/data/seoMeta";
import { tiktokEmojisHub, tiktokFeaturedEmojis } from "@/data/tiktokEmojisHub";

const CopyEmojiButton = ({ unicode, label }: { unicode: string; label: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(unicode);
      setCopied(true);
      toast.success(`${unicode} copied!`, { duration: 2000 });
      if (navigator.vibrate) navigator.vibrate(50);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      toast.error("Failed to copy");
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="flex items-center justify-center w-10 h-10 rounded-full bg-muted text-muted-foreground hover:text-primary hover:bg-muted/80 transition-colors"
      aria-label={`Copy ${label} emoji`}
    >
      {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
    </button>
  );
};

const TikTokEmojisPage = () => {
  const seo = getMainPageSeo(tiktokEmojisHub.path);
  const url = `https://allemojipedia.com${tiktokEmojisHub.path}`;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: tiktokEmojisHub.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <Layout>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={tiktokEmojisHub.keywords} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={seo.ogTitle ?? tiktokEmojisHub.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:url" content={url} />
      </Helmet>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="container-page section-spacing">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "TikTok Emojis" }]} />

        <article className="max-w-3xl">
          <header className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{tiktokEmojisHub.h1}</h1>
            <p className="text-lg text-muted-foreground">{tiktokEmojisHub.lead}</p>
            <p className="text-sm text-muted-foreground mt-4">
              Reviewed by {editorialMeta.teamName} • Last updated {editorialMeta.lastUpdated}
            </p>
          </header>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Popular TikTok reaction emojis</h2>
            <p className="text-muted-foreground mb-6">
              Tap copy, then open the TikTok meaning guide for comment tone.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {tiktokFeaturedEmojis.map((item) => (
                <div
                  key={item.slug}
                  className="flex items-center gap-3 rounded-xl border border-border bg-card p-4"
                >
                  <span className="text-4xl" aria-hidden>
                    {item.unicode}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold truncate">{item.label}</p>
                    <p className="text-sm text-muted-foreground line-clamp-2">{item.tiktokMeaning}</p>
                    <Link
                      to={`/emoji/${item.slug}/tiktok/`}
                      className="text-xs text-primary hover:underline mt-1 inline-block"
                    >
                      TikTok meaning →
                    </Link>
                  </div>
                  <CopyEmojiButton unicode={item.unicode} label={item.label} />
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10 space-y-6">
            {tiktokEmojisHub.sections.map((section) => (
              <div key={section.heading} className="rounded-xl bg-muted/30 border border-border p-5">
                <h2 className="text-xl font-semibold mb-2">{section.heading}</h2>
                <p className="text-muted-foreground whitespace-pre-line leading-relaxed">{section.body}</p>
              </div>
            ))}
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
            <div className="space-y-4">
              {tiktokEmojisHub.faqs.map((faq) => (
                <div key={faq.question} className="rounded-lg border border-border p-4">
                  <h3 className="font-semibold mb-2">{faq.question}</h3>
                  <p className="text-sm text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Related</h2>
            <div className="flex flex-wrap gap-3">
              <Link to="/emoji-meanings/tiktok-emoji-meanings/" className="text-primary hover:underline">
                TikTok emoji meanings cluster →
              </Link>
              <Link to="/emoji-meanings-in-texting/" className="text-primary hover:underline">
                Emoji meanings in texting →
              </Link>
              <Link to="/emoji-copy-and-paste/" className="text-primary hover:underline">
                Emoji copy and paste →
              </Link>
              <Link to="/blog/tiktok-emoji-meanings-gen-z-slang/" className="text-primary hover:underline">
                Gen Z TikTok slang guide →
              </Link>
            </div>
          </section>
        </article>
      </div>
    </Layout>
  );
};

export default TikTokEmojisPage;
