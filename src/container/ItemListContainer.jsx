import { getFirestore } from "@firebase/firestore";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import ItemList from "../components/ItemList";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(()=> {
    setLoading(true);
    const db = getFirestore();
    const itemCollection = db.collection("productos");
    // const highPrice = itemCollection.where('price', '>', 500);
    // const highPriceShirts = itemCollection.where('price', '>', 500).where('categoryId', '==', 'shrits');
    // const highPriceShirts = itemCollection.where('price', '>', 500).where('categoryId', '==', 'shrits').limit(20);

    itemCollection.get().then((querySnapshot)=>{
      if(querySnapshot.size === 0) {
        console.log('No reuslts!');
      }
      setProducts(querySnapshot.docs.map(doc => doc.data()));
    }).catch((error) => {
      console.log("Error searching products", error);
    }).finally(() => {
      setLoading(false);
    });
  }, [id]);

  return (
    <>
      {loading ? (
        <h1>Cargando...</h1>
      ) : (
        <div
          style={{
            display: "grid",
            gap: "10rem",
            gridAutoRows: "20rem",
            gridTemplateColumns: "repeat(auto-fill,minmax(10rem, 1fr))",
          }}
        >
          <ItemList items={products} />
        </div>
      )}
    </>
  );
}

export default ItemListContainer;
