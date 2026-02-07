import { useParams } from "react-router-dom";
import EmojiDetail from "./EmojiDetail";
import EmojiComparison from "./EmojiComparison";

const EmojiDetailOrComparisonWrapper = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Check if this is a comparison URL (contains "-vs-")
  if (slug?.includes('-vs-')) {
    return <EmojiComparison />;
  }
  
  // Otherwise, it's a regular emoji detail page
  return <EmojiDetail />;
};

export default EmojiDetailOrComparisonWrapper;
