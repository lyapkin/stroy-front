"use client";
import CategoryButton from "./CategoryButton";
import { FilterCategory } from "./types";
import s from "./styles.module.css";
import { useCategories } from "./FiltersProvider";
import cn from "classnames";
import { useEffect } from "react";

const CategoriesList = ({ categories }: CategoriesListProps) => {
  const { currentCategory, handleChange, all } = useCategories();

  useEffect(() => {
    if (!all) {
      handleChange(categories[0].id);
    }
  }, [all, categories, handleChange]);

  const content = categories.map((item) => {
    return (
      <li
        className={cn(s.categories__item, {
          [s.categories__item_active]: currentCategory === item.id,
        })}
        key={item.id}
      >
        <CategoryButton type={item} handleChange={handleChange} />
      </li>
    );
  });

  return (
    <ul className={s.categories}>
      {all && (
        <li
          className={cn(s.categories__item, {
            [s.categories__item_active]: currentCategory === null,
          })}
        >
          <CategoryButton
            type={{ id: null, name: "Все" }}
            handleChange={handleChange}
          />
        </li>
      )}
      {content}
    </ul>
  );
};

interface CategoriesListProps {
  categories: FilterCategory[];
}

export default CategoriesList;
