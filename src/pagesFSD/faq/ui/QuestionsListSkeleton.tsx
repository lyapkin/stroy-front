import s from "./styles.module.css";
import { Skeleton } from "@/src/shared/ui/loading";

const QuestionsListSkeleton = ({ count = 12 }: { count?: number }) => {
  return (
    <>
      <ul className={s.questions}>
        {[...Array(count)].map((_, index) => {
          return (
            <li className={s.item} key={index}>
              <Skeleton />
            </li>
          );
        })}
      </ul>
      <ul className={s.questions}>
        {[...Array(count)].map((_, index) => {
          return (
            <li className={s.item} key={index}>
              <Skeleton />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default QuestionsListSkeleton;
