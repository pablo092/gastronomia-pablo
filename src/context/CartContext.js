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
        setCartList([...cartList, { item: item, quantity: quantity}]);
    }
  };

  const removeItem = (itemId) => {
    setCartList([cartList.filter(item => item.id !==  itemId)]);
  };

  const clear = () => {
    setCartList([]);
  };

  const isInCart = (id) => {
    return cartList.map(item => item.id).includes(id);
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        addItem,
        removeItem,
        clear,
        isInCart,
      }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
