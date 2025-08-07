"use client";
import Button from "@/src/shared/ui/Button/Button";
import CartIcon from "@/src/shared/ui/icons/CartIcon";
import s from "./styles.module.css";
import { ButtonProps } from "@/src/shared/ui/Button/types";
import { useCart } from "@/src/app/providers/CartProvider/CartProvider";
import CheckIcon from "@/src/shared/ui/icons/CheckIcon";
import Spinner from "@/src/shared/ui/loading/spinners/Spinner";
// import useYM from "@/src/shared/hooks/useYM";

const AddToCart = ({ itemId, ...rest }: AddToCartProps) => {
  const { cart, plusItem } = useCart();
  // const { reachGoal } = useYM(103148704);

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
      onClick={
        !itemInCart
          ? () => {
              // reachGoal("add_to_cart");
              plusItem(itemId);
            }
          : () => {}
      }
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
