import { useState, useEffect } from "react";
import { useParams } from "react-router";
import ItemDetail from "../components/ItemDetail";

// Al iniciar utilizando un efecto de montaje, debe llamar a un async mock (promise)
// que en 2 segundos le devuelva un 1 ítem, y lo guarde en un estado propio.

/* Esta función debe retornar la promesa que resuelva con delay */
const getItems = new Promise((res, rej) => {
  setTimeout(() => {
    res([
      {
        id: 1,
        title: "Item1",
        pictureUrl: "http://via.placeholder.com/450",
        description:
          "es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
        price: "$500",
      },
      {
        id: 2,
        title: "Item2",
        pictureUrl: "http://via.placeholder.com/450",
        description:
          'No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset".',
        price: "$1000",
      },
    ]);
  }, 2000);
});

function ItemDetailContainer() {
  // Implementar mock invocando a getItems() y utilizando el resolver then
  const [itemDetailResq, setItemDetailResq] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const promesaIndividual = new Promise((res, rej) => {
      setTimeout(() => {
        res(
          [
            {
              id: 1,
              title: "Item1",
              pictureUrl: "http://via.placeholder.com/450",
              description:
                "es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
              price: "$500",
            },
            {
              id: 2,
              title: "Item2",
              pictureUrl: "http://via.placeholder.com/450",
              description:
                'No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset".',
              price: "$1000",
            },
          ].find((producto) => producto.id == id)
        ); //aca le paso el id que viene de la url y lo comparo pero no de modo estricto (el id de params es un string y el id de la lista es un numero)
      }, 2000);
    });
    if (id) {
      getItems
        .then((res) => {
          setItemDetailResq(res.find((producto) => producto.id == id));
        })
        .catch((err) => console.log(err));
    } else {
      getItems
        .then((res) => {
          setItemDetailResq(res[0]);
        })
        .catch((err) => console.log(err));
    }
  }, [id]);

  return (
    <>
      {" "}
      {itemDetailResq === undefined ? (
        <p>loading</p>
      ) : (
        <ItemDetail item={itemDetailResq} />
      )}{" "}
    </>
  );
}

export default ItemDetailContainer;
