import { JSX, useEffect, useRef, useState } from "react";
import s from "./styles.module.css";
import BaseSlider from "@/src/shared/ui/slider/ui/BaseSlider";
import useWindowWidth from "@/src/shared/hooks/useWindowWidth";
import Slider from "react-slick";

const CatalogSlider = ({ slides }: CatalogSliderProps) => {
  const width = useWindowWidth();
  const [slidesToShow, setSlidesToShow] = useState(2);
  const ref = useRef<Slider>(null);

  useEffect(() => {
    if (!width) return;

    if (width >= 580) {
      setSlidesToShow(2);
    } else {
      setSlidesToShow(1);
    }
  }, [width]);

  return (
    <BaseSlider
      // dots={width ? width < 580 : false}
      slides={slides}
      slidesToShow={slidesToShow}
      ref={ref}
      infinite={false}
      className={s.catalogContent}
    />
  );
  // return <div className={s.catalogContent}></div>;
};

interface CatalogSliderProps {
  slides: JSX.Element[];
}

export default CatalogSlider;
