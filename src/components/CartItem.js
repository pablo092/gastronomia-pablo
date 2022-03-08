import React from "react";
import { useCartContext } from "../context/CartContext";

function Item({ item }) {
  const { editItemQuantity } = useCartContext();
  // Desarrolla la vista de un ítem donde item es de tipo { id, title, price, pictureUrl } podes agregar más propiedades si queres!
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {item.item.title}
      <span
        onClick={() => {
          editItemQuantity(item.item.id, 0);
        }}
        className="badge badge-primary badge-pill"
      >
        Eliminar item
      </span>
      <span
        onClick={() => {
          editItemQuantity(item.item.id, item.quantity + 1);
        }}
        className="badge badge-primary badge-pill"
      >
        +
      </span>
      <span className="badge badge-pill">{item.quantity}</span>
      <span
        onClick={() => {
          editItemQuantity(item.item.id, item.quantity - 1);
        }}
        className="badge badge-primary badge-pill"
      >
        -
      </span>
      <span className="badge badge-primary badge-pill">
        {item.item.price * item.quantity}
      </span>
    </li>
  );
}

export default Item;
