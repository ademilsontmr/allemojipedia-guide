import { lazy, Suspense } from "react";
import { useParams } from "react-router-dom";
import EmojiDetail from "./EmojiDetail";

const EmojiComparison = lazy(() => import("./EmojiComparison"));

const ComparisonLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
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
