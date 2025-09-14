import styles from "./ProductsCardSkeleton.module.scss";

function ProductsCardSkeleton() {
    return (
        <div className={styles.skeletonCard}>
            <div className={styles.image}></div>
            <div className={styles.content}>
                <div className={styles.title}></div>
                <div className={styles.price}></div>
                <div className={styles.button}></div>
            </div>
        </div>
    );
}

export default ProductsCardSkeleton;
