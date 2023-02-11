import {
    ADD_ITEM_TO_BASKET,
    REMOVE_ITEM_FROM_BASKET,
} from '../actions/basketActions';

const initialState = {
    basketItems:
        localStorage.getItem('basket') === null
            ? []
            : localStorage.getItem('basket').split(','),
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_ITEM_TO_BASKET:
            const items = {
                item: action.basketItem,
            };
            console.log(items);
            const basket = [...state.basketItems, items];
            localStorage.setItem('basket', JSON.stringify(basket));

            return {
                ...state,
                basketItems: [...state.basketItems, items],
            };

        case REMOVE_ITEM_FROM_BASKET:
            return {
                ...state,
                basketItems: state.basketItems.filter(
                    (item) => item.item !== action.basketItem
                ),
            };
        default:
            return state;
    }
}

export default reducer;
