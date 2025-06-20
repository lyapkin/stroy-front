import Link from "next/link";
import s from "./styles.module.css";
import Image from "next/image";
import ResultPrice from "@/src/shared/ui/price/ResultPrice";
import Discount from "./Discount";
import Stock from "./Stock";
import Characteristics from "./Characteristics";
import { ProductPreview } from "../../model/types";
import { FC } from "react";
import CustomLink from "@/src/shared/ui/CustomLink/CustomLink";

const ProductCard = ({ product, Action }: ProductCardProps) => {
  return (
    <article className={s.card}>
      <div className={s.card__image}>
        <Link href={`/product/${product.slug}/`}>
          <Discount discount={product.price.discount} />
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
          price={product.price.price}
          discount={product.price.discount}
          className={s.price__value}
        />
      </div>
      <div className={s.card__action}>
        {product.price.single ? (
          <Action itemId={product.price.id} />
        ) : (
          <CustomLink
            href={`/product/${product.slug}/`}
            style={{ width: "100%", height: "100%", fontSize: 13 }}
          >
            Посмотреть
          </CustomLink>
        )}
      </div>
    </article>
  );
};

interface ProductCardProps {
  product: ProductPreview;
  Action: FC<{ itemId: number }>;
}

export default ProductCard;
