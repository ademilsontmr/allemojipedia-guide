import { lazy, Suspense } from "react";
import { useParams } from "react-router-dom";
import { Layout } from "@/components/Layout";
import EmojiDetail from "./EmojiDetail";

const EmojiComparison = lazy(() => import("./EmojiComparison"));

const ComparisonLoader = () => (
  <Layout>
    <div className="container-page section-spacing min-h-[40vh]" aria-busy="true" />
  </Layout>
);

const EmojiDetailOrComparisonWrapper = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Check if this is a comparison URL (contains "-vs-")
  if (slug?.includes('-vs-')) {
    return (
      <Suspense fallback={<ComparisonLoader />}>
        <EmojiComparison />
      </Suspense>
    );
  }
  
  // Otherwise, it's a regular emoji detail page
  return <EmojiDetail />;
};

export default EmojiDetailOrComparisonWrapper;
