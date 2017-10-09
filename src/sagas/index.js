import { put, call, takeEvery, all, fork } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import productsSagas from './products';


export default function* rootSaga() {
  yield all([
    fork(productsSagas),
  ]);
}
