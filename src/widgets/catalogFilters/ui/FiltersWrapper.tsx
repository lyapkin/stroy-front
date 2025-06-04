"use client";
import {
  createContext,
  HTMLAttributes,
  useContext,
  useEffect,
  useState,
} from "react";
import s from "./styles.module.css";
import useCloseByClickOutside from "@/src/shared/hooks/useCloseByClickOutside";
import CloseIcon from "@/src/shared/ui/icons/CloseIcon";
import FiltersToggle from "./FiltersToggle";
import cn from "classnames";

const FiltersWrapperContext = createContext(
  {} as { open: boolean; close: () => void }
);

export const useFiltersWrapper = () => useContext(FiltersWrapperContext);

const FiltersWrapper = ({
  children,
  className,
}: HTMLAttributes<HTMLDivElement>) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  const ref = useCloseByClickOutside(handleClose);

  useEffect(() => {
    if (open) {
      document.documentElement.style.overflowY = "hidden";
    }
    return () => {
      document.documentElement.style.overflowY = "";
    };
  }, [open]);

  return (
    <FiltersWrapperContext.Provider value={{ open, close: handleClose }}>
      <div className={cn(s.filtersWrapper, className)}>
        <FiltersToggle onClick={() => setOpen((prev) => !prev)} />
        <div
          className={cn(s.filtersContainer, {
            [s.filtersContainer_open]: open,
            [s.filtersContainer_closed]: !open,
          })}
        >
          <div className={s.filtersContent} ref={ref}>
            <div className={s.filtersMobile__title}>
              Фильтры
              <button className={s.filtersMobile__close} onClick={handleClose}>
                <CloseIcon />
              </button>
            </div>
            {children}
          </div>
        </div>
      </div>
    </FiltersWrapperContext.Provider>
  );
};

export default FiltersWrapper;
