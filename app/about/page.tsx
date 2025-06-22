import { getPageApi } from "@/src/shared/api";
import { generateMetadataUtil } from "@/src/app/utils";
import About from "@/src/pagesFSD/about/ui/About";
import Breadcrumbs from "@/src/widgets/breadcrumbs/Breadcrumbs";
import BreadcrumbsItem from "@/src/widgets/breadcrumbs/BreadcrumbsItem";
import { Metadata, ResolvingMetadata } from "next";

const AboutPage = async () => {
  return (
    <>
      <Breadcrumbs>
        <BreadcrumbsItem>О компании</BreadcrumbsItem>
      </Breadcrumbs>
      <About />
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
