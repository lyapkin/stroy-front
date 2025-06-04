"use client";
import ProductCard from "@/src/entities/product/ui/ProductCard/ProductCard";
import { useGetProducts } from "../utils/useGetProducts";
import AddToCart from "@/src/features/cart/addToCart/AddToCart";
import CardSkeleton from "@/src/shared/ui/loading/skeletons/CardSkeleton";
import NoResult from "@/src/shared/ui/NoResults/NoResult";

const ProductList = ({ className }: { className?: string }) => {
  const { data, isError, isPending } = useGetProducts();

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
        <NoResult />
      </div>
    );
  }

  return (
    <div className={className}>
      {data.results.map((item) => (
        <ProductCard key={item.id} product={item} Action={AddToCart} />
      ))}
    </div>
  );
};

export default ProductList;
