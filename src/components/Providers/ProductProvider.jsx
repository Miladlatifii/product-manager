import React, { useEffect, useReducer, useState } from "react";
import { useContext } from "react";
import { productsData } from "/src/db/product";

import _ from "lodash";

const ProductContext = React.createContext(); // state
const ProductContextDispatcher = React.createContext(); // setState

const reducer = (state, action) => {
  switch (action.type) {
    case "increment": {
      const index = state.findIndex((item) => item.id === action.id);
      const product = { ...state[index] };
      product.quantity++;
      const updatedProducts = [...state];
      updatedProducts[index] = product;
      return updatedProducts;
    }
    case "decrement": {
      const index = state.findIndex((item) => item.id === action.id);
      const product = { ...state[index] };
      if (product.quantity === 1) {
        const filteredProducts = state.filter((p) => p.id !== action.id);
        return filteredProducts;
      } else {
        const updatedProducts = [...state];
        product.quantity--;
        updatedProducts[index] = product;
        return updatedProducts;
      }
    }
    case "edit": {
      const index = state.findIndex((item) => item.id === action.id);
      const product = { ...state[index] };
      product.title = action.event.target.value;
      const updatedProducts = [...state];
      updatedProducts[index] = product;
      return updatedProducts;
    }
    case "remove":
      const filteredProducts = state.filter((p) => p.id !== action.id);
      return filteredProducts;

    case "filter": {
      const value = action.selectedOption.value;
      if (!value) {
        return productsData;
      } else {
        const updatedProducts = productsData.filter(
          (p) => p.availableSizes.indexOf(value) >= 0
        );

        return updatedProducts;
      }
    }

    case "sort": {
      const value = action.selectedOption.value;
      const products = [...state];
      if (value === "lowest") {
        return _.orderBy(products, ["price"], ["asc"]);
      } else {
        return _.orderBy(products, ["price"], ["desc"]);
      }
    }

    case "search": {
      const value = action.event.target.value;
      if (value === "") {
        return state;
      } else {
        const filteredProducts = state.filter((p) =>
          p.title.toLowerCase().includes(value.toLowerCase())
        );
        return filteredProducts;
      }
    }
    default:
      return state;
  }
};

const ProductsProvider = ({ children }) => {
  const [products, dispatch] = useReducer(reducer, productsData);

  return (
    <ProductContext.Provider value={products}>
      <ProductContextDispatcher.Provider value={dispatch}>
        {children}
      </ProductContextDispatcher.Provider>
    </ProductContext.Provider>
  );
};

export default ProductsProvider;

export const useProducts = () => useContext(ProductContext);

export const useProductsActions = () => {
  return useContext(ProductContextDispatcher);
};
