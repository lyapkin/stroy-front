"use client";
import s from "./styles.module.css";
import ResultPrice from "@/src/shared/ui/price/ResultPrice";
import FullPrice from "@/src/shared/ui/price/FullPrice";
import AddToCart from "@/src/features/cart/addToCart/AddToCart";
import { ProductDetail } from "@/src/entities/product/model/types";
import { useState } from "react";
import List from "@/src/shared/ui/List/List";
import PriceItem from "./PriceItem";
import cn from "classnames";

const ProductPrice = ({ productPrice }: ProductPriceProps) => {
  const [currentPrice, setCurrentPrice] = useState(0);

  return (
    <div className={s.productDetail__control}>
      {productPrice.length > 1 && (
        <div className={s.productDetail__pricelist}>
          <p className={cn(s.pricelist__title, s.title)}>
            Разновидности товара
          </p>
          <List
            className={s.pricelist}
            itemClassName={(i) =>
              cn(s.priceItem, { [s.priceItem_active]: i === currentPrice })
            }
            data={productPrice}
            render={(item, i) => (
              <PriceItem price={item} onClick={() => setCurrentPrice(i)} />
            )}
          />
        </div>
      )}
      <div className={s.control__result}>
        <div className={s.productDetail__price}>
          <span className={s.price__title}>Стоимость</span>
          <ResultPrice
            className={s.price__result}
            price={productPrice[currentPrice].price}
            discount={productPrice[currentPrice].discount}
          />
          <FullPrice
            className={s.price__full}
            price={productPrice[currentPrice].price}
            discount={productPrice[currentPrice].discount}
          />
        </div>
        <div className={s.productDetail__action}>
          <AddToCart itemId={productPrice[currentPrice].id} />
        </div>
      </div>
    </div>
  );
};

interface ProductPriceProps {
  productPrice: ProductDetail["prices"];
}

export default ProductPrice;
