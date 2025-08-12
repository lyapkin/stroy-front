import { HTMLAttributes } from "react";
import s from "./styles.module.css";
import cn from "classnames";

const BestPrice = ({ className, best }: Props) => {
  if (!best) return null;
  return <p className={cn(s.best, className)}>Гарантия лучшей цены</p>;
};

interface Props extends HTMLAttributes<HTMLElement> {
  best: boolean;
}

export default BestPrice;
