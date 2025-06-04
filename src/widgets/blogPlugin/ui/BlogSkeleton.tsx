import CardSkeleton from "@/src/shared/ui/loading/skeletons/CardSkeleton";
import s from "./styles.module.css";

const BlogSkeleton = ({ n = 12 }: { n?: number }) => {
  return (
    <div className={s.blogContent__loading}>
      {[...Array(n)].map((_, index) => {
        return <CardSkeleton key={index} />;
      })}
    </div>
  );
};

export default BlogSkeleton;
