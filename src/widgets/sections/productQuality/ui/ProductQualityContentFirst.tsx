"use client";
import Image from "next/image";
import s from "./styles.module.css";
import { JSX, useRef } from "react";
import SquareIcon from "./icons/SquareIcon";
import Slider from "react-slick";
import BaseSlider from "@/src/shared/ui/slider/ui/BaseSlider";

const ProductQualityContent = () => {
  const ref = useRef<Slider | null>(null);

  const content = data.reduce(
    (result, item, i) => {
      result[0].push(
        <div className={s.dots__item} key={i}>
          <div className={s.dots__point}>
            <SquareIcon />
          </div>
          <div className={s.dots__content}>
            <p className={s.dots__title}>{item.dotName}</p>
            <p className={s.dots__text}>{item.dotText}</p>
          </div>
        </div>
      );
      result[1].push(
        <div className={s.productQualityContent__itemWrapper}>
          <div className={s.productQualityContent__item} key={i}>
            <h3 className={s.productQualityContent__title}>{item.title}</h3>
            <p className={s.productQualityContent__text}>{item.text}</p>
          </div>
        </div>
      );
      result[2].push(
        <div className={s.productQualityContent__picture}>
          <Image
            src={item.image}
            alt={item.dotName}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      );
      return result;
    },
    [[] as JSX.Element[], [] as JSX.Element[], [] as JSX.Element[]]
  );

  return (
    <div className={s.productQualtityContent}>
      <div className={s.productQualityContent__dots}>{content[0]}</div>
      <div className={s.productQualityContent__content}>
        <Slider
          dots={false}
          infinite={false}
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          swipeToSlide={true}
          arrows={false}
        >
          {content[1]}
        </Slider>
      </div>
      <div className={s.productQualityContent__images}>
        <BaseSlider slides={content[2]} slidesToShow={1} ref={ref} />
      </div>
    </div>
  );
};

const data = [
  {
    dotName: "Упаковка продукции",
    dotText: "Подача заявки",
    title: "Храним продукцию в закрытых складах на собственном производстве",
    text: 'Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя ',
    image: "/images/home/product-quality/1.jpg",
  },
  {
    dotName: "Проверка отделом ОТК",
    dotText: "Пятиэтапная проверка отделом контроля качества",
    title: "Храним продукцию в закрытых складах на собственном производстве",
    text: 'Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя ',
    image: "/images/home/product-quality/1.jpg",
  },
  {
    dotName: "Проверка в лаборатории",
    dotText: "Проверка в лаборатории химическим анализом",
    title: "Храним продукцию в закрытых складах на собственном производстве",
    text: 'Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя ',
    image: "/images/home/product-quality/1.jpg",
  },
  {
    dotName: "Хранение продукции",
    dotText: "Хранение продукции в закрытых складах ",
    title: "Храним продукцию в закрытых складах на собственном производстве",
    text: 'Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя ',
    image: "/images/home/product-quality/1.jpg",
  },
];

export default ProductQualityContent;
