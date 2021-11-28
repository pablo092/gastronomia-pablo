import {useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useCartContext } from '../context/CartContext'

// ItemDetail.js, que debe mostrar la vista de detalle de un ítem incluyendo su descripción, una foto y el precio.
const ItemDetail =  ( {item} ) => {
  const [count, setCount] = useState(1)

  const { cartList, addItem } = useCartContext()

  function onAdd(cant) {
      setCount(cant)
      addItem({item}, cant)
  }
  console.log(cartList)

  // Desarrolla la vista de detalle expandida del producto con su imagen título, descripción y precio
  return(
    <Row>
        <Col>
            <div className='card w-50'>
                <div className="container">
                    <label>{item.title}</label>
                </div>
                <div className="container">
                    <img  src={item.pictureUrl} className="w-25" alt="foto" />
                    <br/>
                    <label>{item.descripcion}</label>
                </div>
                <div className="container">
                    <label>{item.price}</label>
                </div>
                <div className="container">
                    <label>{count}</label>
                </div>
            </div>
        </Col>
        <Col>
          <button onClick={()=>onAdd(1)}>Agregar Carrito</button>
        </Col>
    </Row>
)
}

export default ItemDetail;