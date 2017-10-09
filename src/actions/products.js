import * as actionTypes from '~/constants/actionTypes';

export const fetchProducts = (payload = false) => {
  return {
    type: actionTypes.FETCH_PRODUCTS_RECENT,
    payload
  }
};
