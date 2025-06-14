import { ProductDetail } from "@/src/entities/product";

export interface ProductDetailProps {
  product: ProductDetail;
}

export interface ProductDetailImagesProps {
  images: ProductDetail["images"];
  alt: string;
}

export interface ProductDetaillCharacteristicsProps {
  characteristics: ProductDetail["attributes"];
  stock: boolean;
  remainder: ProductDetail["remainder"];
}

export interface ProductDetailDescriptionProps {
  description: ProductDetail["description"];
}

export interface ProductDetailDocsProps {
  docs: ProductDetail["docs"];
}
