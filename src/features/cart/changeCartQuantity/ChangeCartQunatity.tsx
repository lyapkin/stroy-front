import { useCart } from "@/src/app/providers/CartProvider/CartProvider";
import Counter from "./ui/Counter";
import { ProductBase } from "@/src/entities/product";

const ChangeCartQunatity = ({ itemId }: ChangeCartQunatityProps) => {
  const { cart, plusItem, minusItem, setItemQuantity } = useCart();

  return (
    <Counter
      value={cart && cart[itemId]}
      increment={() => plusItem(itemId)}
      decrement={() => minusItem(itemId)}
      setValue={(count: number) => setItemQuantity(itemId, count)}
    />
  );
};

interface ChangeCartQunatityProps {
  itemId: ProductBase["id"];
}

export default ChangeCartQunatity;
