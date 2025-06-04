"use client";
import useWindowWidth from "@/src/shared/hooks/useWindowWidth";
import s from "./styles.module.css";
import CatalogLoading from "./CatalogLoading";
import CatalogSlider from "./CatalogSlider";
import { JSX } from "react";

const CatalogContent = ({ content }: CatalogContentProps) => {
  const width = useWindowWidth();

  if (!width) {
    return <CatalogLoading />;
  }

  if (width < 1160) {
    return <CatalogSlider slides={content} />;
  }

  return <div className={s.catalogContent}>{content}</div>;
};

interface CatalogContentProps {
  content: JSX.Element[];
}

export default CatalogContent;
