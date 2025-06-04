import { Skeleton } from "@/src/shared/ui/loading";
import s from "./styles.module.css";

const RemainderSkeleton = () => {
  return (
    <div className={s.loading}>
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </div>
  );
};

export default RemainderSkeleton;
