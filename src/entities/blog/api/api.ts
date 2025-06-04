import { backFetch } from "@/src/shared/api";
import { BlogCategory } from "../model/types";

export const getBlogCategoriesApi = async (): Promise<BlogCategory[]> => {
  const res = await backFetch("blog/post-categories/");
  return await res.json();
};
