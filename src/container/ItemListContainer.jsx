import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getFetch } from "../components/getFetch";
import ItemList from "../components/ItemList";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getFetch //api Fetch()
        .then((data) => {
          setProducts(data.filter(producto => producto.categoria === id));
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
    <div>{loading ? <h1>Cargando...</h1> : <ItemList items={products} />}</div>
  );
}

export default ItemListContainer;
