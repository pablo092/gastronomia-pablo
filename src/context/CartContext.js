import { useState, createContext, useContext } from "react";
const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

function CartContextProvider({ children }) {
  const [cartList, setCartList] = useState([]);

  // Métodos recomendados:
  // addItem(item, quantity) // agregar cierta cantidad de un ítem al carrito
  // removeItem(itemId) // Remover un item del cart por usando su id
  // clear() // Remover todos los items
  // isInCart: (id) => true|false

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCartList([...cartList, { item: item, quantity: quantity }]);
    }
  };

  const editItemQuantity = (id, quantity) => {
    if (quantity > 0) {
      let itemIndex = cartList.findIndex((item) => item.item.id === id);
      let newList = cartList;
      newList[itemIndex].quantity = quantity;
      setCartList([...newList]);
    } else removeItem(id);
  };

  const removeItem = (itemId) => {
    if (isInCart(itemId)) {
      alert("¿Eliminar item del carrito?");
      let itemIndex = cartList.findIndex((item) => item.item.id === itemId);
      cartList.splice(itemIndex, 1);
      setCartList([...cartList]);
    }
  };

  const clear = () => {
    setCartList([]);
  };

  const isInCart = (id) => {
    return cartList.map((item) => item.item.id).includes(id);
  };

  const itemCount = () => {
    let cont = 0;
    cartList.forEach((element) => {
      cont += element.quantity;
    });

    return cont;
  };

  const totalPrice = () => {
    let cont = 0;
    cartList.forEach((element) => {
      cont += element.item.price * element.quantity;
    });

    return cont;
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        addItem,
        removeItem,
        clear,
        isInCart,
        itemCount,
        editItemQuantity,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
