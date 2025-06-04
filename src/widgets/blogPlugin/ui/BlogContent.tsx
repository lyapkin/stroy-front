"use client";
import { useCategories } from "@/src/features";
import PostsSlider from "./PostsSlider";
import { usePostsList } from "../api/usePostsList";
import BlogSkeleton from "./BlogSkeleton";

const BlogContent = () => {
  const { currentCategory: category } = useCategories();
  const { data, isPending, isError } = usePostsList(category);

  if (isError) {
    return "Что-то пошло не так";
  }

  if (isPending) {
    return <BlogSkeleton n={4} />;
  }

  return <PostsSlider data={data.results} />;
};

export default BlogContent;
