import React from "react";
import Item from "./Item";

function ItemList({ items }) {
  // Desarrolla la vista utilizando un array de items y un map
  return items.map((item) => <Item item={item} />);
}

export default ItemList;
