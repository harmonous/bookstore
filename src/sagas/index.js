import { all, fork } from 'redux-saga/effects';

import productsSagas from './products';


export default function* rootSaga() {
  yield all([
    fork(productsSagas),
  ]);
}
