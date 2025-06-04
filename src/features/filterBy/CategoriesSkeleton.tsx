import { Skeleton } from "@/src/shared/ui/loading";
import s from "./styles.module.css";

const CategoriesSkeleton = () => {
  return (
    <ul className={s.categories}>
      {[...Array(6)].map((_, index) => {
        return (
          <li key={index} style={{ width: 128 }} className={s.categories__item}>
            <Skeleton />
          </li>
        );
      })}
    </ul>
  );
};

export default CategoriesSkeleton;
