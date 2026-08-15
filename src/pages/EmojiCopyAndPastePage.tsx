import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Check, Copy } from "lucide-react";
import { toast } from "sonner";
import { Layout, Breadcrumbs } from "@/components/Layout";
import { editorialMeta } from "@/data/editorialMeta";
import { getMainPageSeo } from "@/data/seoMeta";
import {
  copyPastePopularEmojis,
  copyPasteQuickLinks,
  emojiCopyPasteHub,
} from "@/data/emojiCopyPasteHub";

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
      className="absolute top-2 right-2 flex items-center justify-center w-8 h-8 rounded-full bg-background/80 border border-border text-muted-foreground hover:text-primary transition-colors"
      aria-label={`Copy ${label}`}
    >
      {copied ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Copy className="w-3.5 h-3.5" />}
    </button>
  );
};

const EmojiCopyAndPastePage = () => {
  const seo = getMainPageSeo(emojiCopyPasteHub.path);
  const url = `https://allemojipedia.com${emojiCopyPasteHub.path}`;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: emojiCopyPasteHub.faqs.map((faq) => ({
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
        <meta name="keywords" content={emojiCopyPasteHub.keywords} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={seo.ogTitle ?? emojiCopyPasteHub.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:url" content={url} />
      </Helmet>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="container-page section-spacing">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Emoji Copy and Paste" }]} />

        <article>
          <header className="mb-10 max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{emojiCopyPasteHub.h1}</h1>
            <p className="text-lg text-muted-foreground">{emojiCopyPasteHub.lead}</p>
            <p className="text-sm text-muted-foreground mt-4">
              Reviewed by {editorialMeta.teamName} • Last updated {editorialMeta.lastUpdated}
            </p>
          </header>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Popular emojis — tap to copy</h2>
            <div className="grid gap-3 grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 max-w-5xl">
              {copyPastePopularEmojis.map((emoji) => (
                <div
                  key={emoji.slug}
                  className="relative rounded-xl border border-border bg-card p-4 text-center hover:border-primary/40 transition-colors"
                >
                  <CopyEmojiButton unicode={emoji.unicode} label={emoji.name} />
                  <Link to={`/emoji/${emoji.slug}/`} className="block pt-2">
                    <span className="text-4xl block mb-2">{emoji.unicode}</span>
                    <span className="text-xs text-muted-foreground line-clamp-2">{emoji.name}</span>
                  </Link>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              <Link to="/categories/" className="text-primary hover:underline">
                Browse all emoji categories →
              </Link>
            </p>
          </section>

          <section className="mb-12 max-w-5xl">
            <h2 className="text-2xl font-semibold mb-4">Copy by platform &amp; combo</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {copyPasteQuickLinks.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="rounded-xl border border-border bg-card p-5 hover:border-primary/40 hover:shadow-md transition-all"
                >
                  <span className="text-3xl block mb-3">{item.unicode}</span>
                  <h3 className="font-semibold mb-1">{item.label}</h3>
                  <p className="text-sm text-muted-foreground">{item.blurb}</p>
                </Link>
              ))}
            </div>
          </section>

          <section className="mb-10 max-w-3xl space-y-6">
            {emojiCopyPasteHub.sections.map((section) => (
              <div key={section.heading} className="rounded-xl bg-muted/30 border border-border p-5">
                <h2 className="text-xl font-semibold mb-2">{section.heading}</h2>
                <p className="text-muted-foreground whitespace-pre-line leading-relaxed">{section.body}</p>
              </div>
            ))}
          </section>

          <section className="mb-10 max-w-3xl">
            <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
            <div className="space-y-4">
              {emojiCopyPasteHub.faqs.map((faq) => (
                <div key={faq.question} className="rounded-lg border border-border p-4">
                  <h3 className="font-semibold mb-2">{faq.question}</h3>
                  <p className="text-sm text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="max-w-3xl">
            <h2 className="text-xl font-semibold mb-4">Related guides</h2>
            <div className="flex flex-wrap gap-3">
              <Link to="/blog/how-to-copy-and-paste-emojis/" className="text-primary hover:underline">
                How to copy and paste emojis →
              </Link>
              <Link to="/blog/copy-paste-emojis-guide/" className="text-primary hover:underline">
                Copy-paste emoji guide →
              </Link>
              <Link to="/emoji-meanings/" className="text-primary hover:underline">
                Emoji meanings by intent →
              </Link>
            </div>
          </section>
        </article>
      </div>
    </Layout>
  );
};

export default EmojiCopyAndPastePage;
