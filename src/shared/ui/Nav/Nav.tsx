import cn from "classnames";
import s from "./styles.module.css";
import { HTMLAttributes } from "react";

const Nav = ({ children, className }: HTMLAttributes<HTMLUListElement>) => {
  return (
    <nav className={s.nav}>
      <ul className={cn(s.nav__list, className)}>{children}</ul>
    </nav>
  );
};

export default Nav;
