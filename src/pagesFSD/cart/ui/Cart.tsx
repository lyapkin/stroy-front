import CartForm from "./CartForm";
import CartList from "./CartList";
import CartSum from "../../../widgets/cart/sum/ui/CartSum";
import s from "./styles.module.css";
import cn from "classnames";
import { Suspense } from "react";

const Cart = () => {
  return (
    <div className="page hero">
      <div className="container">
        <main>
          <div className={s.cart}>
            <h1 className={cn(s.cart__title, "page-title")}>Корзина</h1>
            <Suspense>
              <CartList className={s.cart__list} />
            </Suspense>
            <CartForm className={s.cart__form} />
            <CartSum className={s.cart__sum} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Cart;
