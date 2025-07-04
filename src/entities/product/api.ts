import { backFetch } from "@/src/shared/api";
import { ProductDetail, ProductRemainder } from "./model/types";
import { notFound, permanentRedirect } from "next/navigation";

export const getProductDetailApi = async (
  slug: string
): Promise<ProductDetail> => {
  const res = await backFetch(`catalog/products/${slug}/`, {
    redirect: "manual",
  });
  if (res.status === 404) {
    notFound();
  }
  if (res.status === 301) {
    permanentRedirect(`/product${res.headers.get("Location")}`);
  }
  return res.json();
};

export const getProductRemainderApi = async (): Promise<ProductRemainder[]> => {
  const res = await backFetch("catalog/products/remainder/");
  return res.json();
};
