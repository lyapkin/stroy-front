"use client";
import { Pagination } from "@/src/features";
import { useGetProducts } from "../utils/useGetProducts";

const ProductPagination = ({ className }: { className?: string }) => {
  const { data, isError, isPending } = useGetProducts();

  if (isError) {
    return null;
  }

  return (
    <div className={className}>
      <Pagination pages={data?.pages} disabled={isPending} />
    </div>
  );
};

export default ProductPagination;
