import axios from "axios";

export const getProducts = async (restaurantId) => {
    const { data } = await axios.get(`https://yemak.uz/api/user/restaurant/product?id=${restaurantId}`, {
        headers: {
            "Accept-Language": "uz",
        },
    });
    return data;
};
