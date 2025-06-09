import { generateMetadataUtil } from "@/src/app/utils";
import { getProductDetailApi } from "@/src/entities/product/api";
import { Product } from "@/src/pagesFSD";
import Breadcrumbs from "@/src/widgets/breadcrumbs/Breadcrumbs";
import BreadcrumbsItem from "@/src/widgets/breadcrumbs/BreadcrumbsItem";
import { Metadata, ResolvingMetadata } from "next";

const ProductPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const product = await getProductDetailApi(slug);
  return (
    <>
      <Breadcrumbs>
        <BreadcrumbsItem link="/catalog/">Каталог</BreadcrumbsItem>
        <BreadcrumbsItem>{product.name}</BreadcrumbsItem>
      </Breadcrumbs>
      <Product product={product} />
    </>
  );
};

export default ProductPage;

export const generateMetadata = async (
  {
    params,
    searchParams,
  }: {
    params: Promise<{ slug: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
  },
  parent: ResolvingMetadata
): Promise<Metadata> => {
  const { slug } = await params;
  const searchParamsData = await searchParams;
  const productDetail = await getProductDetailApi(slug);

  return generateMetadataUtil(
    parent,
    `product/${slug}/`,
    productDetail.metadata,
    searchParamsData
  );
};
