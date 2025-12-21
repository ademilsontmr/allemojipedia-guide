import { useParams } from "react-router-dom";
import Category from "./Category";

const CategoryWrapper = () => {
  const { slug } = useParams<{ slug: string }>();
  
  return <Category key={slug} />;
};

export default CategoryWrapper;
