import { all, put, call, takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../constants/actionTypes';
import { getProductsRecent } from '../api/products';

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
    const productsList = yield call(fetchProductsList, action.payload.categoryId);
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

export default function* productsSagas() {
  yield all([
    yield takeEvery(actionTypes.FETCH_PRODUCTS_RECENT, fetchProductsRecent),
    yield takeEvery(actionTypes.FETCH_PRODUCTS_LIST, fetchProductsList),
  ]);
}
