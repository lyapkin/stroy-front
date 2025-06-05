"use client";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";
import cn from "classnames";

const BlurTheme = ({ className, children }: BlurThemeProps) => {
  const path = usePathname();

  return (
    <div
      className={cn({
        [className]: path.startsWith("/about") || path === "/",
      })}
    >
      {children}
    </div>
  );
};

interface BlurThemeProps extends PropsWithChildren {
  className: string;
}

export default BlurTheme;
