import { AnyAction } from 'redux';

/* Utilities */
import { initCryptoState } from '../utilities/initStates/cryptoState';
import { updateObj } from '../utilities/utils';

/* Types */
import { cryptoTypes } from '../actionTypes/actionTypes';
import {
  SortedTable,
  ToggleWatchlistItem,
  ToggleLoading,
  CryptoFail,
  CryptoState,
  CryptoSuccess,
  GetCrypto
} from '../interfaces/crypto.type';

const initialState = {
  ...initCryptoState,
};

export const getCryptoData = (state: CryptoState, action: AnyAction) => {
  return updateObj<CryptoState, GetCrypto>(state, {
    data: action.payload.data,
    error: null,
  });
};

export const getCryptoSuccess = (state: CryptoState, action: AnyAction) => {
  return updateObj<CryptoState, CryptoSuccess>(state, {
    isFetchCryptoSuccess: action.payload,
  });
};

export const getCryptoFail = (state: CryptoState, action: AnyAction) => {
  return updateObj<CryptoState, CryptoFail>(state, {
    error: action.payload,
  });
};

export const toggleLoading = (state: CryptoState, action: AnyAction) => {
  return updateObj<CryptoState, ToggleLoading>(state, {
    loading: action.flag,
  });
};

export const addCryptoToWatchlist = (state: CryptoState, action: AnyAction) => {
  return updateObj<CryptoState, ToggleWatchlistItem>(state, {
    watchlist: state.watchlist.concat(action.id),
  });
};

export const removeCryptoFromWatchlist = (state: CryptoState, action: AnyAction) => {
  return updateObj<CryptoState, ToggleWatchlistItem>(state, {
    watchlist: state.watchlist.filter((id) => id !== action.id),
  });
};

export const sortTable = (state: CryptoState, action: AnyAction) => {
  return updateObj<CryptoState, SortedTable>(state, {
    sortDirection: action.sortDirection,
    sortBy: action.sortBy,
  });
};

const cryptoReducer = (state: CryptoState = initialState, action: AnyAction) => {
  switch (action.type) {
    case cryptoTypes.START_LOADING:
      return toggleLoading(state, action);

    case cryptoTypes.END_LOADING:
      return toggleLoading(state, action);

    case cryptoTypes.GET_CRYPTO_DATA:
      return getCryptoData(state, action);

    case cryptoTypes.GET_CRYPTO_SUCCESS:
      return getCryptoSuccess(state, action);

    case cryptoTypes.GET_CRYPTO_FAIL:
      return getCryptoFail(state, action);

    case cryptoTypes.ADD_CRYPTO_TO_WATCHLIST:
      return addCryptoToWatchlist(state, action);

    case cryptoTypes.REMOVE_CRYPTO_FROM_WATCHLIST:
      return removeCryptoFromWatchlist(state, action);

    case cryptoTypes.SORT_TABLE_ACTION:
      return sortTable(state, action);

    default:
      return state;
  }
};

export default cryptoReducer;
