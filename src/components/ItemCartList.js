import React from "react";
import CartItem from "./CartItem";
import { useCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import Button from "@restart/ui/esm/Button";

function ItemList({ items }) {
  // Desarrolla la vista utilizando un array de items y un map
  const { totalPrice } = useCartContext();
  return (
    <ul className="list-group">
      {items.length > 0 ? (
        items.map((item) => <CartItem key={item.item.id} item={item} />)
      ) : (
        <>
          <p>Sin items en la lista</p>
          <Link to={`/`}>
            <Button>Go home</Button>
          </Link>
        </>
      )}
      {items.length > 0 && (
        <label className="mt-5">TOTAL: {totalPrice()}</label>
      )}
    </ul>
  );
}

export default ItemList;
