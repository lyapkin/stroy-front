import Expender from "@/src/shared/ui/Expender/Expender";
import ArrowDownIcon from "@/src/shared/ui/icons/ArrowDownIcon";
import s from "./styles.module.css";
import List from "@/src/shared/ui/List/List";
import Link from "next/link";
import CheckboxInput from "@/src/shared/ui/form/CheckboxInput";
import { CategoryGroup } from "@/src/entities/category";
import cn from "classnames";

const CategoryFilter = async ({
  prefix,
  categorySlug,
  categories,
}: CategoryFilterProps) => {
  if (!categories) return null;

  return (
    <Expender
      header={<span className={s.filters__head}>Категории</span>}
      indicator={<ArrowDownIcon />}
      isOpenDefault={true}
      className={cn(s.filters__block, s.filters__categories)}
    >
      <List
        className={s.filters__list}
        data={categories}
        render={(item) => (
          <Link href={`${prefix}${item.slug}/`}>
            <CheckboxInput
              readOnly
              label={item.name}
              checked={categorySlug === item.slug}
            />
          </Link>
        )}
      />
    </Expender>
  );
};

interface CategoryFilterProps {
  prefix: string;
  categories?: CategoryGroup["categories"];
  categorySlug?: string;
}

export default CategoryFilter;
