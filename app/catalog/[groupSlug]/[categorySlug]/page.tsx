import { Catalog } from "@/src/pagesFSD";

const CatalogPage = async ({
  params,
}: {
  params: Promise<{ groupSlug: string; categorySlug: string }>;
}) => {
  const { groupSlug, categorySlug } = await params;
  return <Catalog groupSlug={groupSlug} categorySlug={categorySlug} />;
};

export default CatalogPage;
