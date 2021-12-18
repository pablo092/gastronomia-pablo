import { useCartContext } from "../context/CartContext";
import ItemCartList from "../components/ItemCartList";

function Cart() {
  const { cartList } = useCartContext();
  return (
    <div
      style={{
        width: '40rem'
      }}
    >
      <ItemCartList items={cartList} />
    </div>
  );
}

export default Cart;
