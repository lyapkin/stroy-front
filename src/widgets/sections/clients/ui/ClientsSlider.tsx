import { JSX, useEffect, useRef, useState } from "react";
import s from "./styles.module.css";
import useWindowWidth from "@/src/shared/utils/client/useWindowWidth";
import Slider from "react-slick";
import BaseSlider from "@/src/shared/ui/slider/ui/BaseSlider";

const ClientsSlider = ({ slides }: ClientsSliderProps) => {
  const width = useWindowWidth();
  const [slidesToShow, setSlidesToShow] = useState(3);
  const ref = useRef<Slider>(null);

  useEffect(() => {
    if (!width) return;

    if (width <= 580) {
      setSlidesToShow(1);
    } else if (width <= 780) {
      setSlidesToShow(2);
    } else {
      setSlidesToShow(3);
    }
  }, [width]);

  return (
    <BaseSlider
      slides={slides}
      slidesToShow={slidesToShow}
      ref={ref}
      infinite={false}
      className={s.clientsContent}
    />
  );
};

interface ClientsSliderProps {
  slides: JSX.Element[];
}

export default ClientsSlider;
