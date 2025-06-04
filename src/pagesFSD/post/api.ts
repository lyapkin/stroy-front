import { PostContent } from "@/src/entities/blog/model/types";
import { backFetch } from "@/src/shared/api";
import { notFound } from "next/navigation";

export const getPostApi = async (slug: string): Promise<PostContent> => {
  const res = await backFetch(`blog/posts/${slug}/`);
  if (res.status === 404) {
    notFound();
  }
  return await res.json();
};
