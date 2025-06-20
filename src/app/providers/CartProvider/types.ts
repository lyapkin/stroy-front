import { ProductPrice } from "@/src/entities/product/model/types";
import { Dispatch, SetStateAction } from "react";

export interface CartContext {
  plusItem: (id: ProductPrice["id"]) => void;
  minusItem: (id: ProductPrice["id"]) => void;
  removeItem: (id: ProductPrice["id"]) => void;
  setCart: Dispatch<SetStateAction<Record<number, number> | undefined>>;
  cart?: Record<ProductPrice["id"], number>;
}
