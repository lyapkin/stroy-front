import { ProductPrice } from "../../model/types";
import s from "./styles.module.css";

const Discount = ({ discount }: DiscountProps) => {
  return (
    discount && <span className={s.card__discount}>-{discount}% Скидка</span>
  );
};

export interface DiscountProps {
  discount?: ProductPrice["discount"];
}

export default Discount;
