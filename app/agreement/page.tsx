import { getPolicyApi } from "@/src/pagesFSD/general/api";
import General from "@/src/pagesFSD/general/ui/General";
import Breadcrumbs from "@/src/widgets/breadcrumbs/Breadcrumbs";
import BreadcrumbsItem from "@/src/widgets/breadcrumbs/BreadcrumbsItem";

const Agreement = async () => {
  const policy = await getPolicyApi("agreement");
  const jsonLdBreadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Пользовательское соглашение",
        item: `${process.env.SITE_URL}/agreement/`,
      },
    ],
  };
  return (
    <>
      <Breadcrumbs>
        <BreadcrumbsItem>Пользовательское соглашение</BreadcrumbsItem>
      </Breadcrumbs>
      <General general={policy} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumbs) }}
      />
    </>
  );
};

export default Agreement;

export const metadata = {
  alternates: {
    canonical: "agreement/",
  },
  robots: { index: false, follow: true },
};
