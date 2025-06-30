"use client";

import { PostCard } from "@/src/entities/blog";
import { useCategories } from "@/src/features";
import CardSkeleton from "@/src/shared/ui/loading/skeletons/CardSkeleton";
import NoResult from "@/src/shared/ui/NoResults/NoResult";
import { usePostsList } from "@/src/widgets/blogPlugin/api/usePostsList";

const BlogList = ({ className }: { className?: string }) => {
  const { currentCategory: category } = useCategories();
  const { data, isPending, isError } = usePostsList(category);

  if (isError) {
    return "Произошла оишбка";
  }

  if (isPending) {
    return (
      <div className={className}>
        {[...Array(12)].map((_, index) => {
          return <CardSkeleton key={index} />;
        })}
      </div>
    );
  }

  if (data.results.length === 0) {
    return (
      <div className={className}>
        <NoResult text="В нашем блоге пока нет постов." icon={false} />
      </div>
    );
  }

  return (
    <div className={className}>
      {data.results.map((item) => (
        <PostCard key={item.id} post={item} />
      ))}
    </div>
  );
};

export default BlogList;
