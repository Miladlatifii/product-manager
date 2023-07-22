import "./App.css";
import ProductsProvider from "./components/Providers/ProductProvider";
import Filter from "./components/Filter/Filter";
import ProductList from "./components/ProductList/ProductList";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="container">
      <ProductsProvider>
        <NavBar />
        <Filter />
        <ProductList />
      </ProductsProvider>
    </div>
  );
}

export default App;
