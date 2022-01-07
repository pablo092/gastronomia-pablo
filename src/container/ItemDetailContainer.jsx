import { getFirestore } from "../Firebase/firebase";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import ItemDetail from "../components/ItemDetail";

function ItemDetailContainer() {
  const [itemDetailResq, setItemDetailResq] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("productos");

    itemCollection
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          console.log("No reuslts!");
        }
        if (id) {
          const products = querySnapshot.docs.map((doc) => doc.data());
          console.log(products);
          products.forEach((item) => {
            if (item.id === id) {
              setItemDetailResq(item);
            }
          });
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
    <>{loading ? <p>Cargando...</p> : <ItemDetail item={itemDetailResq} />}</>
  );
}

export default ItemDetailContainer;
