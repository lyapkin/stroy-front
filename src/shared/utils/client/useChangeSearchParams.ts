import { usePathname } from "next/navigation";
import { useCallback } from "react";

const useChangeSearchParams = () => {
  const path = usePathname();
  const navigateFirstPage = useCallback(
    (
      urlSearchParams: URLSearchParams,
      options: { noPage?: boolean; scrollTop?: boolean } = {
        noPage: false,
        scrollTop: false,
      }
    ) => {
      if (options.noPage) {
        urlSearchParams.delete("page");
      }

      const uspString = urlSearchParams.toString();

      const loc = uspString ? `${path}?${uspString}` : path;
      window.history.pushState(null, "", loc);

      if (options.scrollTop) {
        window.scroll({ top: 0, behavior: "smooth" });
      }
    },
    [path]
  );

  return navigateFirstPage;
};

export default useChangeSearchParams;
