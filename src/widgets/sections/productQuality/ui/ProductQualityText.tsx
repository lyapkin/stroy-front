import s from "./styles.module.css";

const ProductQualityText = ({
  title,
  text,
}: {
  title: string;
  text: string;
}) => {
  return (
    <div className={s.productQualityContent__itemWrapper}>
      <div className={s.productQualityContent__item}>
        <h3 className={s.productQualityContent__title}>{title}</h3>
        <p className={s.productQualityContent__text}>{text}</p>
      </div>
    </div>
  );
};

export default ProductQualityText;
