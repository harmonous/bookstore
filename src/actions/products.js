import * as actionTypes from '../constants/actionTypes';


export const selectCategory = (payload = false) => ({
  type: actionTypes.SELECT_CATEGORY,
  payload,
});

export const redirect = (payload = false) => ({
  type: actionTypes.REDIRECT,
  payload,
});

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

export const fetchCategories = (payload = false) => ({
  type: actionTypes.FETCH_CATEGORIES,
  payload,
});
