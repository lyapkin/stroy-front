import { SearchBar } from "@/src/features/search";
import s from "./styles.module.css";
import { Sort } from "@/src/features";
import { getCategoryGroupsApi } from "@/src/entities/category/api";
import CatalogTitle from "./CatalogTitle";
import ProductList from "@/src/widgets/catalog/ui/ProductList";
import ProductPagination from "@/src/widgets/catalog/ui/ProductPagination";
import { Suspense } from "react";
import { FormSection } from "@/src/widgets/form";
import Filters from "@/src/widgets/catalogFilters/ui/Filters";

const Catalog = async ({
  groupSlug,
  categorySlug,
}: {
  groupSlug?: string;
  categorySlug?: string;
}) => {
  const categoryGroups = await getCategoryGroupsApi();
  return (
    <>
      <div className="page hero">
        <div className="container">
          <main>
            <div className={s.catalog}>
              <CatalogTitle
                groups={categoryGroups}
                groupSlug={groupSlug}
                categorySlug={categorySlug}
              />
              <Filters
                className={s.catalog__filters}
                groups={categoryGroups}
                groupSlug={groupSlug}
                categorySlug={categorySlug}
              />
              <Suspense>
                <SearchBar
                  className={s.catalog__search}
                  pathPrefix={"/catalog/"}
                />
              </Suspense>
              <Suspense>
                <Sort className={s.catalog__sort} />
              </Suspense>
              <Suspense>
                <ProductList className={s.catalog__list} />
              </Suspense>
              <Suspense>
                <ProductPagination className={s.catalog__pagination} />
              </Suspense>
            </div>
          </main>
        </div>
      </div>
      <FormSection />
    </>
  );
};

export default Catalog;
