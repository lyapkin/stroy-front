import { backFetch } from "@/src/shared/api";
import { Category } from "./types";
import { permanentRedirect } from "next/navigation";

export const getCategoryApi = async (
  type: "groups" | "categories",
  slug: string
): Promise<Category> => {
  const res = await backFetch(`catalog/${type}/${slug}/`, {
    redirect: "manual",
  });
  if (res.status === 301) {
    permanentRedirect(`/catalog${res.headers.get("Location")}`);
  }
  return res.json();
};
