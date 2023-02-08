import { SET_CURRENT_LANGUAGE } from '../actions/globalActions';

const initialState = {
  currentLanguage: 0,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_LANGUAGE:
      return {
        ...state,
        currentLanguage: action.currentLanguage,
      };
    default:
      return state;
  }
}

export default reducer;
