import { put, call, takeEvery } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import * as actionTypes from '~/constants/actionTypes';
import { getProductsRecent } from '~/api/products';

export function* fetchProductsRecent() {
  try {
    const productRecent = yield call(getProductsRecent);
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

export default function* productsSagas() {
  yield takeEvery(actionTypes.FETCH_PRODUCTS_RECENT, fetchProductsRecent);
}
