import { Catalog } from "@/src/pagesFSD";
import Breadcrumbs from "@/src/widgets/breadcrumbs/Breadcrumbs";
import BreadcrumbsItem from "@/src/widgets/breadcrumbs/BreadcrumbsItem";

const CatalogPage = () => {
  return (
    <>
      <Breadcrumbs>
        <BreadcrumbsItem>Каталог</BreadcrumbsItem>
      </Breadcrumbs>
      <Catalog />
    </>
  );
};

export default CatalogPage;
