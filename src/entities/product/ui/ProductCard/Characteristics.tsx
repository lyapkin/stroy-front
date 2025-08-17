import { ProductPreview } from "../../model/types";
import s from "./styles.module.css";

const Characteristics = ({ characteristics }: CharacteristicsProps) => {
  const content = characteristics.map((item) => {
    return (
      <li key={item.id} className={s.characteristics__item}>
        <span className={s.characteristics__name}>{item.attribute}</span>
        <span className={s.characteristics__value}>
          {item.value} {item.unit}
        </span>
      </li>
    );
  });
  return <ul className={s.characteristics}>{content}</ul>;
};

export interface CharacteristicsProps {
  characteristics: ProductPreview["attributes"];
}

export default Characteristics;
