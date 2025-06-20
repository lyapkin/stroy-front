import { FullPriceProps } from "./types";

const FullPrice = ({ price, discount, className }: FullPriceProps) => {
  return discount ? (
    <span
      className={className}
      style={{ textDecoration: "line-through" }}
    >{`${price} ₽`}</span>
  ) : null;
};

export default FullPrice;
