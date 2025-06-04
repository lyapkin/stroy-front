"use client";
import { PropsWithChildren } from "react";
import s from "./styles.module.css";
import { usePathname } from "next/navigation";
import cn from "classnames";

const HeaderTheme = ({ children }: PropsWithChildren) => {
  const path = usePathname();

  return (
    <div
      className={cn(s.headerTheme, {
        [s.blur]: path.startsWith("/about") || path === "/",
      })}
    >
      {children}
    </div>
  );
};

export default HeaderTheme;
