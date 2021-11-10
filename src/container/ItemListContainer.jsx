import React from "react";
import "../App.css";

const ItemListContainer = (props) => {
  return (
    <>
      <b style={{backgroundColor: 'gray'}}>Ir a la pagina de contacto {props.greeting}</b>
    </>
  );
};

export default ItemListContainer;
