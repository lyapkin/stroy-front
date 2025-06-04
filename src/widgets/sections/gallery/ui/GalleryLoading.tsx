import { Skeleton } from "@/src/shared/ui/loading";
import s from "./styles.module.css";

const GalleryLoading = () => {
  return (
    <div className={s.loading}>
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </div>
  );
};

export default GalleryLoading;
