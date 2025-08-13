"use client";
import s from "./styles.module.css";
import useWindowWidth from "@/src/shared/utils/client/useWindowWidth";
import { JSX } from "react";
import ClientsLoading from "./ClientsLoading";
import ClientsSlider from "./ClientsSlider";

const ClientsContent = ({ content }: ClientsContentProps) => {
  const width = useWindowWidth();

  if (width === undefined) {
    return <ClientsLoading />;
  }

  if (width > 900) {
    return <div className={s.clientsContent}>{content}</div>;
  }

  return <ClientsSlider slides={content} />;
};

interface ClientsContentProps {
  content: JSX.Element[];
}

export default ClientsContent;
