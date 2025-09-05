import { JSX, useRef } from "react";
import s from "./styles.module.css";
import Slider from "react-slick";
import BaseSlider from "@/src/shared/ui/slider/ui/BaseSlider";

const GallerySlider = ({ slides }: GallerySliderProps) => {
  const ref = useRef<Slider>(null);

  return (
    <BaseSlider
      slides={slides}
      slidesToShow={1}
      slidesPerRow={3}
      rows={2}
      ref={ref}
      slidesToScroll={1}
      infinite={false}
      className={s.gallery__content}
      responsive={[
        {
          breakpoint: 1200,
          settings: {
            slidesPerRow: 2,
            rows: 1,
          },
        },
        {
          breakpoint: 999,
          settings: {
            slidesPerRow: 1,
            rows: 1,
          },
        },
      ]}
    />
  );
};

interface GallerySliderProps {
  slides: JSX.Element[];
}

export default GallerySlider;
