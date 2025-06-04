import s from "./styles.module.css";
import cn from "classnames";
import { FilterBy } from "@/src/features";
import GalleryContent from "./GalleryContent";
import { getFilterApi } from "../api";

const Gallery = () => {
  return (
    <section className={cn(s.gallerySection, "section")}>
      <div className="container">
        <div className={cn(s.gallery, "section-flex")}>
          <h2 className={cn(s.gallery__title, "section-title")}>
            Собственный цех строительных конструкций
            <b>на територии завода ОМЗ</b>
          </h2>
          <FilterBy
            getFilterApi={getFilterApi}
            className={s.gallery__filters}
            all={false}
          >
            <GalleryContent />
          </FilterBy>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
