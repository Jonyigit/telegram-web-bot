import styles from "./Category.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CategorySkeleton from "../../ui/CategorySkeleton/CategorySkeleton";
import { categoryDb } from "../../../api/categoryDb";

function Category({ activeCategory, setActiveCategory }) {
    const [isLoading, setIsLoading] = useState(true);
    const categories = categoryDb()?.data || [];

    useEffect(() => {
        if (categories.length > 0) {
            setIsLoading(false);
            if (!activeCategory) {
                setActiveCategory(categories[0].id);
            }
        }
    }, [categories, activeCategory, setActiveCategory]);

    return (
        <header className={styles["category-section"]}>
            <nav className={styles["category-container"]}>
                {isLoading ? (
                    <CategorySkeleton />
                ) : (
                    <Swiper spaceBetween={8} slidesPerView="auto" freeMode={true} className={styles.lists}>
                        {categories.map((item, index) => (
                            <SwiperSlide key={item.id} style={{ width: "auto" }}>
                                <motion.li
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                    animate={
                                        activeCategory === item.id
                                            ? { scale: [1, 1.1, 1], transition: { duration: 0.4 } }
                                            : {}
                                    }
                                    className={activeCategory === item.id ? styles.active : ""}
                                    onClick={() => setActiveCategory(item.id)}
                                >
                                    {item.title}
                                </motion.li>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
            </nav>
        </header>
    );
}

export default Category;
