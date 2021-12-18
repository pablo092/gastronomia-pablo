import { useState } from "react";
import { useCartContext } from "../context/CartContext";

const ItemCount = ({ item, onCustomPress }) => {
  const [count, setCount] = useState(0);
  const { cartList, addItem } = useCartContext();

  console.log(cartList);

  const sumarContador = () => {
    if (count < 5) {
      setCount(count + 1);
    } else {
      alert("La cantidad supera el stock disponible");
    }
  };

  const restarContador = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      alert("¿Eliminar item del carrito?");
      setCount(0);
    }
  };

  const agregarCarrito = () => {
    setCount(count);
    addItem(item, count);
    onCustomPress();
  };

  return (
    <div>
      <button onClick={sumarContador}>+</button>
      <p>{count}</p>
      <button onClick={restarContador}>-</button>
      <div>
        <button onClick={() => agregarCarrito()}>Agregar Carrito</button>
      </div>
    </div>
  );
};

export default ItemCount;
