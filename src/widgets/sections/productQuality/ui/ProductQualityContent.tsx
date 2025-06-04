"use client";
import s from "./styles.module.css";
import { useRef, useState } from "react";
import Slider from "react-slick";
import BaseSlider from "@/src/shared/ui/slider/ui/BaseSlider";
import useIsInteractive from "@/src/shared/hooks/useIsInteractive";
import { Skeleton } from "@/src/shared/ui/loading";
import ProductQualityDot from "./ProductQualityDot";
import ProductQualityImage from "./ProductQualityImage";
import ProductQualityText from "./ProductQualityText";

const ProductQualityContent = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const isInteractive = useIsInteractive();

  const refImage = useRef<Slider | null>(null);
  const refText = useRef<Slider | null>(null);

  const goTo = (n: number) => {
    if (refText.current) {
      refText.current.slickGoTo(n);
    }
  };

  return (
    <div className={s.productQualtityContent}>
      <div className={s.productQualityContent__dots}>
        {data.map((item, i) => {
          return (
            <ProductQualityDot
              key={i}
              name={item.dotName}
              text={item.dotText}
              active={i <= slideIndex}
              onClick={() => goTo(i)}
            />
          );
        })}
      </div>
      <div className={s.productQualityContent__images}>
        {isInteractive ? (
          <BaseSlider
            infinite={false}
            slides={data[slideIndex].images.map((item, i) => (
              <ProductQualityImage
                key={i}
                image={item}
                alt={data[slideIndex].dotName}
              />
            ))}
            slidesToShow={1}
            ref={refImage}
          />
        ) : (
          <Skeleton light={true} />
        )}
      </div>
      <div className={s.productQualityContent__content}>
        <Slider
          dots={false}
          infinite={false}
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          swipeToSlide={true}
          arrows={false}
          ref={refText}
          beforeChange={(c, n) => {
            setSlideIndex(n);
          }}
        >
          {data.map((item, i) => (
            <ProductQualityText key={i} title={item.title} text={item.text} />
          ))}
        </Slider>
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
    images: [
      "/images/home/product-quality/1.jpg",
      "/images/home/product-quality/1.jpg",
      "/images/home/product-quality/1.jpg",
      "/images/home/product-quality/1.jpg",
    ],
  },
  {
    dotName: "Проверка отделом ОТК",
    dotText: "Пятиэтапная проверка отделом контроля качества",
    title: "Храним продукцию в закрытых складах на собственном производстве",
    text: 'Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя ',
    images: [
      "/images/category/categoryGroup/1.jpg",
      "/images/category/categoryGroup/2.jpg",
      "/images/category/categoryGroup/3.jpg",
      "/images/category/categoryGroup/4.jpg",
    ],
  },
  {
    dotName: "Проверка в лаборатории",
    dotText: "Проверка в лаборатории химическим анализом",
    title: "Храним продукцию в закрытых складах на собственном производстве",
    text: 'Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя ',
    images: ["/images/home/product-quality/1.jpg"],
  },
  {
    dotName: "Хранение продукции",
    dotText: "Хранение продукции в закрытых складах ",
    title: "Храним продукцию в закрытых складах на собственном производстве",
    text: 'Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя ',
    images: ["/images/home/product-quality/1.jpg"],
  },
];

export default ProductQualityContent;
