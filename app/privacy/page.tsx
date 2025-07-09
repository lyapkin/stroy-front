import { getPolicyApi } from "@/src/pagesFSD/general/api";
import General from "@/src/pagesFSD/general/ui/General";
import Breadcrumbs from "@/src/widgets/breadcrumbs/Breadcrumbs";
import BreadcrumbsItem from "@/src/widgets/breadcrumbs/BreadcrumbsItem";

const Privacy = async () => {
  const policy = await getPolicyApi("privacy");

  const jsonLdBreadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Политика конфиденциальности",
        item: `${process.env.NEXT_PUBLIC_SITE_URL}/privacy/#`,
      },
    ],
  };

  return (
    <>
      <Breadcrumbs>
        <BreadcrumbsItem>Политика конфиденциальности</BreadcrumbsItem>
      </Breadcrumbs>
      <General general={policy} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumbs) }}
      />
    </>
  );
};

export default Privacy;

export const metadata = {
  alternates: {
    canonical: "privacy/",
  },
  robots: { index: false, follow: true },
};
