import { ProductDetailDescriptionProps } from "../types";
import s from "./styles.module.css";
import "@/src/app/styles/ck.css";
import cn from "classnames";

const ProductDetailDescription = ({
  description,
}: ProductDetailDescriptionProps) => {
  return (
    <div className={s.description}>
      <p className={cn(s.description__title, s.title)}>Описание</p>
      <div
        className={cn(s.description__content, "ck")}
        dangerouslySetInnerHTML={{ __html: description }}
      ></div>
    </div>
  );
};

export default ProductDetailDescription;
