import api from "./index";

export const getProducts = async (restaurantId) => {
    const { data } = await api.get(`/user/restaurant/product?id=${restaurantId}`, {
        headers: {
            "Accept-Language": "uz",
        },
    });
    return data;
};
