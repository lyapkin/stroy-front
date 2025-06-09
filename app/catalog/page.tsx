import { getPageApi } from "@/src/shared/api";
import { generateMetadataUtil } from "@/src/app/utils";
import { getCategoryGroupsApi } from "@/src/entities/category/api";
import { Catalog } from "@/src/pagesFSD";
import Breadcrumbs from "@/src/widgets/breadcrumbs/Breadcrumbs";
import BreadcrumbsItem from "@/src/widgets/breadcrumbs/BreadcrumbsItem";
import { Metadata, ResolvingMetadata } from "next";

const CatalogPage = async () => {
  const [page] = await Promise.all([
    getPageApi("catalog"),
    getCategoryGroupsApi(),
  ]);
  return (
    <>
      <Breadcrumbs>
        <BreadcrumbsItem>{page.title}</BreadcrumbsItem>
      </Breadcrumbs>
      <Catalog />
    </>
  );
};

export default CatalogPage;

export const generateMetadata = async (
  {
    searchParams,
  }: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
  },
  parent: ResolvingMetadata
): Promise<Metadata> => {
  const searchParamsData = await searchParams;
  const page = await getPageApi("catalog");

  return generateMetadataUtil(
    parent,
    "catalog/",
    page.metadata,
    searchParamsData
  );
};
