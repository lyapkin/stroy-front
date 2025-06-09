import { FilterBy } from "@/src/features";
import s from "./styles.module.css";
import cn from "classnames";
import { getBlogCategoriesApi } from "@/src/entities/blog";
import BlogList from "./BlogList";
import BlogPagination from "./BlogPagination";
import { Suspense } from "react";
import { FormSection } from "@/src/widgets/form";
import { getPageApi } from "@/src/shared/api";

const Blog = async () => {
  const page = await getPageApi("blog");
  return (
    <>
      <div className="page hero">
        <div className="container">
          <main>
            <div className={s.blog}>
              <h1 className={cn(s.blog__title, "page-title")}>{page.title}</h1>
              <FilterBy
                getFilterApi={getBlogCategoriesApi}
                className={s.blog__filters}
              >
                <Suspense>
                  <BlogList className={s.blog__list} />
                </Suspense>
                <Suspense>
                  <BlogPagination className={s.blog__pagination} />
                </Suspense>
              </FilterBy>
            </div>
          </main>
        </div>
      </div>
      <FormSection />
    </>
  );
};

export default Blog;
