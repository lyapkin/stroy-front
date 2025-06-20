import s from "./styles.module.css";
import cn from "classnames";
import { ListProps } from "./types";

const List = <T extends object & { ["id"]: number | string }>({
  data,
  render,
  className,
  itemClassName,
}: ListProps<T>) => {
  return (
    <ul className={cn(s.list, className)}>
      {data.map((item, i) => {
        return (
          <li
            key={"id" in item ? item.id : i}
            className={cn(s.list__item, itemClassName ? itemClassName(i) : "")}
          >
            {render(item, i)}
          </li>
        );
      })}
    </ul>
  );
};

export default List;
