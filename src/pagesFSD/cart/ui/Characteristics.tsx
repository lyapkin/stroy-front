import { ProductPreview } from "@/src/entities/product/model/types";
import s from "./styles.module.css";
import cn from "classnames";

const Characteristics = ({
  characteristics,
  stock,
  className,
}: CharacteristicsProps) => {
  const content = characteristics.map((item) => {
    return (
      <li key={item.id} className={s.characteristics__item}>
        <span className={s.characteristics__name}>{item.attribute}</span>
        <span className={s.characteristics__value}>{item.value}</span>
      </li>
    );
  });

  return (
    <ul className={cn(s.characteristics, className)}>
      <li className={s.characteristics__item}>
        <span className={s.characteristics__name}>Наличие</span>
        <span
          className={cn(s.characteristics__value, {
            [s.characteristics__value_stock]: stock,
          })}
        >
          {stock ? "В наличии" : "Под заказ"}
        </span>
      </li>
      {content}
    </ul>
  );
};

export interface CharacteristicsProps {
  characteristics: ProductPreview["attributes"];
  stock: boolean;
  className: string;
}

export default Characteristics;
