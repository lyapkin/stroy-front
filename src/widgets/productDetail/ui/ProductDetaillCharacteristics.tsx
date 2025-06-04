import { ProductDetaillCharacteristicsProps } from "../types";
import s from "./styles.module.css";
import cn from "classnames";

const ProductDetaillCharacteristics = ({
  characteristics,
  stock,
  remainder,
}: ProductDetaillCharacteristicsProps) => {
  const content = characteristics.map((item) => {
    return (
      <li className={s.characteristics__item} key={item.id}>
        <span className={s.characteristics__name}>{item.attribute}</span>
        <span className={s.characteristics__value}>{item.value}</span>
      </li>
    );
  });

  return (
    <div className={s.characteristics}>
      <p className={cn(s.characteristics__title, s.title)}>Характеристики</p>
      <ul className={s.characteristics__list}>
        <li className={s.characteristics__item}>
          <span className={s.characteristics__name}>Наличие</span>
          <span
            className={cn(s.characteristics__value, {
              [s.characteristics__stock]: stock,
            })}
          >
            {stock ? "В наличии" : "Под заказ"}
          </span>
        </li>
        <li className={s.characteristics__item}>
          <span className={s.characteristics__name}>Актуальный остаток</span>
          <span className={s.characteristics__value}>{remainder} шт</span>
        </li>
        {content}
      </ul>
    </div>
  );
};

export default ProductDetaillCharacteristics;
