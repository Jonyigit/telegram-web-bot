import { useState, useEffect } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { motion } from "framer-motion";
import styles from "./ProductsCard.module.scss";

function ProductsCard({ product, onCountChange }) {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        if (count < 10) setCount((prev) => prev + 1);
    };

    const handleDecrement = () => {
        if (count > 1) setCount((prev) => prev - 1);
        else setCount(0);
    };

    const totalPrice = product.price_original * count;

    useEffect(() => {
        if (onCountChange) {
            onCountChange(product.id, count, product.price_original);
        }
    }, [count]);

    return (
        <motion.div
            className={styles["products-card"]}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            whileHover={{ scale: 1.03, boxShadow: "0 8px 20px rgba(0,0,0,0.1)" }}
        >
            <div className={styles["product-picture"]}>
                <img src={product.photo} alt={product.name} />
            </div>
            <div className={styles.content}>
                <h4 className={styles["card-title"]}>{product.name}</h4>

                {count > 0 ? (
                    <h2 className={styles["product-price"]}>{totalPrice.toLocaleString("uzs")} uzs</h2>
                ) : (
                    <h2 className={styles["product-price"]}>{product.price_original.toLocaleString("uzs")} uzs</h2>
                )}

                {count > 0 ? (
                    <div className={styles["counter-box"]}>
                        <motion.button
                            whileTap={{ scale: 0.8 }}
                            className={styles.dec}
                            onClick={handleDecrement}
                            disabled={count === 0}
                        >
                            <FaMinus />
                        </motion.button>
                        <div className={styles.count}>{count}</div>
                        <motion.button
                            whileTap={{ scale: 0.8 }}
                            className={styles.inc}
                            onClick={handleIncrement}
                            disabled={count === 10}
                        >
                            <FaPlus />
                        </motion.button>
                    </div>
                ) : (
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 0.3 }}
                        className={styles["add-btn"]}
                        onClick={() => setCount(1)}
                    >
                        Qo'shish
                    </motion.button>
                )}
            </div>
        </motion.div>
    );
}

export default ProductsCard;
