import s from "./styles.module.css";
import cn from "classnames";
import ProductQualityContent from "./ProductQualityContent";

const ProductQuality = () => {
  return (
    <section className={cn(s.productQualitySection, "section")}>
      <div className="container">
        <div className={cn(s.productQuality, "section-flex")}>
          <h2 className={cn(s.productQuality__title, "section-title")}>
            Политика производства направлена <b>на качество продукции</b>
          </h2>
          <div className={s.productQuality__content}>
            <ProductQualityContent />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductQuality;
