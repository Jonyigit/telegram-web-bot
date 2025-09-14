import axios from "axios";

export const getProducts = async () => {
    const { data } = await axios.get(`https://telegram-web-bot-two.vercel.app/api/products`, {
        headers: {
            "Accept-Language": "uz",
        },
    });
    return data;
};
