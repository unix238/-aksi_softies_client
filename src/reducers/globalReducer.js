import {
    LOAD_CURRENT_LANGUAGE,
    SET_CURRENT_LANGUAGE,
} from '../actions/globalActions';

const initialState = {
    currentLanguage: 1,
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_LANGUAGE:
            localStorage.setItem('currentLanguage', action.currentLanguage);
            return {
                ...state,
                currentLanguage: action.currentLanguage,
            };
        case LOAD_CURRENT_LANGUAGE:
            const language = localStorage.getItem('currentLanguage');
            if (language === null) {
                localStorage.setItem('currentLanguage', 1);
                return {
                    ...state,
                    currentLanguage: 1,
                };
            }
            return {
                ...state,
                currentLanguage: Number(language),
            };
        default:
            return state;
    }
}

export default reducer;
