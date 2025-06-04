"use client";
import Button from "@/src/shared/ui/Button/Button";
import CartIcon from "@/src/shared/ui/icons/CartIcon";
import s from "./styles.module.css";
import { ButtonProps } from "@/src/shared/ui/Button/types";
import { useCart } from "@/src/app/providers/CartProvider/CartProvider";
import CheckIcon from "@/src/shared/ui/icons/CheckIcon";
import Spinner from "@/src/shared/ui/loading/spinners/Spinner";

const AddToCart = ({ itemId, ...rest }: AddToCartProps) => {
  const { cart, plusItem } = useCart();

  if (!cart) {
    return (
      <Button {...rest} className={s.addToCart} disabled>
        <Spinner />
      </Button>
    );
  }

  const itemInCart = itemId in cart;
  return (
    <Button
      {...rest}
      className={s.addToCart}
      onClick={!itemInCart ? () => plusItem(itemId) : () => {}}
    >
      {itemInCart ? (
        <>
          В корзине <CheckIcon />
        </>
      ) : (
        <>
          В корзину <CartIcon />
        </>
      )}
    </Button>
  );
};

interface AddToCartProps extends ButtonProps {
  itemId: number;
}

export default AddToCart;
