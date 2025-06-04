"use client";
import { Pagination, useCategories } from "@/src/features";
import { usePostsList } from "@/src/widgets/blogPlugin/api/usePostsList";

const BlogPagination = ({ className }: { className?: string }) => {
  const { currentCategory: category } = useCategories();
  const { data, isPending, isError } = usePostsList(category);

  if (isError) {
    return null;
  }

  return (
    <div className={className}>
      <Pagination pages={data?.pages} disabled={isPending} />
    </div>
  );
};

export default BlogPagination;
