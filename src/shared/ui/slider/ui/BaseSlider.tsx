import s from "./styles.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState } from "react";
import { SliderProps } from "./types";
import cn from "classnames";
import ArrowButton from "@/src/shared/ui/Button/ArrowButton";

const BaseSlider = ({
  slides,
  slidesToShow,
  className,
  ref,
  beforeChangeCb,
  ...settings
}: SliderProps) => {
  const [sliderIndex, setSliderIndex] = useState(0);

  const handleNextSlide = () => {
    if (ref.current) {
      ref.current.slickNext();
    }
  };

  const handlePrevSlide = () => {
    if (ref.current) {
      ref.current.slickPrev();
    }
  };

  return (
    <div className={s.baseSlider}>
      <Slider
        className={cn(
          className,
          s.baseSlider__content,
          "base-slider"
          // slidesVisible === 1 ? "overflow" : ""
        )}
        {...settings}
        speed={settings.speed || 500}
        slidesToShow={slidesToShow}
        slidesToScroll={slidesToShow}
        swipeToSlide={true}
        arrows={false}
        ref={ref}
        beforeChange={(c, n) => {
          setSliderIndex(n);
          if (beforeChangeCb) {
            beforeChangeCb(c, n);
          }
        }}
        // appendDots={(dots) => {
        //   return (
        //     <div>
        //       <ul className={s.baseSlider__dots}>{dots}</ul>
        //     </div>
        //   );
        // }}
        // customPaging={(i) => {
        //   return (
        //     <div
        //       className={cn(s.dots__item, {
        //         [s.dots__item_active]: i === sliderIndex,
        //       })}
        //     ></div>
        //   );
        // }}
      >
        {slides}
      </Slider>
      {slides.length > slidesToShow && (
        <>
          <ArrowButton
            className={s.baseSlider__leftButton}
            direction="left"
            onClick={handlePrevSlide}
            disabled={sliderIndex === 0}
          />
          <ArrowButton
            className={s.baseSlider__rightButton}
            direction="right"
            onClick={handleNextSlide}
            disabled={slidesToShow >= slides.length - sliderIndex}
          />
        </>
      )}
    </div>
  );
};

export default BaseSlider;
