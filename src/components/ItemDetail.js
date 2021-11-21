import React from "react";

// ItemDetail.js, que debe mostrar la vista de detalle de un ítem incluyendo su descripción, una foto y el precio.
function ItemDetail({ item }) {
  return (
    <>
      {/* Desarrolla la vista de detalle expandida del producto con su imagen título, descripción y precio */}
      <p>{item.id}</p>
      <p>{item.title}</p>
      <p>{item.pictureUrl}</p>
      <p>{item.description}</p>
      <p>{item.price}</p>
    );
    </>
  );
}

export default ItemDetail;