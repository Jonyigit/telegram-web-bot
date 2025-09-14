import axios from "axios";

export const fetchCategories = async (restaurantId) => {
    const { data } = await axios.get(`https://yemak.uz/api/user/restaurant/category?id=${restaurantId}`, {
        headers: {
            "Accept-Language": "uz",
        },
    });
    return data;
};
