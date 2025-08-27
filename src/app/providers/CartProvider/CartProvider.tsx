"use client";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import type { CartContext } from "./types";
import { ProductBase } from "@/src/entities/product";
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

  const setItemQuantity = (id: ProductBase["id"], count: number) => {
    setCart((prev) => {
      const newState = { ...prev };
      if (id in newState && count > 0) {
        newState[id] = count;
      } else if (id in newState) {
        return prev;
      } else {
        throw new Error(
          "setItemQuantity can't be used if a product is not in the cart"
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

  return (
    <CartContext.Provider
      value={{
        cart,
        plusItem,
        minusItem,
        setItemQuantity,
        removeItem,
        setCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
