import s from "./styles.module.css";
import CatalogGroupPluginSkeleton from "@/src/entities/category/ui/CategoryGroupPlugin/CatalogGroupPluginSkeleton";

const CatalogLoading = () => {
  return (
    <div className={s.loading}>
      <CatalogGroupPluginSkeleton />
      <CatalogGroupPluginSkeleton />
      <CatalogGroupPluginSkeleton />
      <CatalogGroupPluginSkeleton />
      <CatalogGroupPluginSkeleton />
      <CatalogGroupPluginSkeleton />
    </div>
  );
};

export default CatalogLoading;
