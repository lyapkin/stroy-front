import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import s from "./styles.module.css";
import cn from "classnames";

const InputField = ({
  placeholder,
  className,
  ...rest
}: DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>) => {
  return (
    <>
      <label className={cn(s.inputField, className)}>
        <input type="text" {...rest} placeholder={placeholder} />
      </label>
    </>
  );
};

export default InputField;
