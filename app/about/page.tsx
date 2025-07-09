import { getPageApi } from "@/src/shared/api";
import { generateMetadataUtil } from "@/src/app/utils";
import About from "@/src/pagesFSD/about/ui/About";
import Breadcrumbs from "@/src/widgets/breadcrumbs/Breadcrumbs";
import BreadcrumbsItem from "@/src/widgets/breadcrumbs/BreadcrumbsItem";
import { Metadata, ResolvingMetadata } from "next";

const AboutPage = async () => {
  const jsonLdBreadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "О компании",
        item: `${process.env.NEXT_PUBLIC_SITE_URL}/about/#`,
      },
    ],
  };
  return (
    <>
      <Breadcrumbs>
        <BreadcrumbsItem>О компании</BreadcrumbsItem>
      </Breadcrumbs>
      <About />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumbs) }}
      />
    </>
  );
};

export default AboutPage;

export const generateMetadata = async (
  {
    searchParams,
  }: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
  },
  parent: ResolvingMetadata
): Promise<Metadata> => {
  const searchParamsData = await searchParams;
  const page = await getPageApi("about");

  return generateMetadataUtil(
    parent,
    "about/",
    page.metadata,
    searchParamsData
  );
};
