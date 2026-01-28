import { Layout, Breadcrumbs } from "@/components/Layout";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Layout>
      <Helmet>
        <title>About Us - Allemojipedia</title>
        <meta
          name="description"
          content="Learn about Allemojipedia - your comprehensive emoji reference guide. Discover why we created this project and our mission to help everyone communicate better with emojis."
        />
        <meta name="keywords" content="about allemojipedia, emoji encyclopedia, emoji reference, emoji dictionary, emoji guide, about us" />
        <link rel="canonical" href="https://allemojipedia.com/about/" />
      </Helmet>

      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "About Us" },
          ]}
        />

        <div className="max-w-3xl mx-auto space-y-8">
          <h1 className="text-3xl font-bold">About All Emojipedia</h1>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Our Mission</h2>
            <p className="text-muted-foreground">
              All Emojipedia was created with a simple yet powerful goal: to provide everyone with a comprehensive, 
              easy-to-use, and completely free emoji reference guide. We believe that emojis have become an essential 
              part of modern communication, and everyone deserves access to understand and use them effectively.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Why We Built This</h2>
            <p className="text-muted-foreground">
              In today's digital world, emojis transcend language barriers and add emotional depth to our conversations. 
              However, with thousands of emojis available, it can be challenging to find the perfect one or understand 
              what a particular emoji means. That's where All Emojipedia comes in.
            </p>
            <p className="text-muted-foreground">
              We created this project to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Make emoji discovery simple and intuitive</li>
              <li>Provide detailed information about each emoji's meaning and usage</li>
              <li>Help users quickly copy emojis for use in their messages and documents</li>
              <li>Organize emojis into logical categories for easy browsing</li>
              <li>Offer a fast, ad-light experience focused on user needs</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">What We Offer</h2>
            <p className="text-muted-foreground">
              All Emojipedia features a complete collection of emojis organized by categories including People & Body, 
              Animals & Nature, Food & Drink, Activities, Travel & Places, Objects, Symbols, and Flags. Each emoji 
              comes with its official name, making it easy to search and identify the exact emoji you need.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Our Commitment</h2>
            <p className="text-muted-foreground">
              We are committed to keeping All Emojipedia updated with the latest emoji releases and maintaining 
              a clean, fast, and user-friendly experience. Our goal is to be your go-to resource whenever you 
              need to find, understand, or copy an emoji.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Get in Touch</h2>
            <p className="text-muted-foreground">
              We love hearing from our users! If you have suggestions, feedback, or questions, please don't 
              hesitate to reach out through our <Link to="/contact" className="text-primary hover:underline">Contact page</Link>.
            </p>
          </section>

          <section className="space-y-4">
            <p className="text-muted-foreground italic">
              Thank you for choosing All Emojipedia as your emoji companion. Happy emoji hunting! 🎉
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default About;
