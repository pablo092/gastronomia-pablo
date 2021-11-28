import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./container/ItemListContainer";
import ItemDetailContainer from "./container/ItemDetailContainer";
import CartWidget from "./components/CartWidget";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContextProvider from "./context/CartContext";

function App() {
  return (
    <div className=" border border-3 border-primary">
      <center>
        <CartContextProvider>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route exact path="/" element={<ItemListContainer />} />
              <Route exact path="/category/:id" element={<ItemListContainer />}/>
              <Route exact path="/item/:id" element={<ItemDetailContainer />} />
              <Route exact path="/cart" element={<CartWidget />} />
            </Routes>
          </BrowserRouter>
        </CartContextProvider>
      </center>
    </div>
  );
}

export default App;
