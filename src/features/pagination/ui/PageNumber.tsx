import { useSearchParams } from "next/navigation";
import s from "./styles.module.css";
import { PageNumberProps } from "./types";
import cn from "classnames";
import useChangeSearchParams from "@/src/shared/utils/client/useChangeSearchParams";

const PageNumber = ({ page, disabled }: PageNumberProps) => {
  const searchParams = useSearchParams();
  const currentPage = searchParams.get("page") || "1";

  const changeSearchParams = useChangeSearchParams();

  const paginate = (page: number | null) => {
    if (!page) return;

    const urlSearchParams = new URLSearchParams(searchParams.toString());
    urlSearchParams.set("page", String(page));
    changeSearchParams(urlSearchParams, { scrollTop: true });
  };

  return (
    <li
      className={cn(s.pagination__page, {
        [s.pagination__page_active]: String(page) === currentPage,
        [s.pagination__space]: !page,
      })}
    >
      <button onClick={() => paginate(page)} disabled={disabled}>
        {page || "..."}
      </button>
    </li>
  );
};

export default PageNumber;
