import { getPolicyApi } from "@/src/pagesFSD/general/api";
import General from "@/src/pagesFSD/general/ui/General";
import Breadcrumbs from "@/src/widgets/breadcrumbs/Breadcrumbs";
import BreadcrumbsItem from "@/src/widgets/breadcrumbs/BreadcrumbsItem";

const Privacy = async () => {
  const policy = await getPolicyApi("privacy");
  console.log(policy);
  return (
    <>
      <Breadcrumbs>
        <BreadcrumbsItem>Политика конфиденциальности</BreadcrumbsItem>
      </Breadcrumbs>
      <General general={policy} />
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
