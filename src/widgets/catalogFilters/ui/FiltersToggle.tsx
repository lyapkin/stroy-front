import FilterIcon from "@/src/shared/ui/icons/FilterIcon";
import s from "./styles.module.css";

const FiltersToggle = ({ onClick }: { onClick: () => void }) => {
  return (
    <button className={s.filtersMobile__toggle} onClick={onClick}>
      <FilterIcon />
      Фильтры
    </button>
  );
};

export default FiltersToggle;
