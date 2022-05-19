import { Crypto } from '../../models/crypto';
import { cryptoTypes } from '../actionTypes/actionTypes';

export interface FetchCryptoRequest {
  type: typeof cryptoTypes.FETCH_CRYPTO_REQUEST;
}

export interface FetchCryptoSuccessPayload {
  data: Crypto[];
}

export interface FetchCryptoFailPayload {
  error: string;
}

export interface FetchCryptoSuccess {
  type: typeof cryptoTypes.FETCH_CRYPTO_SUCCESS;
  payload: FetchCryptoSuccessPayload;
}

export interface FetchCryptoFail {
  type: typeof cryptoTypes.FETCH_CRYPTO_FAIL;
  payload: FetchCryptoFailPayload;
}

export interface AddCryptoToWatchlist {
  type: typeof cryptoTypes.ADD_CRYPTO_TO_WATCHLIST;
  id: string;
}

export interface HandleLoading {
  type:
    | typeof cryptoTypes.START_CRYPTO_LOADING
    | typeof cryptoTypes.END_CRYPTO_LOADING;
  flag: boolean;
}

export interface RemoveCryptoFromWatchlist {
  type: typeof cryptoTypes.REMOVE_CRYPTO_FROM_WATCHLIST;
  id: string;
}

export interface SortTable {
  type: typeof cryptoTypes.SORT_TABLE_ACTION;
  sortBy: string;
  sortDirection: string;
}

/* Redux */
export interface CryptoState {
  loading: boolean;
  data: Crypto[];
  watchlist: string[];
  error: string | null;
  isFetchCryptoSuccess: boolean;
  sortDirection: string;
  sortBy: string;
}
