import { getPageApi } from "@/src/shared/api";
import { generateMetadataUtil } from "@/src/app/utils";
import Contacts from "@/src/pagesFSD/contacts/ui/Contacts";
import Breadcrumbs from "@/src/widgets/breadcrumbs/Breadcrumbs";
import BreadcrumbsItem from "@/src/widgets/breadcrumbs/BreadcrumbsItem";
import { Metadata, ResolvingMetadata } from "next";

const ContactsPage = async () => {
  const page = await getPageApi("contacts");
  return (
    <>
      <Breadcrumbs>
        <BreadcrumbsItem>{page.title}</BreadcrumbsItem>
      </Breadcrumbs>
      <Contacts />
    </>
  );
};

export default ContactsPage;

export const generateMetadata = async (
  {
    searchParams,
  }: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
  },
  parent: ResolvingMetadata
): Promise<Metadata> => {
  const searchParamsData = await searchParams;
  const page = await getPageApi("contacts");

  return generateMetadataUtil(
    parent,
    "contacts/",
    page.metadata,
    searchParamsData
  );
};
