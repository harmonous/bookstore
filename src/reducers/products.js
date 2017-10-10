import * as actionTypes from '../constants/actionTypes';

const initialState = {
  categories: [],
  selectedCatecogies: [],
  productsRecent: [],
  productsList: [],
  productsDetail: [],
  isSuccess: false,
  isPending: false,
  isFailure: false,
  redirect: false,
};

export default function products(state = initialState, action) {
  switch (action.type) {
  case actionTypes.REDIRECT:
    return Object.assign({}, state, {
      redirect: action.payload,
    });


  case actionTypes.FETCH_CATEGORIES:
    return Object.assign({}, state, {
      isSuccess: false,
      isPending: true,
      isFailure: false,
    });

  case actionTypes.FETCH_CATEGORIES_SUCCESS:
    return Object.assign({}, state, {
      categories: action.payload.result,
      isSuccess: true,
      isPending: false,
      isFailure: false,
    });

  case actionTypes.FETCH_PRODUCTS_RECENT:
    return Object.assign({}, state, {
      isSuccess: false,
      isPending: true,
      isFailure: false,
    });

  case actionTypes.FETCH_PRODUCTS_RECENT_SUCCESS:
    return Object.assign({}, state, {
      productsRecent: action.payload.result,
      isSuccess: true,
      isPending: false,
      isFailure: false,
    });

  case actionTypes.FETCH_PRODUCTS_RECENT_FAILURE:
    return Object.assign({}, state, {
      isSuccess: false,
      isPending: false,
      isFailure: true,
    });

  case actionTypes.FETCH_PRODUCTS_LIST:
    return Object.assign({}, state, {
      isSuccess: false,
      isPending: true,
      isFailure: false,
    });

  case actionTypes.FETCH_PRODUCTS_LIST_SUCCESS:
    return Object.assign({}, state, {
      productsList: action.payload.result,
      isSuccess: true,
      isPending: false,
      isFailure: false,
    });

  case actionTypes.FETCH_PRODUCTS_LIST_FAILURE:
    return Object.assign({}, state, {
      isSuccess: false,
      isPending: false,
      isFailure: true,
    });

  case actionTypes.FETCH_PRODUCTS_DETAIL:
    return Object.assign({}, state, {
      isSuccess: false,
      isPending: true,
      isFailure: false,
    });

  case actionTypes.FETCH_PRODUCTS_DETAIL_SUCCESS:
    return Object.assign({}, state, {
      productsDetail: action.payload.result,
      isSuccess: true,
      isPending: false,
      isFailure: false,
    });

  case actionTypes.FETCH_PRODUCTS_DETAIL_FAILURE:
    return Object.assign({}, state, {
      isSuccess: false,
      isPending: false,
      isFailure: true,
    });

  default:
    return state;
  }
}
