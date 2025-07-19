"use client";
import { useCart } from "@/src/app/providers/CartProvider/CartProvider";
import CartLink from "./CartLink";
import s from "./styles.module.css";
import { usePathname } from "next/navigation";

const CartLinkMobile = () => {
  const { cart } = useCart();
  const path = usePathname();
  return (
    cart &&
    Object.values(cart).reduce((sum, item) => (sum += item), 0) > 0 &&
    !path.startsWith("/cart") && (
      <div className={s.cartLinkMobile}>
        <CartLink />
      </div>
    )
  );
};

export default CartLinkMobile;
