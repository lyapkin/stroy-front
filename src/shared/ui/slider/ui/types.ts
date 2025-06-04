import { ButtonHTMLAttributes, JSX, RefObject } from "react";
import Slider, { Settings } from "react-slick";

export interface SliderButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  direction: "left" | "right";
}

export interface SliderProps extends Settings {
  slides: JSX.Element[];
  slidesToShow: number;
  ref: RefObject<Slider | null>;
  beforeChangeCb?: (c: number, n: number) => void;
}
