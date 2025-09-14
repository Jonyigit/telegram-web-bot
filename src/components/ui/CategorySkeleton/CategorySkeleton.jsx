import styles from "./CategorySkeleton.module.scss";

function CategorySkeleton() {
    return (
        <div className={styles.skeletonWrapper}>
            {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className={styles.skeletonItem}></div>
            ))}
        </div>
    );
}

export default CategorySkeleton;
