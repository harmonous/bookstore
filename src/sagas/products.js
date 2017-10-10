import { all, put, call, takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../constants/actionTypes';
import { getProductsList, getProductsRecent, getProductsDetail, getCategories } from '../api/products';

export function* fetchProductsRecent() {
  try {
    const productRecent = yield call(getProductsRecent, 12);
    yield put({
      type: actionTypes.FETCH_PRODUCTS_RECENT_SUCCESS,
      payload: {
        result: productRecent,
      },
    });
  } catch (e) {
    yield put({ type: actionTypes.FETCH_PRODUCTS_RECENT_FAILURE, payload: e.message });
  }
}

export function* fetchProductsList(action) {
  try {
    const productsList = yield call(getProductsList, action.payload.categoryID);
    yield put({
      type: actionTypes.FETCH_PRODUCTS_LIST_SUCCESS,
      payload: {
        result: productsList,
      },
    });
  } catch (e) {
    yield put({ type: actionTypes.FETCH_PRODUCTS_LIST_FAILURE, payload: e.message });
  }
}

export function* fetchProductsDetail(action) {
  try {
    const productsDetail = yield call(getProductsDetail, action.payload.productID);
    yield put({
      type: actionTypes.FETCH_PRODUCTS_DETAIL_SUCCESS,
      payload: {
        result: productsDetail,
      },
    });
  } catch (e) {
    yield put({ type: actionTypes.FETCH_PRODUCTS_DETAIL_FAILURE, payload: e.message });
  }
}


export function* fetchCategories() {
  try {
    const categories = yield call(getCategories);
    yield put({
      type: actionTypes.FETCH_CATEGORIES_SUCCESS,
      payload: {
        result: categories,
      },
    });
  } catch (e) {
    yield put({ type: actionTypes.FETCH_CATEGORIES_FAILURE, payload: e.message });
  }
}

export default function* productsSagas() {
  yield all([
    yield takeEvery(actionTypes.FETCH_CATEGORIES, fetchCategories),
    yield takeEvery(actionTypes.FETCH_PRODUCTS_RECENT, fetchProductsRecent),
    yield takeEvery(actionTypes.FETCH_PRODUCTS_LIST, fetchProductsList),
    yield takeEvery(actionTypes.FETCH_PRODUCTS_DETAIL, fetchProductsDetail),
  ]);
}
