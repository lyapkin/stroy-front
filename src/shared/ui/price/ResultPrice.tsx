import { applyDiscountToPrice } from "./utils";
import { ResultPriceProps } from "./types";

const ResultPrice = ({ price, discount, className }: ResultPriceProps) => {
  return (
    <span className={className}>{`${applyDiscountToPrice(
      price,
      discount
    )} ₽`}</span>
  );
};

export default ResultPrice;
