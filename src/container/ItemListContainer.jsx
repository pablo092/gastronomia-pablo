import { useState, useEffect } from "react";
import { getFetch } from "../components/getFetch";
import ItemList from "../components/ItemList";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFetch //api Fetch()
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));

    return () => {
      console.log("clean");
    };
  }, []);

  return (
    <div>
      {loading ? <h1>Cargando...</h1> : <ItemList items={products} />}
    </div>
  );
}

export default ItemListContainer;
