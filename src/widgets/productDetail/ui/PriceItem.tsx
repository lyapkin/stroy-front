import { ProductPrice } from "@/src/entities/product/model/types";
import s from "./styles.module.css";
import ResultPrice from "@/src/shared/ui/price/ResultPrice";
import { useCart } from "@/src/app/providers/CartProvider/CartProvider";
import CartIcon from "@/src/shared/ui/icons/CartIcon";
import cn from "classnames";

const PriceItem = ({ price, onClick }: PriceItemProps) => {
  const { cart } = useCart();
  return (
    <button
      className={cn({
        [s.priceItem_loading]: !cart,
      })}
      onClick={onClick}
    >
      <span className={s.priceItem__name}>
        {price.name}
        {cart && price.id in cart && <CartIcon />}
      </span>
      <span className={s.priceItem__price}>
        <span className={s.priceItem__discount}>
          {price.discount && `-${price.discount}%`}
        </span>
        <ResultPrice
          className={s.priceItem__sum}
          price={price.price}
          discount={price.discount}
        />
      </span>
    </button>
  );
};

interface PriceItemProps {
  price: ProductPrice;
  onClick: () => void;
}

export default PriceItem;
