import { ProductPreview } from "@/src/entities/product/model/types";
import s from "./styles.module.css";
import { useCart } from "@/src/app/providers/CartProvider/CartProvider";
import { applyDiscountToPrice } from "@/src/shared/ui/price/utils";
import WalletIcon from "@/src/shared/ui/icons/WalletIcon";
import ResultPrice from "@/src/shared/ui/price/ResultPrice";
import FullPrice from "@/src/shared/ui/price/FullPrice";

const ResultSum = ({ data }: ResultSumProps) => {
  const { cart } = useCart();
  let fullPrice = 0;

  if (!cart) return null;

  const resultSum = Object.entries(cart).reduce(
    (sum, [productId, quantity]) => {
      const product = data.find((product) => product.id == Number(productId));
      if (product) {
        const resultPrice = applyDiscountToPrice(
          product.price,
          product.discount
        );
        sum = sum + resultPrice * quantity;
        fullPrice = fullPrice + product.price * quantity;
      }
      return sum;
    },
    0
  );
  return (
    <>
      <div className={s.sum__resultTitle}>
        <span className={s.sum__icon}>
          <WalletIcon />
        </span>
        <span className={s.resultTitle__text}>Итого</span>
      </div>
      <div className={s.sum__resultValue}>
        <ResultPrice price={resultSum} className={s.price__result} />
        <FullPrice price={fullPrice} discount={0} className={s.price__full} />
      </div>
    </>
  );
};

interface ResultSumProps {
  data: ProductPreview[];
}

export default ResultSum;
