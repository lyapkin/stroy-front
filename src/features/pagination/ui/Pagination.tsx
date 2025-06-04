"use client";
import { useSearchParams } from "next/navigation";
import PageNumber from "./PageNumber";
import s from "./styles.module.css";
import { getPaginationPages } from "../utils";
import { useEffect, useState } from "react";
import { PaginationProps } from "./types";

const Pagination = ({ pages, disabled }: PaginationProps) => {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page") || 1);
  const [pagesArr, setPagesArr] = useState<(number | null)[]>([]);

  useEffect(() => {
    if (pages || !disabled) {
      setPagesArr(getPaginationPages(page, pages));
    }
  }, [pages, page, disabled]);

  const content = pagesArr.map((item, index) => {
    return (
      <PageNumber key={String(item) + index} page={item} disabled={disabled} />
    );
  });

  return <ul className={s.pagination}>{content}</ul>;
};

export default Pagination;
