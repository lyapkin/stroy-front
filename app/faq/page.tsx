import { getPageApi } from "@/src/shared/api";
import { generateMetadataUtil } from "@/src/app/utils";
import Faq from "@/src/pagesFSD/faq/ui/Faq";
import Breadcrumbs from "@/src/widgets/breadcrumbs/Breadcrumbs";
import BreadcrumbsItem from "@/src/widgets/breadcrumbs/BreadcrumbsItem";
import { Metadata, ResolvingMetadata } from "next";

const FaqPage = async () => {
  const page = await getPageApi("faq");
  return (
    <>
      <Breadcrumbs>
        <BreadcrumbsItem>{page.title}</BreadcrumbsItem>
      </Breadcrumbs>
      <Faq />
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
