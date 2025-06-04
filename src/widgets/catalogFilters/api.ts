import { backFetch } from "@/src/shared/api";
import { Attribute } from "./types";

export const getAttributesApi = async (
  category: string
): Promise<Attribute[]> => {
  const res = await backFetch(`catalog/attributes/${category}/`);
  return res.json();
};
