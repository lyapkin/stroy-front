import { getProductRemainderApi } from "@/src/entities/product/api";
import RemainderSlider from "./RemainderSlider";
import Image from "next/image";
import s from "./styles.module.css";
import Link from "next/link";

const RemainderContent = async () => {
  const stockRemainder = await getProductRemainderApi();

  const slides = stockRemainder.map((item) => {
    return (
      <div key={item.id} className={s.remainderSlide}>
        <Link
          href={`/product/${item.slug}/`}
          className={s.remainderSlide__text}
        >
          <p className={s.remainderSlide__title}>{item.name}</p>
          <p className={s.remainderSlide__rest}>
            {item.remainder} {"шт"}
          </p>
        </Link>
        <Image
          src={item.image || "/images/noimage.jpg"}
          fill
          alt={item.name}
          style={{ objectFit: "cover", zIndex: -1 }}
        />
      </div>
    );
  });

  return <RemainderSlider slides={slides} />;
};

export default RemainderContent;
