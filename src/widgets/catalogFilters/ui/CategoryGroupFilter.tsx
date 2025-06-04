import Expender from "@/src/shared/ui/Expender/Expender";
import ArrowDownIcon from "@/src/shared/ui/icons/ArrowDownIcon";
import s from "./styles.module.css";
import List from "@/src/shared/ui/List/List";
import Link from "next/link";
import CheckboxInput from "@/src/shared/ui/form/CheckboxInput";
import cn from "classnames";
import { CategoryGroup } from "@/src/entities/category";

const CategoryGroupFilter = async ({
  groups,
  groupSlug,
}: CategoryGroupFilterProps) => {
  return (
    <Expender
      // header={<span className={s.filters__head}>Комплектующие к опалубке</span>}
      indicator={<ArrowDownIcon />}
      isOpenDefault={true}
      className={cn(s.filters__block, s.filters__block_headless)}
    >
      <List
        className={s.filters__list}
        data={groups}
        render={(item) => (
          <Link href={`/catalog/${item.slug}/`}>
            <CheckboxInput
              readOnly
              label={item.name}
              checked={groupSlug === item.slug}
            />
          </Link>
        )}
      />
    </Expender>
  );
};

interface CategoryGroupFilterProps {
  groups: CategoryGroup[];
  groupSlug?: string;
}

export default CategoryGroupFilter;
