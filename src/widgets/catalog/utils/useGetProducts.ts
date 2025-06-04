import { useQuery } from "@tanstack/react-query";
import { useParams, useSearchParams } from "next/navigation";
import useQueryKey from "./useQueryKey";
import { getProductsApi } from "../api";

export const useGetProducts = () => {
  const params = useParams<{ groupSlug?: string; categorySlug?: string }>();
  const queryKey = useQueryKey();
  const searchParams = useSearchParams();

  const obj = useQuery({
    queryKey: ["products", params, queryKey],
    queryFn: () => {
      const urlSearchParams = new URLSearchParams(searchParams);
      // urlSearchParams.set("page", pageParam);
      if (params.groupSlug) {
        urlSearchParams.set("group", params.groupSlug);
      }
      if (params.categorySlug) {
        urlSearchParams.set("category", params.categorySlug);
      }
      return getProductsApi(urlSearchParams);
    },
  });

  return obj;
};
