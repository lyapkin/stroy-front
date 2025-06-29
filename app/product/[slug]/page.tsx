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

  const offers = {
    "@type": "Offer",
    price: product.prices[0].price,
    priceCurrency: "RUB",
  };
  const image = product.images.length > 0 ? product.images[0].url : undefined;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image,
    offers,
  };

  const jsonLdBreadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Каталог",
        item: `${process.env.BACK_URL}/catalog/`,
      },
      // {
      //   "@type": "ListItem",
      //   position: 2,
      //   name: product.,
      //   item: `${process.env.BACK_URL}/catalog/${product.categories[0].slug}/`,
      // },
      {
        "@type": "ListItem",
        position: 2,
        name: product.name,
        item: `${process.env.BACK_URL}/product/${slug}/`,
      },
    ],
  };

  return (
    <>
      <Breadcrumbs>
        <BreadcrumbsItem link="/catalog/">Каталог</BreadcrumbsItem>
        <BreadcrumbsItem>{product.name}</BreadcrumbsItem>
      </Breadcrumbs>
      <Product product={product} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumbs) }}
      />
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
