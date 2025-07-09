import Cart from "@/src/pagesFSD/cart/ui/Cart";
import Breadcrumbs from "@/src/widgets/breadcrumbs/Breadcrumbs";
import BreadcrumbsItem from "@/src/widgets/breadcrumbs/BreadcrumbsItem";

const CartPage = () => {
  const jsonLdBreadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Корзина",
        item: `${process.env.NEXT_PUBLIC_SITE_URL}/cart/#`,
      },
    ],
  };
  return (
    <>
      <Breadcrumbs>
        <BreadcrumbsItem>Корзина</BreadcrumbsItem>
      </Breadcrumbs>
      <Cart />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumbs) }}
      />
    </>
  );
};

export default CartPage;

export const metadata = {
  alternates: {
    canonical: "cart/",
  },
  robots: { index: false, follow: true },
};
