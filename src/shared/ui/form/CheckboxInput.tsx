import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import CheckboxIcon from "../icons/CheckboxIcon";
import SelectedCheckboxIcon from "../icons/SelectedCheckboxIcon";
import s from "./styles.module.css";
import cn from "classnames";

const CheckboxInput = ({ label, className, ...rest }: CheckboxInputProps) => {
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

interface CheckboxInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
}

export default CheckboxInput;
