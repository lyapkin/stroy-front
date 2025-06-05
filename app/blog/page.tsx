import Blog from "@/src/pagesFSD/blog/ui/Blog";
import Breadcrumbs from "@/src/widgets/breadcrumbs/Breadcrumbs";
import BreadcrumbsItem from "@/src/widgets/breadcrumbs/BreadcrumbsItem";

const BlogPage = () => {
  return (
    <>
      <Breadcrumbs>
        <BreadcrumbsItem>Блог</BreadcrumbsItem>
      </Breadcrumbs>
      <Blog />
    </>
  );
};

export default BlogPage;
