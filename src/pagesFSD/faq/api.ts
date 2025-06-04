import { FilterCategory } from "@/src/features/filterBy/types";
import { Faq } from "./types";
import { backFetch } from "@/src/shared/api";

export const getFAQCategoriesApi = async (): Promise<FilterCategory[]> => {
  const res = await backFetch("blog/faq-categories/");
  return await res.json();
};

export const getFAQsApi = async (): Promise<Faq[]> => {
  const res = await backFetch("blog/faqs/");
  return await res.json();
};
