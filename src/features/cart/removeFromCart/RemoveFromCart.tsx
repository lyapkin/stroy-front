import { ProductBase } from "@/src/entities/product";
import Clear from "./ui/Clear";
import { useCart } from "@/src/app/providers/CartProvider/CartProvider";

const RemoveFromCart = ({ itemId }: RemoveFromCartProps) => {
  const { removeItem } = useCart();

  return <Clear remove={() => removeItem(itemId)} />;
};

interface RemoveFromCartProps {
  itemId: ProductBase["id"];
}

export default RemoveFromCart;
