import { JSX } from "react";
import s from "./styles.module.css";

const ProductQualityText = ({
  title,
  text,
}: {
  title: string;
  text: string | JSX.Element;
}) => {
  return (
    <div className={s.productQualityContent__itemWrapper}>
      <div className={s.productQualityContent__item}>
        <h3 className={s.productQualityContent__title}>{title}</h3>
        <div className={s.productQualityContent__text}>{text}</div>
      </div>
    </div>
  );
};

export default ProductQualityText;
