"use client";
import Image from "next/image";
import s from "./styles.module.css";
import BaseSlider from "@/src/shared/ui/slider/ui/BaseSlider";
import { useEffect, useRef, useState } from "react";
import useWindowWidth from "@/src/shared/utils/client/useWindowWidth";
import { Skeleton } from "@/src/shared/ui/loading";
import Slider from "react-slick";
import CertificatePopup from "./CertificatePopup";

const CertificatesContent = () => {
  const width = useWindowWidth();
  const [slidesToShow, setSlidesToShow] = useState(0);
  const ref = useRef<Slider>(null);

  useEffect(() => {
    if (!width) return;

    if (width < 580) {
      setSlidesToShow(1);
    } else if (width < 1080) {
      setSlidesToShow(2);
    } else if (width <= 1380) {
      setSlidesToShow(3);
    } else {
      setSlidesToShow(4);
    }
  }, [width]);

  if (slidesToShow === 0) {
    return (
      <div className={s.loading}>
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>
    );
  }

  const slides = data.map((item, i) => {
    return (
      <CertificatePopup
        key={i}
        certificate={
          <Image
            src={item}
            alt="Сертификат"
            fill
            style={{ objectFit: "contain" }}
          />
        }
      />
    );
  });

  return (
    <div className={s.certificatesContent}>
      <BaseSlider
        slides={slides}
        slidesToShow={slidesToShow}
        infinite={false}
        className={s.certificatesContent__slider}
        ref={ref}
      />
    </div>
  );
};

const data = [
  "/images/home/certificates/1.webp",
  "/images/home/certificates/2.webp",
  "/images/home/certificates/3.webp",
  "/images/home/certificates/4.webp",
  "/images/home/certificates/5.webp",
];

export default CertificatesContent;
