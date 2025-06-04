import { LiHTMLAttributes } from "react";

export interface NavItemProps extends LiHTMLAttributes<HTMLLIElement> {
  link: string;
}
