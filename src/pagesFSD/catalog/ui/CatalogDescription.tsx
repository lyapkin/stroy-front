import { getCategoryGroupsApi } from "@/src/entities/category/api";
import s from "./styles.module.css";
import "@/src/shared/styles/ck.css";
import cn from "classnames";

const CatalogDescription = async ({
  groupSlug,
  categorySlug,
}: CatalogDescriptionProps) => {
  if (!groupSlug) return null;

  const categoryGroups = await getCategoryGroupsApi();

  if (categorySlug) {
    const description = categoryGroups
      .find((item) => item.slug === groupSlug)
      ?.categories.find((item) => item.slug === categorySlug)?.description;
    return description ? (
      <div
        className={cn(s.catalog__description, "ck")}
        dangerouslySetInnerHTML={{ __html: description }}
      />
    ) : null;
  }

  const description = categoryGroups.find(
    (item) => item.slug === groupSlug
  )?.description;
  return description ? (
    <div
      className={cn(s.catalog__description, "ck")}
      dangerouslySetInnerHTML={{ __html: description }}
    />
  ) : null;
};

interface CatalogDescriptionProps {
  groupSlug?: string;
  categorySlug?: string;
}

export default CatalogDescription;
