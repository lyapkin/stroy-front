import CustomLink from "@/src/shared/ui/CustomLink/CustomLink";
import { CategoryGroupProps } from "../types";
import s from "./styles.module.css";
import List from "@/src/shared/ui/List/List";
import Link from "next/link";
import Image from "next/image";

const CategoryGroupPlugin = ({ categoryGroup }: CategoryGroupProps) => {
  return (
    <article className={s.categoryGroup}>
      <div className={s.categoryGroup__text}>
        <h3 className={s.categoryGroup__title}>{categoryGroup.name}</h3>
        <List
          className={s.categoryGroup__list}
          data={categoryGroup.categories}
          render={(item) => (
            <Link
              href={`/catalog/${categoryGroup.slug}/${item.slug}/`}
              className={s.categoryGroup__listItem}
            >
              {item.name}
            </Link>
          )}
        />
        <div className={s.categoryGroup__link}>
          <CustomLink
            href={`/catalog/${categoryGroup.slug}/`}
            className={s.link}
          >
            Перейти в каталог
          </CustomLink>
        </div>
      </div>
      <div className={s.categoryGroup__image}>
        <Image
          src={categoryGroup.image || "/images/noimage.jpg"}
          alt={categoryGroup.name}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
    </article>
  );
};

export default CategoryGroupPlugin;
