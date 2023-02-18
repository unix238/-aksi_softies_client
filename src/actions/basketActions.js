/** @format */

import axios from 'axios';
import config from '../config/config';

export const ADD_ITEM_TO_BASKET = 'ADD_ITEM_TO_BASKET';
export const REMOVE_ITEM_FROM_BASKET = 'REMOVE_ITEM_FROM_BASKET';
export const LOAD_BASKET = 'LOAD_BASKET';

export const addItemToBasket = (item, quantity, size) => {
  return {
    type: ADD_ITEM_TO_BASKET,
    basketItem: { item, quantity, size },
  };
};

export const removeItemFromBasket = (item) => {
  return {
    type: REMOVE_ITEM_FROM_BASKET,
    basketItem: item,
  };
};

export const sendOrder = async (order) => {
  try {
    const response = await axios.post(`${config.url}item/checkout`, order);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
