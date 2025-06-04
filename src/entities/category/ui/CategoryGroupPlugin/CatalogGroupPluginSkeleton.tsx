import { Skeleton } from "@/src/shared/ui/loading";
import s from "./styles.module.css";

const CatalogGroupPluginSkeleton = () => {
  return (
    <div className={s.skeleton}>
      <div className={s.skeleton__list}>
        <div className={s.skeleton__line}>
          <Skeleton />
        </div>
        <div className={s.skeleton__line}>
          <Skeleton />
        </div>
        <div className={s.skeleton__line}>
          <Skeleton />
        </div>
        <div className={s.skeleton__line}>
          <Skeleton />
        </div>
      </div>
      <div className={s.skeleton__img}>
        <Skeleton />
      </div>
    </div>
  );
};

export default CatalogGroupPluginSkeleton;
