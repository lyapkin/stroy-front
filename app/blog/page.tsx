import { getPageApi } from "@/src/shared/api";
import { generateMetadataUtil } from "@/src/app/utils";
import Blog from "@/src/pagesFSD/blog/ui/Blog";
import Breadcrumbs from "@/src/widgets/breadcrumbs/Breadcrumbs";
import BreadcrumbsItem from "@/src/widgets/breadcrumbs/BreadcrumbsItem";
import { Metadata, ResolvingMetadata } from "next";

const BlogPage = async () => {
  return (
    <>
      <Breadcrumbs>
        <BreadcrumbsItem>Блог</BreadcrumbsItem>
      </Breadcrumbs>
      <Blog />
    </>
  );
};

export default BlogPage;

export const generateMetadata = async (
  {
    searchParams,
  }: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
  },
  parent: ResolvingMetadata
): Promise<Metadata> => {
  const searchParamsData = await searchParams;
  const page = await getPageApi("blog");

  return generateMetadataUtil(parent, "blog/", page.metadata, searchParamsData);
};
