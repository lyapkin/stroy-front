import { PostPreview } from "@/src/entities/blog/model/types";
import { Paginated } from "@/src/features";

type Params = Record<"category" | "page", number | null>;

export const getPostsApi = async (
  params: Params
): Promise<Paginated<PostPreview>> => {
  const url = new URL(`blog/posts/`, process.env.NEXT_PUBLIC_API_BASE_URL);
  let key: keyof Params;
  for (key in params) {
    if (params[key]) {
      url.searchParams.set(key, String(params[key]));
    }
  }

  const res = await fetch(url);
  if (res.status === 404) {
    throw new Error("getPostsApi not allowed return 404");
  }
  return await res.json();
};
