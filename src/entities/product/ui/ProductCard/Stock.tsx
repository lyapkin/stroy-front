import { ProductPreview } from "../../model/types";
import s from "./styles.module.css";

const Stock = ({ stock }: StockProps) => {
  return stock && <span className={s.card__stock}>{"В наличии"}</span>;
};

export interface StockProps {
  stock: ProductPreview["stock"];
}

export default Stock;
