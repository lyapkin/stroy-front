import s from "../styles.module.css";
import Skeleton from "./Skeleton";

const CardSkeleton = () => {
  return (
    <div className={s.cardSkeleton}>
      <div className={s.cardSkeleton__image}>
        <Skeleton />
      </div>
      <div className={s.cardSkeleton__line}>
        <Skeleton />
      </div>
      <div className={s.cardSkeleton__line}>
        <Skeleton />
      </div>
      <div className={s.cardSkeleton__line}>
        <Skeleton />
      </div>
      <div className={s.cardSkeleton__line}>
        <Skeleton />
      </div>
    </div>
  );
};

export default CardSkeleton;
