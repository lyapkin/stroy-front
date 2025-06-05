import About from "@/src/pagesFSD/about/ui/About";
import Breadcrumbs from "@/src/widgets/breadcrumbs/Breadcrumbs";
import BreadcrumbsItem from "@/src/widgets/breadcrumbs/BreadcrumbsItem";

const AboutPage = () => {
  return (
    <>
      <Breadcrumbs>
        <BreadcrumbsItem>О компании</BreadcrumbsItem>
      </Breadcrumbs>
      <About />
    </>
  );
};

export default AboutPage;
