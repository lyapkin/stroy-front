"use client";
import Link from "next/link";
import s from "./styles.module.css";
import CartIcon from "@/src/shared/ui/icons/CartIcon";
import { useCart } from "@/src/app/providers/CartProvider/CartProvider";

const CartLink = () => {
  const { cart } = useCart();

  return (
    <Link
      href={"/cart/"}
      className={s.cartLink}
      data-value={
        cart
          ? Object.values(cart).reduce((sum, item) => (sum += item), 0)
          : "..."
      }
    >
      <CartIcon />
    </Link>
  );
};

export default CartLink;
