import { useCartContext } from "../context/CartContext";
import ItemCartList from "../components/ItemCartList";
import firebase from "firebase";
import "firebase/firestore";
import { getFirestore } from "../Firebase/firebase";
import { useState } from "react";

const Cart = () => {
  const [idOrder, setIdOrder] = useState("");
  const [datos, setForm] = useState({
    name: "",
    Phone: "",
    Email: "",
    validateEmail: "",
  });

  const handlerChange = (e) => {
    e.preventDefault();
    setForm({ ...datos, ...{ [e.target.name]: e.target.value } });
  };

  const { cartList, totalPrice, clear } = useCartContext();

  const generarOrden = () => {
    const orden = {};
    orden.date = firebase.firestore.Timestamp.fromDate(new Date());
    orden.buyer = {
      nombre: datos.name,
      email: datos.Email,
      tel: datos.Phone,
    };
    orden.total = totalPrice();
    orden.items = cartList.map((cartItem) => {
      const id = cartItem.item.id;
      const nombre = cartItem.item.title;
      const precio = cartItem.item.price;

      return { id, nombre, precio };
    });

    // Agregar un elemento a una coleccion
    const db = getFirestore();
    db.collection("orders")
      .add(orden)
      .then((resp) => {
        setIdOrder(resp.id);
      });

    clear();
  };

  return (
    <div
     className="CartMain"
    >
      <h1>Carrito</h1>

      <section>
        {idOrder !== "" && <label>El id de su orden es: {idOrder}</label>}
      </section>
      {cartList.length > 0 && <button onClick={() => clear()}>Borrar Carrito</button>}
      <ItemCartList items={cartList} />

      {cartList.length > 0 && idOrder === "" && (
        <>
          <form className="form">
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Name</label>
              <div className="col-sm-10">
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  placeholder="Nombre"
                  value={datos.name}
                  onChange={handlerChange}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Phone</label>
              <div className="col-sm-10">
                <input
                  className="form-control"
                  type="number"
                  name="Phone"
                  placeholder="Telefono"
                  value={datos.Phone}
                  onChange={handlerChange}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Email</label>
              <div className="col-sm-10">
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail3"
                  placeholder="Email"
                  name="Email"
                  value={datos.Email}
                  onChange={handlerChange}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">validate-Email</label>
              <div className="col-sm-10">
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail3"
                  name="validateEmail"
                  placeholder="Confirmar Email"
                  value={datos.validateEmail}
                  onChange={handlerChange}
                />
              </div>
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                if (
                  datos.Email === datos.validateEmail &&
                  datos.validateEmail !== ""
                ) {
                  generarOrden();
                }
              }}
            >
              Enviar Orden
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default Cart;
