import styles from "./product.module.css";
import { BiTrash } from "react-icons/bi";
import { useEffect } from "react";

const Product = ({ product, onChange, onDecrement, onDelete, onIncrement }) => {

  return (
    <div className={styles.product}>
      <p>product name : {product.title} course</p>
      <p>price : {product.price}</p>
      <span className={styles.value}>{product.quantity}</span>
      {/* <input
        className={styles.input}
        type="text"
        onChange={onChange}
        value={product.title}
      /> */}
      <button
        className={`${styles.button} ${
          product.quantity === 1 && styles.remove
        }`}
        onClick={onDecrement}
      >
        {product.quantity > 1 ? "-" : <BiTrash />}
      </button>
      <button
        className={`${styles.button} ${styles.inc}`}
        onClick={onIncrement}
      >
        +
      </button>
      <button onClick={onDelete} className={styles.button}>
        delete
      </button>
    </div>
  );
};

export default Product;
