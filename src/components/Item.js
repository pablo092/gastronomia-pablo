import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Item({ item }) {
  // Desarrolla la vista de un ítem donde item es de tipo { id, title, price, pictureUrl } podes agregar más propiedades si queres!
  return (
    <div key={item.id} className="card w-50 mt-5">
      <div className="card-header">{item.name} {item.categoria}</div>
      <div className="card-body">
        <img src={item.pictureUrl} alt="pictureUrl" />
        {item.price}
      </div>
      <div className="card-footer">
        <button className="btn btn-outline-primary btn-block">Detalle</button>
      </div>
    </div>
  );
}

export default Item;
