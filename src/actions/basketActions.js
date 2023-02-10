export const ADD_ITEM_TO_BASKET = 'ADD_ITEM_TO_BASKET';
export const REMOVE_ITEM_FROM_BASKET = 'REMOVE_ITEM_FROM_BASKET';
export const LOAD_BASKET = 'LOAD_BASKET';

export const addItemToBasket = (item) => {
    return {
        type: ADD_ITEM_TO_BASKET,
        basketItem: item,
    };
};
