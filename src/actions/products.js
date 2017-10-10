import * as actionTypes from '../constants/actionTypes';

export const fetchProductsRecent = (payload = false) => ({
  type: actionTypes.FETCH_PRODUCTS_RECENT,
  payload,
});

export const fetchProductsList = (payload = false) => ({
  type: actionTypes.FETCH_PRODUCTS_LIST,
  payload,
});

export const fetchProductsDetail = (payload = false) => ({
  type: actionTypes.FETCH_PRODUCTS_DETAIL,
  payload,
});
