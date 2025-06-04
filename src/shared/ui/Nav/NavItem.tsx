import Link from "next/link";
import s from "./styles.module.css";
import { NavItemProps } from "./types";
import cn from "classnames";

const NavItem = ({ link, className, children }: NavItemProps) => {
  return (
    <li className={cn(s.nav__item, className)}>
      <Link href={link}>{children}</Link>
    </li>
  );
};

export default NavItem;
