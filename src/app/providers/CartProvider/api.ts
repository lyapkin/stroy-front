import { ProductBase } from "@/src/entities/product";

export const getProductsExist = async (
  ids: ProductBase["id"][]
): Promise<ProductBase["id"][]> => {
  if (ids.length === 0) return [];

  const url = new URL(
    `catalog/cart/exist/`,
    process.env.NEXT_PUBLIC_API_BASE_URL
  );

  url.searchParams.set("id", ids.join(","));

  const res = await fetch(url);

  return await res.json();
};
