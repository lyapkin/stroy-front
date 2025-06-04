export const applyDiscountToPrice = (
  price: number,
  discount?: number
): number => {
  if (!discount) {
    return price;
  }

  const result = Math.ceil(price * ((100 - discount) / 100));
  return result;
};
