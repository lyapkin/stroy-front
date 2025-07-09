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
        item: `${process.env.NEXT_PUBLIC_SITE_URL}/catalog/`,
      },
      // {
      //   "@type": "ListItem",
      //   position: 2,
      //   name: product.,
      //   item: `${process.env.NEXT_PUBLIC_SITE_URL}/catalog/${product.categories[0].slug}/`,
      // },
      {
        "@type": "ListItem",
        position: 2,
        name: product.name,
        item: `${process.env.NEXT_PUBLIC_SITE_URL}/product/${slug}/#`,
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

  const meta = generateMetadataUtil(
    parent,
    `product/${slug}/`,
    productDetail.metadata,
    searchParamsData
  );
  return {
    ...meta,
    openGraph: {
      // title: "This is title",
      // description: " This is description",
      type: "website",
      // url: "https://yourwebsite.com/blog",
      images: [
        {
          // image extension can be anything like jpg, png, webp, etc.
          url: productDetail.images[0].url,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      // title: productDetail.name,
      // description: "This is description",
      card: "summary_large_image",
      images: [
        {
          url: productDetail.images[0].url,
          width: 1200,
          height: 630,
          type: "image/webp",
        },
      ],
    },
  };
};
