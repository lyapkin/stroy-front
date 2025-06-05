import s from "./styles.module.css";
import Link from "next/link";
import { PropsWithChildren } from "react";

const BreadcrumbsItem = ({ link, children }: BreadcrumbsItemProps) => {
  if (link) {
    return (
      <li className={`${s.breadcrumbs__item} ${s.breadcrumbs__link}`}>
        <Link href={link}>{children}</Link>
      </li>
    );
  }
  return <li className={s.breadcrumbs__item}>{children}</li>;
};

export interface BreadcrumbsItemProps extends PropsWithChildren {
  link?: string;
}

export default BreadcrumbsItem;
