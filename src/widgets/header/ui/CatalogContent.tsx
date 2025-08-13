"use client";
import Link from "next/link";
import s from "./styles.module.css";
import Image from "next/image";
import List from "@/src/shared/ui/List/List";
import ArrowDownIcon from "@/src/shared/ui/icons/ArrowDownIcon";
import { CategoryGroup } from "@/src/entities/category";
import { useState } from "react";
import cn from "classnames";
import useWindowWidth from "@/src/shared/utils/client/useWindowWidth";

const CatalogContent = ({ data }: CatalogContentProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const width = useWindowWidth();
  return (
    <div
      className={s.catalogWrapper}
      onMouseEnter={width && width > 900 ? () => setIsOpen(true) : undefined}
      onMouseLeave={width && width > 900 ? () => setIsOpen(false) : undefined}
    >
      <Link
        href={"/catalog/"}
        className={s.header__catalogButton}
        onClick={() => setIsOpen(false)}
      >
        <span className={s.catalogButton__icon}>
          <Image
            src={"/images/header/square-dots.png"}
            alt="иконка"
            width={16}
            height={16}
          />
        </span>
        <span className={s.catalogButton__text}>Каталог</span>
      </Link>
      <div
        className={cn(s.catalog, {
          [s.catalog_open]: isOpen,
          [s.catalog_closed]: !isOpen,
        })}
      >
        <p className={s.catalog__title}>Каталог комплектующих</p>
        <List
          data={data}
          className={s.catalog__groupList}
          render={(group, i) => (
            <div className={s.catalog__group}>
              <Link
                href={`/catalog/${group.slug}/`}
                onClick={() => setIsOpen(false)}
              >
                {group.name}
                <ArrowDownIcon />
              </Link>
              <List
                data={data[i].categories}
                className={s.catalog__categoryList}
                render={(category) => (
                  <Link
                    href={`/catalog/${group.slug}/${category.slug}/`}
                    onClick={() => setIsOpen(false)}
                  >
                    {category.name}
                  </Link>
                )}
              />
            </div>
          )}
        />
      </div>
    </div>
  );
};

interface CatalogContentProps {
  data: CategoryGroup[];
}

export default CatalogContent;
