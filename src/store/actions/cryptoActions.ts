import { cryptoTypes } from '../actionTypes/actionTypes';
import * as cryptoInterfaces from '../interfaces/crypto.type';

export const fetchCryptoRequest = (): cryptoInterfaces.FetchCryptoRequest => ({
  type: cryptoTypes.FETCH_CRYPTO_REQUEST,
});

export const getCryptoData = (payload: cryptoInterfaces.GetCryptoDataPayload): cryptoInterfaces.GetCryptoData => ({
  type: cryptoTypes.GET_CRYPTO_DATA,
  payload,
});

export const getCryptoSuccess = (payload: null): cryptoInterfaces.GetCryptoSuccess => ({
  type: cryptoTypes.GET_CRYPTO_SUCCESS,
  payload,
});

export const getCryptoFail = (payload: cryptoInterfaces.GetCryptoFailPayload): cryptoInterfaces.GetCryptoFail => ({
  type: cryptoTypes.GET_CRYPTO_FAIL,
  payload,
});

export const toggleLoading = (flag: boolean): cryptoInterfaces.HandleLoading =>
  flag ? { type: cryptoTypes.START_LOADING, flag } : { type: cryptoTypes.END_LOADING, flag };

export const addCryptoToWatchlist = (id: string): cryptoInterfaces.AddCryptoToWatchlist => ({
  type: cryptoTypes.ADD_CRYPTO_TO_WATCHLIST,
  id,
});

export const removeCryptoFromWatchlist = (id: string): cryptoInterfaces.RemoveCryptoFromWatchlist => ({
  type: cryptoTypes.REMOVE_CRYPTO_FROM_WATCHLIST,
  id,
});

export const sortTable = (sortBy: string, sortDirection: string): cryptoInterfaces.SortTable => ({
  type: cryptoTypes.SORT_TABLE_ACTION,
  sortBy,
  sortDirection,
});
