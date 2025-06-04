import s from "./styles.module.css";
import CategoryGroupFilter from "./CategoryGroupFilter";
import CategoryFilter from "./CategoryFilter";
import Filter from "./Filter";
import { HTMLAttributes, Suspense } from "react";
import AttributesFilter from "./AttributesFilter";
import { CategoryGroup } from "@/src/entities/category";
import FiltersWrapper from "./FiltersWrapper";
import Clear from "./Clear";

const Filters = ({
  className,
  groups,
  groupSlug,
  categorySlug,
}: FiltersProps) => {
  return (
    <FiltersWrapper className={className}>
      <div className={s.filters}>
        <CategoryGroupFilter groupSlug={groupSlug} groups={groups} />
        {groupSlug && (
          <CategoryFilter
            categories={
              groups.find((item) => item.slug === groupSlug)?.categories
            }
            categorySlug={categorySlug}
            prefix={`/catalog/${groupSlug}/`}
          />
        )}
        {categorySlug && <AttributesFilter category={categorySlug} />}
        <Suspense>
          <Filter
            title="Наличие"
            type="stock"
            data={[
              { id: 1, name: "В наличии", slug: true },
              { id: 2, name: "Под заказ", slug: false },
            ]}
          />
        </Suspense>
        <Clear />
      </div>
    </FiltersWrapper>
  );
};

interface FiltersProps extends HTMLAttributes<HTMLElement> {
  groups: CategoryGroup[];
  groupSlug?: string;
  categorySlug?: string;
}

export default Filters;
