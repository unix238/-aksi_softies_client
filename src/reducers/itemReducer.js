import { SET_ITEMS } from '../actions/itemsActions';

const initialState = {
    items: [],
};

export default function itemReducer(state = initialState, action) {
    switch (action.type) {
        case SET_ITEMS:
            return {
                ...state,
                items: action.items,
            };
        default:
            return state;
    }
}
