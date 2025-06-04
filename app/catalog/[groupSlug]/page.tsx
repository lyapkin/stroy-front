import { Catalog } from "@/src/pagesFSD";

const CatalogPage = async ({
  params,
}: {
  params: Promise<{ groupSlug: string }>;
}) => {
  const { groupSlug } = await params;
  return <Catalog groupSlug={groupSlug} />;
};

export default CatalogPage;
