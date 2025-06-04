import { useQuery } from "@tanstack/react-query";
import { getPostsApi } from "./api";

export const usePostsList = (category: number | null, page?: number) => {
  const query = useQuery({
    queryKey: ["posts", category, null],
    queryFn: () => getPostsApi({ category, page: page || null }),
  });

  return query;
};
