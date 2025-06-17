import { ProductDetailProps } from "../types";
import ProductDetailDescription from "./ProductDetailDescription";
import ProductDetailDocs from "./ProductDetailDocs";
import ProductDetailImages from "./ProductDetailImages";
import ProductDetaillCharacteristics from "./ProductDetaillCharacteristics";
import s from "./styles.module.css";
import ResultPrice from "@/src/shared/ui/price/ResultPrice";
import FullPrice from "@/src/shared/ui/price/FullPrice";
import AddToCart from "@/src/features/cart/addToCart/AddToCart";
import cn from "classnames";
import InfoPlugin from "./InfoPlugin";
import GetConsultationPopup from "@/src/features/getConsultation/ui/GetConsultationPopup";

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
      <div className={s.productDetail__price}>
        <span className={s.price__title}>Стоимость</span>
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
      <div className={s.productDetail__action}>
        <AddToCart itemId={product.id} />
      </div>
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
