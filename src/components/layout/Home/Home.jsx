import { useEffect, useState } from "react";
import Category from "../Category/Category";
import Products from "../Products/Products";

function Home() {
    const telegram = window.Telegram.WebApp;

    const [activeCategory, setActiveCategory] = useState(null);

    useEffect(() => {
        telegram.ready();
    });

    const onCheckout = () => {
        telegram.MainButton.text = "Sotib olish";
        telegram.MainButton.show();
    };

    return (
        <>
            <Category activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
            <Products activeCategory={activeCategory} onCheckout={onCheckout} />
        </>
    );
}

export default Home;
