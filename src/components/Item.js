import React from "react";
import { Link } from "react-router-dom";

function Item({ item }) {
  // Desarrolla la vista de un ítem donde item es de tipo { id, title, price, pictureUrl } podes agregar más propiedades si queres!
  return (
    <div
      key={item.id}
      className="card w-50 mt-5"
      style={{
        gridColumn: "span 2",
      }}
    >
      <div className="card-header">
        {item.title}
      </div>
      <div className="card-body">
        <img src={item.pictureUrl} width={250} height={250} alt="pictureUrl" />
      </div>
      <div className="card-body">
        <label>{item.price}</label>
      </div>
      <div className="card-footer">
        <Link to={`/item/${item.id}`}>
          <button
            className="btn btn-outline-secondary btn-block"
            style={{
              gridColumn: "span 2",
              paddingTop: ".5rem",
            }}
          >
            Detalle
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Item;
