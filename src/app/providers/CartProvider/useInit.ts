import { Dispatch, SetStateAction, useEffect } from "react";
import { getProductsExist } from "./api";
import { ProductBase } from "@/src/entities/product";

export const useInit = (
  setCart: Dispatch<
    SetStateAction<Record<ProductBase["id"], number> | undefined>
  >
) => {
  useEffect(() => {
    const localStorageCart = localStorage.getItem("cart");
    const checkProductsExist = async () => {
      const parsedCart = localStorageCart ? JSON.parse(localStorageCart) : {};
      const res = await getProductsExist(
        Object.keys(parsedCart).map((item) => Number(item))
      );

      if (res.length === 0) {
        setCart({});
        return;
      }

      const newCart: Record<ProductBase["id"], number> = {};
      for (const key of res) {
        newCart[key] = parsedCart[key];
      }
      setCart(newCart);
    };
    checkProductsExist();
  }, [setCart]);
};
