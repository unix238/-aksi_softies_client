import { SET_ITEMS, ADD_ITEM, UPDATE_ITEM } from '../actions/itemsActions';

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
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.items],
      };
    case UPDATE_ITEM:
      return {
        ...state,
        items: state.items.map((item) => {
          if (item._id === action.item._id) {
            return action.item;
          }
          return item;
        }),
      };
    default:
      return state;
  }
}
