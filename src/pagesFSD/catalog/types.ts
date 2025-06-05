import { CategoryGroup } from "@/src/entities/category";

export interface CatalogProps {
  groupSlug?: string;
  categorySlug?: string;
}

export interface CatalogTitleProps {
  groups: CategoryGroup[];
  groupSlug?: string;
  categorySlug?: string;
}

export type Category = {
  parents: Category[] | null;
  slug: string;
  name: string;
};
