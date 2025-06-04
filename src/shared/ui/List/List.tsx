import s from "./styles.module.css";
import cn from "classnames";
import { ListProps } from "./types";

const List = <T extends object & { ["id"]: number | string }>({
  data,
  render,
  className,
}: ListProps<T>) => {
  return (
    <ul className={cn(s.list, className)}>
      {data.map((item, i) => {
        return (
          <li key={"id" in item ? item.id : i} className={s.list__item}>
            {render(item, i)}
          </li>
        );
      })}
    </ul>
  );
};

export default List;
