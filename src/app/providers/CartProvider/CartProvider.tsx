"use client";
import {
  createContext,
  PropsWithChildren,
  // useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import type { CartContext } from "./types";
// import { isNumber } from "@/src/shared/utils";
// import { productId } from "@/src/shared/types";
import { ProductBase } from "@/src/entities/product";
// import { getProductsExist } from "./api";
import { useInit } from "./useInit";

const CartContext = createContext({} as CartContext);

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }: PropsWithChildren) => {
  const [cart, setCart] = useState<
    Record<ProductBase["id"], number> | undefined
  >(undefined);

  useInit(setCart);

  useEffect(() => {
    if (cart) {
      localStorage.setItem("cart", JSON.stringify(cart));
    } else if (cart === undefined) {
      localStorage.removeItem("cart");
    }
  }, [cart]);

  // const productsIdInCart =
  //   cart &&
  //   Object.keys(cart)
  //     .filter((id) => isNumber(id))
  //     .map((id) => Number(id));

  // const cartQuantity =
  //   cart && Object.values(cart).reduce((sum, q) => (sum += q), 0);

  // const isProductInCart = (id: productId) => {
  //   return cart && id in cart;
  // };

  const plusItem = (id: ProductBase["id"]) => {
    setCart((prev) => {
      const newState = { ...prev };
      if (id in newState) {
        newState[id] += 1;
      } else {
        newState[id] = 1;
      }
      return newState;
    });
  };

  const minusItem = (id: ProductBase["id"]) => {
    setCart((prev) => {
      const newState = { ...prev };
      if (id in newState && newState[id] > 1) {
        newState[id] -= 1;
      } else if (id in newState) {
        return prev;
      } else {
        throw new Error(
          "minusItem can't be used if a product is not in the cart"
        );
      }
      return newState;
    });
  };

  const removeItem = (id: ProductBase["id"]) => {
    setCart((prev) => {
      if (prev && id in prev) {
        const newState = { ...prev };
        delete newState[id];
        return newState;
      } else {
        throw new Error(
          "removeFromCart can't be used if a product is not in the cart"
        );
      }
    });
  };

  // const cleanCart = useCallback(() => {
  //   setCart({});
  // }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        // isProductInCart,
        plusItem,
        minusItem,
        removeItem,
        setCart,
        // cartQuantity,
        // productsIdInCart,
        // cleanCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
