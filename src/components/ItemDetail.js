import React from "react";

// ItemDetail.js, que debe mostrar la vista de detalle de un ítem incluyendo su descripción, una foto y el precio.
export const ItemDetail = ({ item }) => {
  return (
    <>
      {/* Desarrolla la vista de detalle expandida del producto con su imagen título, descripción y precio */}
      <div>
        <p>{item.title}</p>
        <img src={item.pictureUrl} alt="pictureUrl" />
        <p>{item.description}</p>
        <p>{item.price}</p>
      </div>
    </>
  );
}

export default ItemDetail;