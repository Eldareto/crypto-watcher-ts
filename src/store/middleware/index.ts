import { all, takeLatest } from 'redux-saga/effects';
import { cryptoTypes } from '../actionTypes/actionTypes';
import { fetchCryptoSaga } from './cryptoSaga';
import logger from './logger';

const sagas = [
  takeLatest(cryptoTypes.FETCH_CRYPTO_REQUEST, fetchCryptoSaga),
  logger(),
];

export function* combineSagas() {
  yield all(sagas);
}
