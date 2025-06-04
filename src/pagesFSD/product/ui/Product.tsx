import { ProductDetail } from "@/src/widgets/productDetail";
import { ProductProps } from "../types";
import { FormSection } from "@/src/widgets/form";

const Product = async ({ product }: ProductProps) => {
  return (
    <>
      <div className="page hero">
        <div className="container">
          <main>
            <ProductDetail product={product} />
          </main>
        </div>
      </div>
      <FormSection />
    </>
  );
};

export default Product;
