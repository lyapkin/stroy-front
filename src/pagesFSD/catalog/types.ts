import { CategoryGroup } from "@/src/entities/category";
import { Metadata } from "@/src/shared/types";

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
  parent: Category | null;
  slug: string;
  name: string;
  metadata: Metadata | null;
};
