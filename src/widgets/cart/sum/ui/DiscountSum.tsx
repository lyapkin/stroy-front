import { ProductPrice } from "@/src/entities/product/model/types";
import s from "./styles.module.css";
import { useCart } from "@/src/app/providers/CartProvider/CartProvider";
import { applyDiscountToPrice } from "@/src/shared/ui/price/utils";
import RoundStatisticIcon from "@/src/shared/ui/icons/RoundStatisticIcon";

const DiscountSum = ({ data }: DiscountSumProps) => {
  const { cart } = useCart();

  const discountSum =
    cart &&
    Object.entries(cart).reduce((sum, [productId, quantity]) => {
      const product = data.find((product) => product.id == Number(productId));
      if (product) {
        const resultPrice = applyDiscountToPrice(
          product.price,
          product.discount
        );

        sum =
          sum +
          (resultPrice === product.price
            ? 0
            : (product.price - resultPrice) * quantity);
      }
      return sum;
    }, 0);

  if (!discountSum) return null;

  return (
    <>
      <div className={s.sum__discountTitle}>
        <span className={s.sum__icon}>
          <RoundStatisticIcon />
        </span>
        <span className={s.discountTitle__text}>Скидка</span>
      </div>
      <div className={s.sum__discountValue}>{`${discountSum} ₽`}</div>
    </>
  );
};

interface DiscountSumProps {
  data: ProductPrice[];
}

export default DiscountSum;
