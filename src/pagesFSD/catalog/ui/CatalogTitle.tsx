import { CatalogTitleProps } from "../types";
import s from "./styles.module.css";
import cn from "classnames";

const CatalogTitle = ({
  groups,
  groupSlug,
  categorySlug,
}: CatalogTitleProps) => {
  if (categorySlug) {
    return (
      <h1 className={cn(s.catalog__title, "page-title")}>
        {groups
          .find((item) => item.slug === groupSlug)
          ?.categories.find((item) => item.slug === categorySlug)?.name ||
          "Каталог"}
      </h1>
    );
  }

  if (groupSlug) {
    return (
      <h1 className={cn(s.catalog__title, "page-title")}>
        {groups.find((item) => item.slug === groupSlug)?.name || "Каталог"}
      </h1>
    );
  }

  return <h1 className={cn(s.catalog__title, "page-title")}>Каталог</h1>;
};

export default CatalogTitle;
