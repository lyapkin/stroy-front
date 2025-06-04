import s from "./styles.module.css";
import { FilterCategory, handleChangeFunc } from "./types";

const CategoryButton = ({ type, handleChange }: CategoryButtonProps) => {
  return (
    <button className={s.categoryButton} onClick={() => handleChange(type.id)}>
      {type.name}
    </button>
  );
};

interface CategoryButtonProps {
  type: FilterCategory;
  handleChange: handleChangeFunc;
}

export default CategoryButton;
