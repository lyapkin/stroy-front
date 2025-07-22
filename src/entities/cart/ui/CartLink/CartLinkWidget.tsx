"use client";
import { useCart } from "@/src/app/providers/CartProvider/CartProvider";
import CartLink from "./CartLink";
import s from "./styles.module.css";
import { usePathname } from "next/navigation";

const CartLinkWidget = () => {
  const { cart } = useCart();
  const path = usePathname();
  return (
    cart &&
    Object.values(cart).reduce((sum, item) => (sum += item), 0) > 0 &&
    !path.startsWith("/cart") && (
      <div className={s.cartLinkWidget}>
        <CartLink />
      </div>
    )
  );
};

export default CartLinkWidget;
