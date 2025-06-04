import { getProductDetailApi } from "@/src/entities/product/api";
import { Product } from "@/src/pagesFSD";

const ProductPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const product = await getProductDetailApi(slug);
  return <Product product={product} />;
};

export default ProductPage;
