import { call, put } from 'redux-saga/effects';
import { ResponseCrypto } from '../../models/crypto';

import { fetcher } from '../../utilities/fetcher/fetcher';

import * as cryptoActions from '../actions/cryptoActions';
import { APIResponse, Method } from '../../utilities/fetcher/global.type';
import { constantEnv } from '../../utilities/fetcher/globalApiEnv.type';

export function* fetchCryptoSaga() {
  yield put(cryptoActions.toggleLoading(true));

  try {
    const response: APIResponse<ResponseCrypto> = yield call(fetcher, constantEnv.MAIN_SERVICE, null, Method.GET, false);
    
    yield put(cryptoActions.getCryptoData(response.data));
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
