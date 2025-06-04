import SortIcon from "@/src/shared/ui/icons/SortIcon";
import SortSelect from "./SortSelect";
import s from "./styles.module.css";
import { HTMLAttributes } from "react";
import cn from "classnames";

const Sort = ({ className }: HTMLAttributes<HTMLElement>) => {
  return (
    <div className={cn(s.sort, className)}>
      <p className={s.sort__text}>
        <SortIcon /> <span>Сортировка:</span>
      </p>

      <div className={s.sort__block}>
        <SortSelect />
      </div>
    </div>
  );
};

export default Sort;
