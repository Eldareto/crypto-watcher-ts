import { call, put } from 'redux-saga/effects';
import { ResponseCrypto } from '../../models/crypto';
import * as cryptoActions from '../actions/cryptoActions';

async function getData() {
  let response: ResponseCrypto;
  try {
    response = await (await fetch('https://api.coincap.io/v2/assets')).json();
    console.log(response);
    return response;
  } catch (error) {
    console.log('====================================');
    console.log(error);
    console.log('====================================');
  }
}

export function* fetchCryptoSaga() {
  yield put(cryptoActions.toggleLoading(true));

  try {
    const response: ResponseCrypto = yield call(getData);

    yield put(cryptoActions.getCryptoData(response));
    yield put(cryptoActions.getCryptoSuccess(true));
    yield put(cryptoActions.toggleLoading(false));
  } catch (e) {
    if (e instanceof Error) {
      yield put(cryptoActions.getCryptoFail({ error: e.message }));
      yield put(cryptoActions.toggleLoading(false));
      yield put(cryptoActions.getCryptoSuccess(false));
    }
  }
}
