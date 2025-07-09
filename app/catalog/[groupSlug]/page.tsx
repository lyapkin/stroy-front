import { generateMetadataUtil } from "@/src/app/utils";
import { Catalog } from "@/src/pagesFSD";
import { getCategoryApi } from "@/src/pagesFSD/catalog/api";
import Breadcrumbs from "@/src/widgets/breadcrumbs/Breadcrumbs";
import BreadcrumbsItem from "@/src/widgets/breadcrumbs/BreadcrumbsItem";
import { Metadata, ResolvingMetadata } from "next";

const CatalogPage = async ({
  params,
}: {
  params: Promise<{ groupSlug: string }>;
}) => {
  const { groupSlug } = await params;

  const category = await getCategoryApi("groups", groupSlug);
  const jsonLdBreadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Каталог",
        item: `${process.env.NEXT_PUBLIC_SITE_URL}/catalog/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: category.name,
        item: `${process.env.NEXT_PUBLIC_SITE_URL}/catalog/${groupSlug}/#`,
      },
    ],
  };
  return (
    <>
      <Breadcrumbs>
        <BreadcrumbsItem link="/catalog/">Каталог</BreadcrumbsItem>
        <BreadcrumbsItem>{category.name}</BreadcrumbsItem>
      </Breadcrumbs>
      <Catalog groupSlug={groupSlug} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumbs) }}
      />
    </>
  );
};

export default CatalogPage;

export const generateMetadata = async (
  {
    params,
    searchParams,
  }: {
    params: Promise<{ groupSlug: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
  },
  parent: ResolvingMetadata
): Promise<Metadata> => {
  const { groupSlug } = await params;
  const searchParamsData = await searchParams;
  const group = await getCategoryApi("groups", groupSlug);

  return generateMetadataUtil(
    parent,
    `catalog/${groupSlug}/`,
    group.metadata,
    searchParamsData
  );
};
