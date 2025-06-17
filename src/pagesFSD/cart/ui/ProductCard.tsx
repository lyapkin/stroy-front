import { ProductPreview } from "@/src/entities/product/model/types";
import s from "./styles.module.css";
import Image from "next/image";
import ResultPrice from "@/src/shared/ui/price/ResultPrice";
import FullPrice from "@/src/shared/ui/price/FullPrice";
import Characteristics from "./Characteristics";
import { JSX } from "react";
import Link from "next/link";

const ProductCard = ({ product, action }: ProductCardProps) => {
  return (
    <article className={s.card}>
      <div className={s.card__image}>
        <Link href={`/product/${product.slug}/`}>
          <Image
            src={product.image || "/images/noimage.jpg"}
            alt={product.name}
            fill
            style={{ objectFit: "cover" }}
          />
        </Link>
      </div>
      <div className={s.card__rest}>
        <p className={s.card__title}>
          <Link href={`/product/${product.slug}/`}>{product.name}</Link>
        </p>
        <Characteristics
          characteristics={product.attributes}
          stock={product.stock}
          className={s.card__characteristics}
        />
        <div className={s.card__price}>
          <ResultPrice
            className={s.price__result}
            price={product.price}
            discount={product.discount}
          />
          <FullPrice
            className={s.price__full}
            price={product.price}
            discount={product.discount}
          />
        </div>
        <div className={s.card__action}>{action}</div>
      </div>
    </article>
  );
};

interface ProductCardProps {
  product: ProductPreview;
  action: JSX.Element;
}

export default ProductCard;
