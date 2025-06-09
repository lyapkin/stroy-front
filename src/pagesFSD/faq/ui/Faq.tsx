import { FilterBy } from "@/src/features";
import s from "./styles.module.css";
import { FormSection } from "@/src/widgets/form";
import Questions from "./Questions";
import { Suspense } from "react";
import QuestionsListSkeleton from "./QuestionsListSkeleton";
import { getFAQCategoriesApi } from "../api";
import cn from "classnames";
import { getPageApi } from "@/src/shared/api";

const Faq = async () => {
  const page = await getPageApi("faq");
  return (
    <>
      <div className="page hero">
        <div className="container">
          <main>
            <div className={s.faq}>
              <h1 className={cn(s.faq__title, "page-title")}>{page.title}</h1>
              <FilterBy
                getFilterApi={getFAQCategoriesApi}
                className={s.faq__filters}
              >
                <Suspense fallback={<QuestionsListSkeleton />}>
                  <Questions />
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

export default Faq;
