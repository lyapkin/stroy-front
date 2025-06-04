import Button from "./Button";
import ArrowDownIcon from "../icons/ArrowDownIcon";
import cn from "classnames";
import s from "./styles.module.css";
import { ArrowButtonProps } from "./types";

const ArrowButton = ({ direction, className, ...rest }: ArrowButtonProps) => {
  return (
    <Button
      className={cn(s.arrowButton, s[`${direction}ArrowButton`], className)}
      {...rest}
    >
      <ArrowDownIcon />
    </Button>
  );
};

export default ArrowButton;
