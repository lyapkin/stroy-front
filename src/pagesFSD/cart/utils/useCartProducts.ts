import { useCart } from "@/src/app/providers/CartProvider/CartProvider";
import { getCartProductsApi } from "../api";
import { useQuery } from "@tanstack/react-query";
import { ProductBase } from "@/src/entities/product";

export const useCartProducts = () => {
  const { cart } = useCart();

  const query = useQuery({
    queryKey: ["cart", "products", Object.keys(cart || {})],
    queryFn: () =>
      getCartProductsApi(
        Object.keys(cart as Record<ProductBase["id"], number>).map((item) =>
          Number(item)
        )
      ),
    enabled: Boolean(cart),
  });

  return query;
};
