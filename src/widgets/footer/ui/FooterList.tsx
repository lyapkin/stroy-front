"use client";
import { PropsWithChildren, useState } from "react";
import s from "./styles.module.css";
import ArrowFilledIcon from "@/src/shared/ui/icons/ArrowFilledIcon";
import cn from "classnames";

const FooterList = ({ title, children }: FooterListProps) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <h3 className={s.footer__title} onClick={() => setOpen((prev) => !prev)}>
        {title}
        <span
          className={cn(s.footer__titleIcon, {
            [s.footer__titleIcon_open]: open,
            [s.footer__titleIcon_closed]: !open,
          })}
        >
          <ArrowFilledIcon />
        </span>
      </h3>
      <div
        className={cn(s.footer__listBody, {
          [s.footer__listBody_open]: open,
          [s.footer__listBody_closed]: !open,
        })}
      >
        {children}
      </div>
    </>
  );
};

interface FooterListProps extends PropsWithChildren {
  title: string;
}

export default FooterList;
