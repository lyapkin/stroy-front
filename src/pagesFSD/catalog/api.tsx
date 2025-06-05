import { backFetch } from "@/src/shared/api";
import { Category } from "./types";

export const getCategoryApi = async (
  type: "groups" | "categories",
  slug: string
): Promise<Category> => {
  const res = await backFetch(`catalog/${type}/${slug}/`);
  return res.json();
};
