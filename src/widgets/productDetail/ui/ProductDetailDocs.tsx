import List from "@/src/shared/ui/List/List";
import { ProductDetailDocsProps } from "../types";
import s from "./styles.module.css";
import cn from "classnames";
import Link from "next/link";

const ProductDetailDocs = ({ docs }: ProductDetailDocsProps) => {
  return (
    <div className={s.docs}>
      <p className={cn(s.docs__title, s.title)}>Документация</p>
      <List
        data={docs}
        className={s.docs__list}
        render={(item) => (
          <Link href={item.url} target="_blank" className={s.docs__item}>
            <span>
              <svg
                width="21"
                height="27"
                viewBox="0 0 21 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.62565 19.9788H14.3757M6.62565 16.1038H14.3757M19.5418 9.64551H13.8585C13.1351 9.64551 12.7737 9.64549 12.4974 9.5047C12.2544 9.38087 12.0569 9.18332 11.9331 8.94028C11.7923 8.66397 11.7923 8.30224 11.7923 7.57884V1.89551M19.5423 21.0122V10.4902C19.5423 9.89155 19.5426 9.59219 19.478 9.30879C19.4207 9.05747 19.3264 8.8161 19.1977 8.59278C19.0525 8.34095 18.849 8.1213 18.4422 7.68199L14.3113 3.2206C13.8592 2.73236 13.633 2.48822 13.364 2.31327C13.1256 2.15819 12.8627 2.04359 12.5869 1.97401C12.2758 1.89551 11.9437 1.89551 11.2783 1.89551H5.59257C4.14577 1.89551 3.42183 1.89551 2.86922 2.17707C2.38314 2.42475 1.98822 2.81998 1.74055 3.30606C1.45898 3.85867 1.45898 4.58205 1.45898 6.02886V21.0122C1.45898 22.459 1.45898 23.1824 1.74055 23.735C1.98822 24.2211 2.38314 24.6162 2.86922 24.8639C3.42183 25.1455 4.14577 25.1455 5.59257 25.1455H15.4092C16.856 25.1455 17.5789 25.1455 18.1315 24.8639C18.6176 24.6162 19.0134 24.2211 19.261 23.735C19.5426 23.1824 19.5423 22.459 19.5423 21.0122Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            {item.name}
          </Link>
        )}
      />
    </div>
  );
};

export default ProductDetailDocs;
