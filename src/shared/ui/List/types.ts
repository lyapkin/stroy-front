import { HTMLAttributes, ReactElement } from "react";

export interface ListProps<T extends object & { ["id"]: number | string }>
  extends HTMLAttributes<HTMLUListElement> {
  data: T[];
  render: (item: T, i: number) => ReactElement;
}
