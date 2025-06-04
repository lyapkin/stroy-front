import { PropsWithChildren, Suspense } from "react";
import FiltersProvider from "./FiltersProvider";
import CategoriesSkeleton from "./CategoriesSkeleton";
import Categories from "./Categories";
import { FilterCategory } from "./types";
import s from "./styles.module.css";
import cn from "classnames";

const FilterBy = ({
  children,
  getFilterApi,
  className,
  all = true,
}: FilterByProps) => {
  return (
    <FiltersProvider all={all}>
      <div className={cn(s.filterByBlock, className)}>
        <Suspense fallback={<CategoriesSkeleton />}>
          <Categories getFilterApi={getFilterApi} />
        </Suspense>
      </div>
      {children}
    </FiltersProvider>
  );
};

interface FilterByProps extends PropsWithChildren {
  all?: boolean;
  getFilterApi: () => Promise<FilterCategory[]>;
  className?: string;
}

export default FilterBy;
