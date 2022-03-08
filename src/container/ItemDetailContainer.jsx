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
      .where('id', '==' , id)
      .get()
      .then((querySnapshot) => {
        if (id) {
          setItemDetailResq(querySnapshot.docs.map((doc) => doc.data())[0]);
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
