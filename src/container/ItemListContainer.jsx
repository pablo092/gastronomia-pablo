//import { getFirestore } from "@firebase/firestore";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getFetch } from "../components/getFetch";
import ItemList from "../components/ItemList";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  // useEffect(()=> {
  //   setLoading(true);
  //   const db = getFirestore();
  //   const itemCollection = db.collection("productos");
  //   itemCollection.get().then((querySnapshot)=>{
  //     if(querySnapshot.size === 0) {
  //       console.log('No reuslts!');
  //     }
  //     setProducts(querySnapshot.docs.map(doc => doc.data()));
  //   }).catch((error) => {
  //     console.log("Error searching products", error);
  //   }).finally(() => {
  //     setLoading(false);
  //   });
  // }, []);

  useEffect(() => {
    if (id) {
      getFetch //api Fetch()
        .then((data) => {
          setProducts(data.filter((producto) => producto.categoria === id));
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    } else {
      getFetch
        .then((data) => {
          setProducts(data);
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }

    return () => {
      console.log("clean");
    };
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
