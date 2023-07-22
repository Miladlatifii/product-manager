import "./App.css";
import ProductsProvider from "./components/Providers/ProductProvider";
import Filter from "./components/Filter/Filter";
import ProductList from "./components/ProductList/ProductList";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <ProductsProvider>
      <div className="container">
        <NavBar />
        <Filter />
        <ProductList />
      </div>
    </ProductsProvider>
  );
}

export default App;
