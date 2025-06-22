"use client";
import { useRef, useState } from "react";
import { ProductDetailImagesProps } from "../types";
import s from "./styles.module.css";
import Slider from "react-slick";
import Image from "next/image";
import cn from "classnames";
import ProductPicture from "./ProductPicture";

const ProductDetailImages = ({ images, alt }: ProductDetailImagesProps) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const sliderRef = useRef<Slider>(null);

  const goTo = (i: number) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(i);
    }
  };

  const imagesAll = images.map((item, i) => (
    <div
      key={item.id}
      className={cn(s.all__image, { [s.all__image_active]: i === slideIndex })}
      onClick={() => goTo(i)}
    >
      <Image src={item.url} fill alt={alt} objectFit="cover" />
    </div>
  ));

  return (
    <div className={s.images}>
      <div className={s.images__all}>{imagesAll}</div>
      <div className={s.images__current}>
        <Slider
          ref={sliderRef}
          infinite={false}
          arrows={false}
          swipeToSlide={true}
          beforeChange={(c, n) => {
            setSlideIndex(n);
          }}
        >
          {images.map((item) => (
            <ProductPicture key={item.id} url={item.url} alt={alt} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductDetailImages;
