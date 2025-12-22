import { Layout, Breadcrumbs } from "@/components/Layout";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <Layout>
      <Helmet>
        <title>Privacy Policy - Allemojipedia</title>
        <meta name="description" content="Privacy Policy for Allemojipedia. Learn how we collect, use, and protect your personal information." />
        <meta name="keywords" content="privacy policy, allemojipedia privacy, data protection, cookie policy, personal information" />
        <link rel="canonical" href="https://allemojipedia.com/privacy" />
      </Helmet>
      
      <div className="container-page py-8">
        <Breadcrumbs items={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy" }
        ]} />
        
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
          <p className="text-muted-foreground">Last updated: January 2025</p>
          
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">1. Introduction</h2>
            <p className="text-muted-foreground">
              Welcome to Allemojipedia. We respect your privacy and are committed to protecting your personal data. 
              This privacy policy explains how we collect, use, and safeguard your information when you visit our website.
            </p>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">2. Information We Collect</h2>
            <p className="text-muted-foreground">
              We may collect and process the following types of information:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Usage data: information about how you use our website</li>
              <li>Technical data: IP address, browser type, device information</li>
              <li>Cookies: small files stored on your device for functionality and analytics</li>
            </ul>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">3. How We Use Your Information</h2>
            <p className="text-muted-foreground">
              We use the collected information to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Provide and maintain our service</li>
              <li>Improve user experience</li>
              <li>Analyze website traffic and usage patterns</li>
              <li>Display relevant advertisements through Google AdSense</li>
            </ul>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">4. Google AdSense</h2>
            <p className="text-muted-foreground">
              We use Google AdSense to display advertisements on our website. Google AdSense uses cookies to serve ads 
              based on your prior visits to this or other websites. You can opt out of personalized advertising by 
              visiting <a href="https://www.google.com/settings/ads" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Google Ads Settings</a>.
            </p>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">5. Cookies</h2>
            <p className="text-muted-foreground">
              Our website uses cookies to enhance your browsing experience. You can set your browser to refuse cookies, 
              but this may affect the functionality of some parts of our website.
            </p>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">6. Third-Party Links</h2>
            <p className="text-muted-foreground">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices 
              or content of these external sites.
            </p>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">7. Children's Privacy</h2>
            <p className="text-muted-foreground">
              Our website is not intended for children under 13 years of age. We do not knowingly collect personal 
              information from children.
            </p>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">8. Changes to This Policy</h2>
            <p className="text-muted-foreground">
              We may update this privacy policy from time to time. Any changes will be posted on this page with an 
              updated revision date.
            </p>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">9. Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions about this privacy policy, please visit our <Link to="/contact" className="text-primary hover:underline">Contact page</Link>.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Privacy;
