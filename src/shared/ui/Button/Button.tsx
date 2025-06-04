import cn from "classnames";
import s from "./styles.module.css";
import { ButtonProps } from "./types";

const Button = ({
  children,
  className,
  variant = "primary",
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={cn(s.button, className, s[`button__${variant}`])}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
