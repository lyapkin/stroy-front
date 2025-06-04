import { discount, price } from "@/types";

export const applyDiscountToPrice = (
  price: price,
  discount?: discount
): number => {
  if (!discount) {
    return price;
  }

  const result = Math.ceil(price * ((100 - discount) / 100));
  return result;
};
