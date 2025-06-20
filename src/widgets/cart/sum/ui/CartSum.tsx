"use client";
import { useCartProducts } from "@/src/pagesFSD/cart/utils/useCartProducts";
import DiscountSum from "./DiscountSum";
import ResultSum from "./ResultSum";
import s from "./styles.module.css";
import cn from "classnames";
import { ProductPrice } from "@/src/entities/product/model/types";

const CartSum = ({ className }: CartSumProps) => {
  const { data, isError, isPending } = useCartProducts();

  if (isError || isPending || data.length === 0) {
    return null;
  }

  const prices = data.reduce(
    (result, item) => [...result, ...item.prices],
    [] as ProductPrice[]
  );

  return (
    <div className={cn(s.sum, className)}>
      <DiscountSum data={prices} />
      <ResultSum data={prices} />
    </div>
  );
};

interface CartSumProps {
  className: string;
}

export default CartSum;
