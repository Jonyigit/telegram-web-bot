import api from "./index";

export const fetchCategories = async (restaurantId) => {
    const { data } = await api.get(`https://yemak.uz/api/user/restaurant/category?id=${restaurantId}`, {
        headers: {
            "Accept-Language": "uz",
        },
    });
    return data;
};
