import { useSearchParams } from "next/navigation";
import { isNumber } from "@/src/shared/utils";

const useQueryKey = () => {
  const searchParams = useSearchParams();
  const page = searchParams.get("page");

  const urlSearchParams = new URLSearchParams(searchParams);
  urlSearchParams.set("page", isNumber(page) ? String(page) : "1");

  urlSearchParams.sort();
  const urlSearchParamsString = urlSearchParams.toString();
  return urlSearchParamsString;
};

export default useQueryKey;
