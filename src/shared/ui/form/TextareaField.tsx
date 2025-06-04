import { DetailedHTMLProps, TextareaHTMLAttributes } from "react";
import s from "./styles.module.css";
import cn from "classnames";

const TextareaField = ({
  className,
  ...rest
}: DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>) => {
  return (
    <>
      <label className={cn(s.textareaField, className)}>
        <textarea {...rest} />
      </label>
    </>
  );
};

export default TextareaField;
