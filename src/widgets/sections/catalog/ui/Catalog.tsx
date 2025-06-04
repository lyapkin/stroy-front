import s from "./styles.module.css";
import cn from "classnames";
import CatalogPlugin from "./CatalogPlugin";
import { Suspense } from "react";
import CatalogLoading from "./CatalogLoading";

const Catalog = () => {
  return (
    <section className={cn(s.catalogSection, "section")}>
      <div className="container">
        <div className={cn(s.catalog, "section-flex")}>
          <h2 className={cn(s.catalog__title, "section-title")}>
            <b>Оборудование</b> которое мы производим
          </h2>
          <div className={s.catalog__content}>
            <Suspense fallback={<CatalogLoading />}>
              <CatalogPlugin />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
