import { useParams } from "react-router-dom";
import EmojiDetail from "./EmojiDetail";

const EmojiDetailWrapper = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Key forces complete remount when slug changes
  return <EmojiDetail key={slug} />;
};

export default EmojiDetailWrapper;
