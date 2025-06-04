import { backFetch } from "@/src/shared/api";
import { ProductDetail, ProductRemainder } from "./model/types";
import { notFound } from "next/navigation";

export const getProductDetailApi = async (
  slug: string
): Promise<ProductDetail> => {
  const res = await backFetch(`catalog/products/${slug}/`);
  if (res.status === 404) {
    notFound();
  }
  return res.json();
};

export const getProductRemainderApi = async (): Promise<ProductRemainder[]> => {
  const res = await backFetch("catalog/products/remainder/");
  return res.json();
};
