import { cryptoTypes } from '../actionTypes/actionTypes';
import * as cryptoInterfaces from '../interfaces/crypto.type';

export const fetchCryptoRequest = (): cryptoInterfaces.FetchCryptoRequest => ({
  type: cryptoTypes.FETCH_CRYPTO_REQUEST,
});

export const fetchCrypto = (
  payload: cryptoInterfaces.FetchCryptoSuccessPayload
): cryptoInterfaces.FetchCryptoSuccess => ({
  type: cryptoTypes.FETCH_CRYPTO_SUCCESS,
  payload,
});

export const fetchCryptoFail = (
  payload: cryptoInterfaces.FetchCryptoFailPayload
): cryptoInterfaces.FetchCryptoFail => ({
  type: cryptoTypes.FETCH_CRYPTO_FAIL,
  payload,
});

export const startCryptoLoading = (
  flag: boolean
): cryptoInterfaces.HandleLoading => ({
  type: cryptoTypes.START_CRYPTO_LOADING,
  flag,
});

export const endCryptoLoading = (
  flag: boolean
): cryptoInterfaces.HandleLoading => ({
  type: cryptoTypes.END_CRYPTO_LOADING,
  flag,
});

export const addCryptoToWatchlist = (
  id: string
): cryptoInterfaces.AddCryptoToWatchlist => ({
  type: cryptoTypes.ADD_CRYPTO_TO_WATCHLIST,
  id,
});

export const removeCryptoFromWatchlist = (
  id: string
): cryptoInterfaces.RemoveCryptoFromWatchlist => ({
  type: cryptoTypes.REMOVE_CRYPTO_FROM_WATCHLIST,
  id,
});

export const sortTable = (
  sortBy: string,
  sortDirection: string
): cryptoInterfaces.SortTable => ({
  type: cryptoTypes.SORT_TABLE_ACTION,
  sortBy,
  sortDirection,
});
