import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../../api/products";
import ProductsCard from "../../ui/ProductsCard/ProductsCard";
import ProductsCardSkeleton from "../../ui/ProductsCardSkeleton/ProductsCardSkeleton";
import styles from "./Products.module.scss";

function Products({ activeCategory, onCheckout }) {
    const { data, isLoading } = useQuery({
        queryKey: ["products", 104],
        queryFn: () => getProducts(104),
    });

    const categories = data?.data?.products || [];

    const filteredCategories = activeCategory
        ? categories.filter((category) => category.id === activeCategory)
        : categories;

    const [cart, setCart] = useState({});

    const handleCountChange = (productId, count, price) => {
        setCart((prev) => ({
            ...prev,
            [productId]: { count, price },
        }));
    };

    const totalSum = useMemo(() => {
        return Object.values(cart).reduce((acc, item) => {
            return acc + item.count * item.price;
        }, 0);
    }, [cart]);

    return (
        <section className={styles["products-section"]}>
            <div className={styles["products-container"]}>
                {filteredCategories.map((category) => (
                    <div className={styles.category} key={category.id}>
                        {isLoading ? (
                            <div className={styles["loading-title"]}></div>
                        ) : (
                            <div className={styles.title}>
                                <h1>{category.title}</h1>
                            </div>
                        )}
                        <div className={styles.cards}>
                            {isLoading
                                ? Array.from({ length: 6 }).map((_, i) => <ProductsCardSkeleton key={i} />)
                                : category.products.map((item) => (
                                      <ProductsCard key={item.id} product={item} onCountChange={handleCountChange} />
                                  ))}
                        </div>
                    </div>
                ))}

                <AnimatePresence>
                    {totalSum > 0 && (
                        <motion.div
                            key="totalBox"
                            className={styles.totalBox}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 40 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                            <motion.h2
                                key={totalSum}
                                initial={{ scale: 0.95 }}
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 0.25 }}
                            >
                                Umumiy summa: {totalSum.toLocaleString("uzs")} uzs
                            </motion.h2>
                            <button className={styles.btn} onClick={() => onCheckout()}>
                                Buyurtma berish
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}

export default Products;
