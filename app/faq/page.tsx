import { getPageApi } from "@/src/shared/api";
import { generateMetadataUtil } from "@/src/app/utils";
import Faq from "@/src/pagesFSD/faq/ui/Faq";
import Breadcrumbs from "@/src/widgets/breadcrumbs/Breadcrumbs";
import BreadcrumbsItem from "@/src/widgets/breadcrumbs/BreadcrumbsItem";
import { Metadata, ResolvingMetadata } from "next";

const FaqPage = async () => {
  const jsonLdBreadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "FAQ",
        item: `${process.env.NEXT_PUBLIC_SITE_URL}/faq/#`,
      },
    ],
  };
  return (
    <>
      <Breadcrumbs>
        <BreadcrumbsItem>FAQ</BreadcrumbsItem>
      </Breadcrumbs>
      <Faq />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumbs) }}
      />
    </>
  );
};

export default FaqPage;

export const generateMetadata = async (
  {
    searchParams,
  }: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
  },
  parent: ResolvingMetadata
): Promise<Metadata> => {
  const searchParamsData = await searchParams;
  const page = await getPageApi("faq");

  return generateMetadataUtil(parent, "faq/", page.metadata, searchParamsData);
};
