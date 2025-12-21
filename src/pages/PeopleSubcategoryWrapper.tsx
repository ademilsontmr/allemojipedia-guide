import { useParams } from "react-router-dom";
import PeopleSubcategory from "./PeopleSubcategory";

const PeopleSubcategoryWrapper = () => {
  const { slug } = useParams<{ slug: string }>();
  
  return <PeopleSubcategory key={slug} />;
};

export default PeopleSubcategoryWrapper;
