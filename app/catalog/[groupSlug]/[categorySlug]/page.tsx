import { generateMetadataUtil } from "@/src/app/utils";
import { Catalog } from "@/src/pagesFSD";
import { getCategoryApi } from "@/src/pagesFSD/catalog/api";
import Breadcrumbs from "@/src/widgets/breadcrumbs/Breadcrumbs";
import BreadcrumbsItem from "@/src/widgets/breadcrumbs/BreadcrumbsItem";
import { Metadata, ResolvingMetadata } from "next";

const CatalogPage = async ({
  params,
}: {
  params: Promise<{ groupSlug: string; categorySlug: string }>;
}) => {
  const { groupSlug, categorySlug } = await params;
  const category = await getCategoryApi("categories", categorySlug);
  const group = category.parent;
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

export const generateMetadata = async (
  {
    params,
    searchParams,
  }: {
    params: Promise<{ groupSlug: string; categorySlug: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
  },
  parent: ResolvingMetadata
): Promise<Metadata> => {
  const { groupSlug, categorySlug } = await params;
  const searchParamsData = await searchParams;
  const category = await getCategoryApi("categories", categorySlug);

  return generateMetadataUtil(
    parent,
    `catalog/${groupSlug}/${categorySlug}/`,
    category.metadata,
    searchParamsData
  );
};
