import "./App.css";
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./container/ItemDetailContainer";
import ItemListContainer from "./container/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
