import { Catalog } from "@/src/pagesFSD";
import { getCategoryApi } from "@/src/pagesFSD/catalog/api";
import Breadcrumbs from "@/src/widgets/breadcrumbs/Breadcrumbs";
import BreadcrumbsItem from "@/src/widgets/breadcrumbs/BreadcrumbsItem";

const CatalogPage = async ({
  params,
}: {
  params: Promise<{ groupSlug: string; categorySlug: string }>;
}) => {
  const { groupSlug, categorySlug } = await params;
  const category = await getCategoryApi("categories", categorySlug);
  const group = category.parents?.find((item) => item.slug === groupSlug);
  return (
    <>
      <Breadcrumbs>
        <BreadcrumbsItem link="/catalog/">Каталог</BreadcrumbsItem>
        {group && (
          <BreadcrumbsItem link={`/catalog/${group.slug}/`}>
            {group.name}
          </BreadcrumbsItem>
        )}
        <BreadcrumbsItem>{category.name}</BreadcrumbsItem>
      </Breadcrumbs>
      <Catalog groupSlug={groupSlug} categorySlug={categorySlug} />
    </>
  );
};

export default CatalogPage;
