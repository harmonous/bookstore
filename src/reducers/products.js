import * as actionTypes from '../constants/actionTypes';

const initialState = {
  productsRecent: [],
  productsList: [],
  productsDetail: [],
  isSuccess: false,
  isPending: false,
  isFailure: false,
};

export default function products(state = initialState, action) {
  switch (action.type) {
  case actionTypes.FETCH_PRODUCTS_RECENT_SUCCESS:
    return Object.assign({}, state, {
      productsRecent: action.payload.result,
      isSuccess: true,
    });

  default:
    return state;
  }
}
