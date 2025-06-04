"use client";
import cn from "classnames";
import CartListSkeleton from "./CartListSkeleton";
import { useCartProducts } from "../utils/useCartProducts";
import ProductCard from "./ProductCard";
import EmptyCart from "./EmptyCart";
import ChangeCartQunatity from "@/src/features/cart/changeCartQuantity/ChangeCartQunatity";
import s from "./styles.module.css";
import RemoveFromCart from "@/src/features/cart/removeFromCart/RemoveFromCart";
import { useSearchParams } from "next/navigation";
import FormSubmited from "@/src/shared/ui/form/FormSubmited";

const CartList = ({ className }: CartListProps) => {
  const { data, isError, isPending } = useCartProducts();
  const searchParams = useSearchParams();
  const orderSubmited = searchParams.get("ordered") ? true : false;

  if (isError) {
    return "Что-то пошло не так";
  }

  if (isPending) {
    return <CartListSkeleton />;
  }

  if (data.length === 0 && orderSubmited) {
    return <FormSubmited />;
  }

  if (data.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className={cn(className)}>
      {data.map((item) => {
        return (
          <ProductCard
            key={item.id}
            product={item}
            action={
              <div className={s.productControl}>
                <ChangeCartQunatity itemId={item.id} />
                <RemoveFromCart itemId={item.id} />
              </div>
            }
          />
        );
      })}
    </div>
  );
};

interface CartListProps {
  className: string;
}

export default CartList;
