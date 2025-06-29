import { generateMetadataUtil } from "@/src/app/utils";
import { getGeneralContentApi } from "@/src/pagesFSD/general/api";
import General from "@/src/pagesFSD/general/ui/General";
import { getPageApi } from "@/src/shared/api";
import Breadcrumbs from "@/src/widgets/breadcrumbs/Breadcrumbs";
import BreadcrumbsItem from "@/src/widgets/breadcrumbs/BreadcrumbsItem";
import { Metadata, ResolvingMetadata } from "next";

const Partners = async () => {
  const [page, content] = await Promise.all([
    getPageApi("partners"),
    getGeneralContentApi("partners"),
  ]);
  const jsonLdBreadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Партнерам",
        item: `${process.env.SITE_URL}/partners/`,
      },
    ],
  };
  return (
    <>
      <Breadcrumbs>
        <BreadcrumbsItem>Партнерам</BreadcrumbsItem>
      </Breadcrumbs>
      <General general={{ name: page.title, content: content.content }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumbs) }}
      />
    </>
  );
};

export default Partners;

export const generateMetadata = async (
  {
    searchParams,
  }: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
  },
  parent: ResolvingMetadata
): Promise<Metadata> => {
  const searchParamsData = await searchParams;
  const page = await getPageApi("partners");

  return generateMetadataUtil(
    parent,
    "partners/",
    page.metadata,
    searchParamsData
  );
};
