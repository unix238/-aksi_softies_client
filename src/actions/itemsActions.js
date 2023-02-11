import axios from 'axios';
import config from '../config/config';

export const FETCH_ITEMS = 'FETCH_ITEMS';
export const SET_ITEMS = 'SET_ITEMS';

export const setItems = (items, state) => {
    state(items);
    return {
        type: SET_ITEMS,
        items,
    };
};

export const fetchItems = (state) => {
    return (dispatch) => {
        return axios
            .get(`${config.url}item/all`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET',
                },
            })
            .then((response) => {
                dispatch(setItems(response.data, state));
            })
            .catch((error) => {
                console.error(error);
            });
    };
};

export const getItemById = (id, setCurrentItem, setIsLoading) => {
    return axios
        .get(`${config.url}item/get/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET',
            },
        })
        .then((response) => {
            setCurrentItem(response.data);
            setIsLoading(false);
        })
        .catch((error) => {
            console.error(error);
            setIsLoading(true);
        });
};

export const fetchFilteredItems = (filter) => {
    return (dispatch) => {
        return axios
            .get(`${config.url}item/filter`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET',
                },
                params: {
                    filter,
                },
            })
            .then((response) => {
                dispatch(setItems(response.data, state));
            })
            .catch((error) => {
                console.error(error);
            });
    };
};
