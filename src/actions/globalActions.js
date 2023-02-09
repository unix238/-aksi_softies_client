export const SET_CURRENT_LANGUAGE = 'SET_CURRENT_LANGUAGE';
export const LOAD_CURRENT_LANGUAGE = 'LOAD_CURRENT_LANGUAGE';

export const setCurrentLanguage = (language) => ({
    type: SET_CURRENT_LANGUAGE,
    currentLanguage: language,
});

export const loadCurrentLanguage = () => ({
    type: LOAD_CURRENT_LANGUAGE,
    currentLanguage: Number(localStorage.getItem('currentLanguage')),
});

export const setLoadCurrentLanguage = () => (dispatch) => {
    dispatch(loadCurrentLanguage());
};
