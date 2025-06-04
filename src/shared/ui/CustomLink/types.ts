import { LinkProps } from "next/link";
import { HTMLAttributes } from "react";

export interface CustomLinkProps
  extends LinkProps,
    HTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "secondary";
}
