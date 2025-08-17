import { backFetch } from "@/src/shared/api";
import { Attribute } from "./types";

export const getAttributesApi = async (
  params: number[]
): Promise<Attribute[]> => {
  const usp = new URLSearchParams({ types: params.toString() });
  const res = await backFetch(`catalog/attributes/?${usp.toString()}`);
  return res.json();
};
