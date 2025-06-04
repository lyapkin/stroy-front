import { getCategoryGroupsApi } from "@/src/entities/category/api";
import CatalogContent from "./CatalogContent";
import { CategoryGroupPlugin } from "@/src/entities/category";

const CatalogPlugin = async () => {
  const categoryGroups = await getCategoryGroupsApi();
  const content = categoryGroups.map((item) => {
    return <CategoryGroupPlugin key={item.id} categoryGroup={item} />;
  });
  return <CatalogContent content={content} />;
};

export default CatalogPlugin;
