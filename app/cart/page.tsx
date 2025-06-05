import Cart from "@/src/pagesFSD/cart/ui/Cart";
import Breadcrumbs from "@/src/widgets/breadcrumbs/Breadcrumbs";
import BreadcrumbsItem from "@/src/widgets/breadcrumbs/BreadcrumbsItem";

const CartPage = () => {
  return (
    <>
      <Breadcrumbs>
        <BreadcrumbsItem>Корзина</BreadcrumbsItem>
      </Breadcrumbs>
      <Cart />
    </>
  );
};

export default CartPage;
