import "./App.css";
import ItemListContainer from "./container/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      {/* Desarrolla tu implementación de un navbar dentro del componente NavBar.js */}
      <NavBar />
      <ItemListContainer greeting="Pablo"/>
    </>
  );
}

export default App;
