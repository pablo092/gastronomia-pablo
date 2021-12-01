import Button from "@restart/ui/esm/Button";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

// ItemDetail.js, que debe mostrar la vista de detalle de un ítem incluyendo su descripción, una foto y el precio.
const ItemDetail = ({ item }) => {
  const [addPressed, setAddPressed] = useState(false);

  function onAdd() {
    setAddPressed(true);
  }

  // Desarrolla la vista de detalle expandida del producto con su imagen título, descripción y precio
  return (
    <Row>
      <Col>
        <div className="card w-50">
          <div className="container">
            <label>{item.title}</label>
          </div>
          <div className="container">
            <img src={item.pictureUrl} className="w-25" alt="foto" />
            <br />
            <label>{item.descripcion}</label>
          </div>
          <div className="container">
            <label>{item.price}</label>
          </div>
        </div>
      </Col>
      <Col>
        {/* Oculto hasta que el usuario seleccione la cantidad y clickee en comprar */}
        {!addPressed ? (
          <div>
            <ItemCount onClick={onAdd()} item={item} />
          </div>
        ) : (
          <Link to={`/cart`}>
            <Button>Termina tu compra</Button>
          </Link>
        )}
      </Col>
    </Row>
  );
};

export default ItemDetail;
