import { getCategoryGroupsApi } from "@/src/entities/category/api";
import s from "./styles.module.css";
import List from "@/src/shared/ui/List/List";
import Link from "next/link";
import FooterList from "./FooterList";

const FooterCatalog = async () => {
  const groups = await getCategoryGroupsApi();
  return (
    <div className={s.footer__catalog}>
      <FooterList title="Каталог товаров">
        <List
          data={groups}
          render={(item) => (
            <Link
              href={`/catalog/${item.slug}/`}
              className={s.footer__listItem}
            >
              {item.name}
            </Link>
          )}
          className={s.footer__list}
        />
      </FooterList>
    </div>
  );
};

export default FooterCatalog;
