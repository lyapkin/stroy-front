import { HTMLAttributes } from "react";
import s from "./styles.module.css";
import { CategoryGroup } from "@/src/entities/category";
import CategoryGroupFilter from "./CategoryGroupFilter";
import CategoryFilter from "./CategoryFilter";
import cn from "classnames";

const MobileCategories = ({
  className,
  groups,
  groupSlug,
  categorySlug,
}: MobileCategoriesProps) => {
  return (
    <div className={cn(className, s.mobileCategories)}>
      {!groupSlug && (
        <CategoryGroupFilter
          groupSlug={groupSlug}
          groups={groups}
          head={true}
          isOpen={!Boolean(groupSlug)}
        />
      )}
      {groupSlug && !categorySlug && (
        <CategoryFilter
          categories={
            groups.find((item) => item.slug === groupSlug)?.categories
          }
          categorySlug={categorySlug}
          prefix={`/catalog/${groupSlug}/`}
        />
      )}
    </div>
  );
};

interface MobileCategoriesProps extends HTMLAttributes<HTMLElement> {
  groups: CategoryGroup[];
  groupSlug?: string;
  categorySlug?: string;
}

export default MobileCategories;
