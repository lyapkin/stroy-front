import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { generateQueryKey, isNumber } from "@/src/shared/utils";

const useQueryKey = () => {
  const searchParams = useSearchParams();
  const page = searchParams.get("page");

  // const [queryKey, setQueryKey] = useState(() => {
  const urlSearchParams = new URLSearchParams(searchParams);
  urlSearchParams.set("page", isNumber(page) ? String(page) : "1");
  //   return generateQueryKey(urlSearchParams);
  // });
  // const queryClient = useQueryClient();

  // const updateQueryKey = useCallback(
  //   (urlSearchParams: URLSearchParams) => {
  //     setQueryKey((prev) => {
  //       const prevUrlSearchParams = new URLSearchParams(prev);
  //       prevUrlSearchParams.sort();
  //       urlSearchParams.sort();
  //       if (prevUrlSearchParams.toString() != urlSearchParams.toString()) {
  //         // queryClient.removeQueries(prev);
  //         return generateQueryKey(urlSearchParams);
  //       }
  //       return prev;
  //     });
  //   },
  //   [/*queryClient*/]
  // );

  // const urlSearchParams = new URLSearchParams(searchParams);
  urlSearchParams.sort();
  const urlSearchParamsString = urlSearchParams.toString();
  return urlSearchParamsString;

  // useEffect(() => {
  //   const urlSearchParams = new URLSearchParams(urlSearchParamsString);
  //   if (!isNumber(urlSearchParams.get("page"))) {
  //     urlSearchParams.set("page", "1");
  //     updateQueryKey(urlSearchParams);
  //   }
  // }, [urlSearchParamsString, updateQueryKey]);

  // return { queryKey, updateQueryKey };
};

export default useQueryKey;
