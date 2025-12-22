import { Layout, Breadcrumbs } from "@/components/Layout";
import { Helmet } from "react-helmet-async";
import { Mail, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      <Helmet>
        <title>Contact Us - Allemojipedia</title>
        <meta name="description" content="Contact Allemojipedia for questions, feedback, or suggestions about our emoji encyclopedia." />
        <meta name="keywords" content="contact allemojipedia, emoji feedback, emoji suggestions, emoji support, contact us" />
        <link rel="canonical" href="https://allemojipedia.com/contact" />
      </Helmet>
      
      <div className="container-page py-8">
        <Breadcrumbs items={[
          { label: "Home", href: "/" },
          { label: "Contact" }
        ]} />
        
        <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
        
        <div className="max-w-2xl space-y-8">
          <p className="text-lg text-muted-foreground">
            We'd love to hear from you! Whether you have questions, feedback, or suggestions about Allemojipedia, 
            feel free to reach out to us.
          </p>
          
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="p-6 rounded-lg border border-border bg-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-full bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <h2 className="font-semibold">Email</h2>
              </div>
              <p className="text-muted-foreground text-sm mb-3">
                For general inquiries and support
              </p>
              <a 
                href="mailto:contact@allemojipedia.com" 
                className="text-primary hover:underline font-medium"
              >
                contact@allemojipedia.com
              </a>
            </div>
            
            <div className="p-6 rounded-lg border border-border bg-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-full bg-primary/10">
                  <MessageSquare className="h-5 w-5 text-primary" />
                </div>
                <h2 className="font-semibold">Feedback</h2>
              </div>
              <p className="text-muted-foreground text-sm mb-3">
                Help us improve by sharing your thoughts
              </p>
              <a 
                href="mailto:feedback@allemojipedia.com" 
                className="text-primary hover:underline font-medium"
              >
                feedback@allemojipedia.com
              </a>
            </div>
          </div>
          
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Common Inquiries</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span><strong>Missing emoji:</strong> If you notice an emoji is missing from our database, let us know!</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span><strong>Incorrect information:</strong> Found an error? Please report it so we can fix it.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span><strong>Feature requests:</strong> Have an idea to make Allemojipedia better? We'd love to hear it!</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span><strong>Partnership inquiries:</strong> Interested in collaborating? Reach out to discuss opportunities.</span>
              </li>
            </ul>
          </section>
          
          <section className="p-6 rounded-lg bg-muted/50 border border-border">
            <h2 className="font-semibold mb-2">Response Time</h2>
            <p className="text-muted-foreground text-sm">
              We aim to respond to all inquiries within 24-48 hours during business days. 
              Thank you for your patience!
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
