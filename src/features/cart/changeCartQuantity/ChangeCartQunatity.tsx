import { useCart } from "@/src/app/providers/CartProvider/CartProvider";
import Counter from "./ui/Counter";
import { ProductBase } from "@/src/entities/product";

const ChangeCartQunatity = ({ itemId }: ChangeCartQunatityProps) => {
  const { cart, plusItem, minusItem } = useCart();

  return (
    <Counter
      value={cart && cart[itemId]}
      increment={() => plusItem(itemId)}
      decrement={() => minusItem(itemId)}
    />
  );
};

interface ChangeCartQunatityProps {
  itemId: ProductBase["id"];
}

export default ChangeCartQunatity;
