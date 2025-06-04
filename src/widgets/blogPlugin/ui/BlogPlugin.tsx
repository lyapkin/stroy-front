import { FilterBy } from "@/src/features";
import s from "./styles.module.css";
import cn from "classnames";
import BlogContent from "./BlogContent";
import CustomLink from "@/src/shared/ui/CustomLink/CustomLink";
import { getBlogCategoriesApi } from "@/src/entities/blog/api/api";

const BlogPlugin = () => {
  return (
    <section className={cn(s.blogSection, "section")}>
      <div className="container">
        <div className={s.blog}>
          <h2 className={cn(s.blog__title, "section-title")}>
            <b>Читайте в нашем блоге</b>
          </h2>
          <FilterBy
            getFilterApi={getBlogCategoriesApi}
            className={s.blog__filters}
          >
            <BlogContent />
          </FilterBy>
          <CustomLink href={"/blog/"} className={s.blog__link}>
            Читать еще новости
          </CustomLink>
        </div>
      </div>
    </section>
  );
};

export default BlogPlugin;
