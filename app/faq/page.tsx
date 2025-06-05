import Faq from "@/src/pagesFSD/faq/ui/Faq";
import Breadcrumbs from "@/src/widgets/breadcrumbs/Breadcrumbs";
import BreadcrumbsItem from "@/src/widgets/breadcrumbs/BreadcrumbsItem";

const FaqPage = () => {
  return (
    <>
      <Breadcrumbs>
        <BreadcrumbsItem>FAQ</BreadcrumbsItem>
      </Breadcrumbs>
      <Faq />
    </>
  );
};

export default FaqPage;
