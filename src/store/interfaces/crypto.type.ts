import { CryptoType } from '../../models/crypto';
import { cryptoTypes } from '../actionTypes/actionTypes';

export interface FetchCryptoRequest {
  type: typeof cryptoTypes.FETCH_CRYPTO_REQUEST;
}

export interface GetCryptoDataPayload {
  data: CryptoType[];
}

export interface GetCryptoFailPayload {
  error: string;
}

export interface GetCryptoData {
  type: typeof cryptoTypes.GET_CRYPTO_DATA;
  payload: GetCryptoDataPayload;
}

export interface GetCryptoSuccess {
  type: typeof cryptoTypes.GET_CRYPTO_SUCCESS;
  payload: boolean;
}
export interface CryptoSuccess {
  isFetchCryptoSuccess: boolean;
}

export interface GetCryptoFail {
  type: typeof cryptoTypes.GET_CRYPTO_FAIL;
  payload: GetCryptoFailPayload;
}

export interface AddCryptoToWatchlist {
  type: typeof cryptoTypes.ADD_CRYPTO_TO_WATCHLIST;
  id: string;
}

export interface HandleLoading {
  type: typeof cryptoTypes.START_LOADING | typeof cryptoTypes.END_LOADING;
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
  data: CryptoType[];
  watchlist: string[];
  error: string | null;
  isFetchCryptoSuccess: boolean;
  sortDirection: string;
  sortBy: string;
}
