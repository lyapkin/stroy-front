import Link from "next/link";
import s from "./styles.module.css";
import { PropsWithChildren } from "react";
import HomeIcon from "@/src/shared/ui/icons/HomeIcon";
import cn from "classnames";
import BlurTheme from "@/src/shared/ui/blurTheme/BlurTheme";

const Breadcrumbs = ({ children, home = false }: BreadcrumbsProps) => {
  return (
    <div className={s.breadcrumbsWrapper}>
      <BlurTheme className={s.blur}>
        <div className="container">
          <ul className={s.breadcrumbs}>
            <li
              className={cn(s.breadcrumbs__item, s.breadcrumbs__itemHome, {
                [s.breadcrumbs__link]: !home,
              })}
            >
              {home ? (
                <HomeIcon />
              ) : (
                <Link href={"/"}>
                  <HomeIcon />
                </Link>
              )}
            </li>
            {children}
          </ul>
        </div>
      </BlurTheme>
    </div>
  );
};

export interface BreadcrumbsProps extends PropsWithChildren {
  home?: boolean;
}

export default Breadcrumbs;
