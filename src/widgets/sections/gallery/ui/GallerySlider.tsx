import { JSX, useEffect, useRef, useState } from "react";
import s from "./styles.module.css";
import useWindowWidth from "@/src/shared/utils/client/useWindowWidth";
import Slider from "react-slick";
import BaseSlider from "@/src/shared/ui/slider/ui/BaseSlider";

const GallerySlider = ({ slides }: GallerySliderProps) => {
  const width = useWindowWidth();
  const [slidesToShow, setSlidesToShow] = useState(2);
  const ref = useRef<Slider>(null);

  useEffect(() => {
    if (!width) return;

    if (width < 1000) {
      setSlidesToShow(1);
    } else {
      setSlidesToShow(2);
    }
  }, [width]);

  return (
    <BaseSlider
      slides={slides}
      slidesToShow={slidesToShow}
      ref={ref}
      infinite={false}
      className={s.gallery__content}
    />
  );
};

interface GallerySliderProps {
  slides: JSX.Element[];
}

export default GallerySlider;
