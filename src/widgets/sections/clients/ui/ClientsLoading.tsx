import { Skeleton } from "@/src/shared/ui/loading";
import s from "./styles.module.css";

const ClientsLoading = () => {
  return (
    <div className={s.loading}>
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </div>
  );
};

export default ClientsLoading;
