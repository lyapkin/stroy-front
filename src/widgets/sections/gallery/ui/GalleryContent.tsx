"use client";
import Image from "next/image";
import s from "./styles.module.css";
import { useCategories } from "@/src/features";
import { getGalleryApi } from "../api";
import NoResultIcon from "@/src/shared/ui/icons/NoResultIcon";
import useWindowWidth from "@/src/shared/utils/client/useWindowWidth";
import GalleryLoading from "./GalleryLoading";
import GallerySlider from "./GallerySlider";

const GalleryContent = () => {
  const { currentCategory: category } = useCategories();
  const width = useWindowWidth();

  if (category === null || width === undefined) {
    return <GalleryLoading />;
  }

  const data = getGalleryApi(category);

  if (data.length === 0) {
    return (
      <div className={s.gallery__content}>
        <NoResultIcon />
      </div>
    );
  }

  const content = data.map((item, i) => {
    return (
      <div key={i} className={s.gallery__picture}>
        <Image
          src={item}
          alt="Производство комплектующих к строительным лесам"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
    );
  });

  if (width >= 1200) {
    return <div className={s.gallery__content}>{content}</div>;
  }

  return <GallerySlider slides={content} />;
};

export default GalleryContent;
