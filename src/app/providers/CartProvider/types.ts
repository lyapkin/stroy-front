import { ProductBase } from "@/src/entities/product";
import { Dispatch, SetStateAction } from "react";

export interface CartContext {
  // isProductInCart: (id: ProductBase["id"]) => boolean | undefined;
  plusItem: (id: ProductBase["id"]) => void;
  minusItem: (id: ProductBase["id"]) => void;
  removeItem: (id: ProductBase["id"]) => void;
  // cleanCart: () => void;
  setCart: Dispatch<SetStateAction<Record<number, number> | undefined>>;
  cart?: Record<ProductBase["id"], number>;
  // cartQuantity?: number;
  // productsIdInCart?: ProductBase["id"][];
}
