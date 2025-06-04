import CheckboxIcon from "../icons/CheckboxIcon";
import SelectedCheckboxIcon from "../icons/SelectedCheckboxIcon";
import s from "./styles.module.css";
import { InputFieldProps } from "./types";
import cn from "classnames";

const CheckboxInput = ({ label, className, ...rest }: InputFieldProps) => {
  return (
    <label
      className={cn(s.checkboxInput, className, {
        [s.checkboxInput_active]: rest.checked,
        [s.checkboxInput_disabled]: rest.disabled,
      })}
    >
      {rest.checked ? <SelectedCheckboxIcon /> : <CheckboxIcon />}
      <span className={s.checkboxInput__text}>{label}</span>
      <input type="checkbox" {...rest} />
    </label>
  );
};

export default CheckboxInput;
