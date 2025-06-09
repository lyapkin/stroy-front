import { getPageApi } from "@/src/shared/api";
import { generateMetadataUtil } from "@/src/app/utils";
import { Home } from "@/src/pagesFSD";
import Breadcrumbs from "@/src/widgets/breadcrumbs/Breadcrumbs";
import { Metadata, ResolvingMetadata } from "next";

const HomePage = () => {
  return (
    <>
      <Breadcrumbs home />
      <Home />
    </>
  );
};

export default HomePage;

export const generateMetadata = async (
  {
    searchParams,
  }: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
  },
  parent: ResolvingMetadata
): Promise<Metadata> => {
  const searchParamsData = await searchParams;
  const page = await getPageApi("home");

  return generateMetadataUtil(parent, "/", page.metadata, searchParamsData);
};
