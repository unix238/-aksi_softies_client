import { ADD_ITEM_TO_BASKET } from '../actions/basketActions';

const initialState = {
    basketItems:
        localStorage.getItem('basket') === null
            ? []
            : localStorage.getItem('basket').split(','),
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_ITEM_TO_BASKET:
            localStorage.setItem('basket', [
                ...state.basketItems,
                action.basketItem,
            ]);

            return {
                ...state,
                basketItems: [...state.basketItems, action.basketItem],
            };
        default:
            return state;
    }
}

export default reducer;
