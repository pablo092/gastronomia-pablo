import { useState } from "react";
import { useCartContext } from "../context/CartContext";

const ItemCount = ({ item, onCustomPress }) => {
  const [count, setCount] = useState(0);
  const { addItem } = useCartContext();

  const sumarContador = () => {
    if (count < 5) {
      setCount(count + 1);
    } else {
      alert("La cantidad supera el stock disponible");
    }
  };

  const restarContador = () => {
    if (count > 0) {
      setCount(count - 1);
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
      {count !== 0 && (
        <div>
          <button onClick={() => agregarCarrito()}>Agregar Carrito</button>
        </div>
      )}
    </div>
  );
};

export default ItemCount;
