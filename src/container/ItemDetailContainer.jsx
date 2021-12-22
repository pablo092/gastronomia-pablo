import { getFirestore } from "@firebase/firestore";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import ItemDetail from "../components/ItemDetail";


function ItemDetailContainer() {
  const [itemDetailResq, setItemDetailResq] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(()=> {
    const db = getFirestore();

    const itemCollection = db.collection("productos");
    const item = itemCollection.doc(id);

    item.get().then((doc)=>{
      if(!doc.exist) {
        console.log('Item does not exist!');
        return;
      }
      console.log('Item found!');
      setItemDetailResq({id: doc.id, ...doc.data()});
    }).catch((error) => {
      console.log("Error searching items", error);
    }).finally(() => {
      setLoading(false);
    });
  }, [id]);

  return (
    <>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <ItemDetail item={itemDetailResq} />
      )}
    </>
  );
}

export default ItemDetailContainer;
