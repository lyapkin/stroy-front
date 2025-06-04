"use client";
import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useState,
} from "react";
import { CategoryId, handleChangeFunc } from "./types";

const CategoriesFilterContext = createContext(
  {} as {
    currentCategory: CategoryId;
    all: boolean;
    handleChange: handleChangeFunc;
  }
);

export const useCategories = () => useContext(CategoriesFilterContext);

const FiltersProvider = ({ all, children }: FiltersProvider) => {
  const [currentCategory, setCurrentCategory] = useState<CategoryId>(null);
  const handleChange = useCallback((value: CategoryId) => {
    setCurrentCategory(value);
  }, []);

  return (
    <CategoriesFilterContext.Provider
      value={{ currentCategory, handleChange, all }}
    >
      {children}
    </CategoriesFilterContext.Provider>
  );
};

interface FiltersProvider extends PropsWithChildren {
  all: boolean;
}

export default FiltersProvider;
