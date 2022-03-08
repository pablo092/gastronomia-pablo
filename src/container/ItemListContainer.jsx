import { getFirestore } from "../Firebase/firebase";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import ItemList from "../components/ItemList";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const itemCollection = db.collection("productos");

    itemCollection
      .get()
      .then((querySnapshot) => {
        if (id) {
          setProducts(
            querySnapshot.docs
              .map((doc) => doc.data())
              .filter((producto) => producto.category === id)
          );
        } else {
          setProducts(querySnapshot.docs.map((doc) => doc.data()));
        }
      })
      .catch((error) => {
        console.log("Error searching products", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return (
    <>
      {loading ? (
        <h1>Cargando...</h1>
      ) : (
        <div
          className="ItemListContainer"
        >
          <ItemList items={products} />
        </div>
      )}
    </>
  );
}

export default ItemListContainer;
