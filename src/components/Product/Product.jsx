import styles from "./product.module.css";
import { BiTrash } from "react-icons/bi";

const Product = ({ product, onChange, onDecrement, onDelete, onIncrement }) => {
  return (
    <div className={styles.product}>
      <div className={styles.product_desc}>
        <p>{product.title}</p>
        <p>price : {product.price}</p>
      </div>
      <div className={styles.btns}>
        <button
          className={`${styles.button} ${styles.inc}`}
          onClick={onIncrement}
        >
          +
        </button>
        <span className={styles.value}>{product.quantity}</span>
        <button
          className={`${styles.button} ${
            product.quantity === 1 && styles.remove
          }`}
          onClick={onDecrement}
        >
          {product.quantity > 1 ? "-" : <BiTrash />}
        </button>

        <button
          onClick={onDelete}
          className={`${styles.button} ${styles.deleteBtn}`}
        >
          delete
        </button>
      </div>
    </div>
  );
};

export default Product;
