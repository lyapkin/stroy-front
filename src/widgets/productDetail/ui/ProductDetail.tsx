import { ProductDetailProps } from "../types";
import ProductDetailDescription from "./ProductDetailDescription";
import ProductDetailDocs from "./ProductDetailDocs";
import ProductDetailImages from "./ProductDetailImages";
import ProductDetaillCharacteristics from "./ProductDetaillCharacteristics";
import s from "./styles.module.css";
import cn from "classnames";
import InfoPlugin from "./InfoPlugin";
import GetConsultationPopup from "@/src/features/getConsultation/ui/GetConsultationPopup";
import ProductPrice from "./ProductPrice";
import { BestPrice } from "@/src/entities/product";

const ProductDetail = ({ product }: ProductDetailProps) => {
  return (
    <article className={s.productDetail}>
      <h1 className={cn(s.productDetail__title, "page-title")}>
        {product.name}
      </h1>
      <div className={s.productDetail__images}>
        <ProductDetailImages
          images={
            product.images.length > 0
              ? product.images
              : [{ id: 0, url: "/images/noimage.jpg" }]
          }
          alt={product.name}
        />
        <BestPrice
          best={product.best_price}
          className={s.productDetail__best}
        />
      </div>
      <div className={s.productDetail__characteristics}>
        <ProductDetaillCharacteristics
          characteristics={product.attributes}
          stock={product.stock}
          remainder={product.remainder}
        />
      </div>
      <div className={s.productDetail__description}>
        <ProductDetailDescription description={product.description} />
      </div>
      <div className={s.productDetail__docs}>
        <ProductDetailDocs docs={product.docs} />
      </div>
      <ProductPrice productPrice={product.prices} />
      <div className={s.productDetail__plugin}>
        {pluginData.map((item, i) => {
          return (
            <InfoPlugin
              key={i}
              image={item.image}
              title={item.title}
              text={item.text}
              action={item.action}
            />
          );
        })}
      </div>
    </article>
  );
};

const pluginData = [
  {
    image: "/images/product/plugin/1.png",
    title: "Рассчет стоимости",
    text: "рассчитаем стоимость со всеми нюансами в течениее 1 часа",
    action: (
      <GetConsultationPopup
        className={s.plugin__action}
        caption={"Запросить рассчет"}
        target="Zaprosit_raschet"
      />
    ),
  },
  {
    image: "/images/product/plugin/2.png",
    title: "Доставка в любую точку страны",
    text: "Доставим товар в любую точку России и страны СНГ ",
    action: undefined,
  },
];

export default ProductDetail;
