import { getPolicyApi } from "@/src/pagesFSD/general/api";
import General from "@/src/pagesFSD/general/ui/General";
import Breadcrumbs from "@/src/widgets/breadcrumbs/Breadcrumbs";
import BreadcrumbsItem from "@/src/widgets/breadcrumbs/BreadcrumbsItem";

const Agreement = async () => {
  const policy = await getPolicyApi("agreement");
  return (
    <>
      <Breadcrumbs>
        <BreadcrumbsItem>Пользовательское соглашение</BreadcrumbsItem>
      </Breadcrumbs>
      <General general={policy} />
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
