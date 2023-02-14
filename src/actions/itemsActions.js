import axios from 'axios';
import config from '../config/config';

export const FETCH_ITEMS = 'FETCH_ITEMS';
export const SET_ITEMS = 'SET_ITEMS';
export const FETCH_FILTERED_ITEMS = 'FETCH_FILTERED_ITEMS';

export const setItems = (items, state) => {
  state(items);
  return {
    type: SET_ITEMS,
    items,
  };
};

export const setFilteredItems = (items) => {
  return {
    type: FETCH_FILTERED_ITEMS,
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

export const fetchFilteredItems = (filters) => {
  return (dispatch) => {
    let allFilters = {
      sort: null,
      size: null,
      category: null,
      price: null,
      material: null,
    };
    return axios
      .get(`${config.url}item/filter`, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET',
        },
        params: {
          ...allFilters,
          ...filters,
        },
      })
      .then((response) => {
        dispatch(setFilteredItems(response.data));
      })
      .catch((error) => {
        console.error(error);
      });
  };
};
