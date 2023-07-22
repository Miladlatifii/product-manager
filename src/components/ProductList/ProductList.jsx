import { useEffect } from "react";
import Product from "../Product/Product";
import { useProducts, useProductsActions } from "../Providers/ProductProvider";

// class ProductList extends Component {
//   renderProduct = () => {
//     const { onRemove, onIncrement, onChange, onDecrement, products } =
//       this.props;

//     if (products.length === 0) return <div>there is no product in cart</div>;
//     return products.map((product, index) => {
//       return (
//         <Product
//           product={product}
//           key={index}
//           onDelete={() => onRemove(product.id)}
//           onIncrement={() => onIncrement(product.id)}
//           onChange={(e) => onChange(e, product.id)}
//           onDecrement={() => onDecrement(product.id)}
//         />
//       );
//     });
//   };

//   render() {
//     const { products } = this.props;
//     return (
//       <div>
//         {!products.length && <div>go shopping</div>}
//         {this.renderProduct()}
//       </div>
//     );
//   }
// }
const ProductList = (props) => {
  const products = useProducts();
  const dispatch = useProductsActions();

  const renderProduct = () => {

    if (products.length === 0) return <div>there is no product in cart</div>;
    return products.map((product, index) => {
      return (
        <Product
          product={product}
          key={index}
          onDelete={() => dispatch({ type: "remove", id: product.id })}
          onIncrement={() => dispatch({ type: "increment", id: product.id })}
          onChange={(e) => dispatch({ type: "edit", id: product.id, event: e })}
          onDecrement={() => dispatch({ type: "decrement", id: product.id })}
        />
      );
    });
  };

  return (
    <div>
      {!products.length && <div>go shopping</div>}
      {renderProduct()}
    </div>
  );
};

export default ProductList;
