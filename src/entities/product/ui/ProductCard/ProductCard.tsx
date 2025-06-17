import Link from "next/link";
import s from "./styles.module.css";
import Image from "next/image";
import ResultPrice from "@/src/shared/ui/price/ResultPrice";
import Discount from "./Discount";
import Stock from "./Stock";
import Characteristics from "./Characteristics";
import { ProductPreview } from "../../model/types";
import { FC } from "react";

const ProductCard = ({ product, Action }: ProductCardProps) => {
  return (
    <article className={s.card}>
      <div className={s.card__image}>
        <Link href={`/product/${product.slug}/`}>
          <Discount discount={product.discount} />
          <Image
            src={product.image || "/images/noimage.jpg"}
            fill
            style={{ objectFit: "cover" }}
            alt={product.name}
          />
          <Stock stock={product.stock} />
        </Link>
      </div>
      <p className={s.card__title}>
        <Link href={`/product/${product.slug}/`}>{product.name}</Link>
      </p>
      <div className={s.card__characteristics}>
        <Characteristics characteristics={product.attributes.slice(0, 3)} />
      </div>
      <div className={s.card__price}>
        <span className={s.price__title}>Стоимость</span>
        <ResultPrice
          price={product.price}
          discount={product.discount}
          className={s.price__value}
        />
      </div>
      <div className={s.card__action}>
        <Action itemId={product.id} />
      </div>
    </article>
  );
};

interface ProductCardProps {
  product: ProductPreview;
  Action: FC<{ itemId: number }>;
}

export default ProductCard;
