import useChangeSearchParams from "@/src/shared/utils/client/useChangeSearchParams";
import { sortOptions } from "../data";
import { useSearchParams } from "next/navigation";

const useSelectChange = (cleanUp: () => undefined) => {
  const searchParams = useSearchParams();
  const currentValue =
    sortOptions[searchParams.get("sort") || "default"] ||
    sortOptions[searchParams.get("sort")?.slice(1) || "default"];

  const changeSearchParams = useChangeSearchParams();
  const handleChange = (sortType: string) => {
    const urlSearchParams = new URLSearchParams(searchParams.toString());
    if (sortType === "default") {
      urlSearchParams.delete("sort");
    } else if (sortType === searchParams.get("sort")) {
      urlSearchParams.set("sort", `-${sortType}`);
    } else if (sortType === searchParams.get("sort")?.slice(1)) {
      urlSearchParams.set("sort", sortType);
    } else {
      urlSearchParams.set("sort", sortType);
    }

    changeSearchParams(urlSearchParams, { noPage: true });

    cleanUp();
  };

  return { currentValue, handleChange, options: sortOptions };
};

export default useSelectChange;
