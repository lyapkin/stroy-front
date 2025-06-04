import { Skeleton } from "@/src/shared/ui/loading";
import s from "./styles.module.css";

const CartListSkeleton = () => {
  return (
    <div className={s.cart__list_loading}>
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </div>
  );
};

export default CartListSkeleton;
