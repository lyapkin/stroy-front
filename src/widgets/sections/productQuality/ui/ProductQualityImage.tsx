import Image from "next/image";
import s from "./styles.module.css";

const ProductQualityImage = ({
  image,
  alt,
}: {
  image: string;
  alt: string;
}) => {
  return (
    <div className={s.productQualityContent__picture}>
      <Image src={image} alt={alt} fill style={{ objectFit: "cover" }} />
    </div>
  );
};

export default ProductQualityImage;
