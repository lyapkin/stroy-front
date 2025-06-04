import CategoriesList from "./CategoriesList";
import { FilterCategory } from "./types";

const Categories = async ({ getFilterApi }: CategoriesProps) => {
  const categories = await getFilterApi();
  return <CategoriesList categories={categories} />;
};

interface CategoriesProps {
  getFilterApi: () => Promise<FilterCategory[]>;
}

export default Categories;
