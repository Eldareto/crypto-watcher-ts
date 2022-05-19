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
  yield put(cryptoActions.startCryptoLoading(true));
  try {
    const response: ResponseCrypto = yield call(getData);

    /* should be only one action */
    yield put(cryptoActions.fetchCrypto(response));
    /*  */

    /* Missing data successsfully */

    yield put(cryptoActions.endCryptoLoading(false));
  } catch (e) {
    if (e instanceof Error) {
      yield put(cryptoActions.fetchCryptoFail({ error: e.message }));
      yield put(cryptoActions.endCryptoLoading(false));
    }
  }
}
