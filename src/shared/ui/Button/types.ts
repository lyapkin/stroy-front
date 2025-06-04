import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export interface ArrowButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  direction: "left" | "right";
}
