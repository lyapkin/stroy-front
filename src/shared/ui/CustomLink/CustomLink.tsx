import cn from "classnames";
import s from "./styles.module.css";
import { CustomLinkProps } from "./types";
import Link from "next/link";

const CustomLink = ({
  children,
  className,
  variant = "primary",
  ...rest
}: CustomLinkProps) => {
  return (
    <Link className={cn(s.link, className, s[`link__${variant}`])} {...rest}>
      {children}
    </Link>
  );
};

export default CustomLink;
