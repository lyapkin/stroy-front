"use client";
import useWindowWidth from "@/src/shared/utils/client/useWindowWidth";
import BaseSlider from "@/src/shared/ui/slider/ui/BaseSlider";
import { useState, useRef, useEffect, JSX } from "react";
import Slider from "react-slick";
import s from "./styles.module.css";
import RemainderSkeleton from "./RemainderSkeleton";

const RemainderSlider = ({ slides }: RemainderSliderProps) => {
  const width = useWindowWidth();
  const [slidesToShow, setSlidesToShow] = useState(0);
  const ref = useRef<Slider>(null);

  useEffect(() => {
    if (!width) return;

    if (width < 580) {
      setSlidesToShow(1);
    } else if (width < 1120) {
      setSlidesToShow(2);
    } else if (width < 1480) {
      setSlidesToShow(3);
    } else {
      setSlidesToShow(4);
    }
  }, [width]);

  if (slidesToShow === 0) {
    return <RemainderSkeleton />;
  }

  return (
    <div className={s.remainderContent}>
      <BaseSlider
        slides={slides}
        slidesToShow={slidesToShow}
        className={s.remainder__slider}
        ref={ref}
        infinite={false}
      />
    </div>
  );
};

interface RemainderSliderProps {
  slides: JSX.Element[];
}

export default RemainderSlider;
