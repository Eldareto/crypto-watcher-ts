import { cryptoTypes } from '../actionTypes/actionTypes';
import { CryptoState } from '../interfaces/crypto.type';
import { AnyAction } from 'redux';
import { initCryptoState } from '../utilities/initStates/cryptoState';
import { updateObj } from '../utilities/utils';

const initialState = {
  ...initCryptoState,
};

export const fetchCryptoSuccess = (state: CryptoState, action: AnyAction) => {
  return updateObj(state, {
    data: action.payload.data,
    error: null,
  });
};

export const fetchCryptoFail = (state: CryptoState, action: AnyAction) => {
  return updateObj(state, {
    error: action.payload,
  });
};

export const handleCryptoLoading = (state: CryptoState, action: AnyAction) => {
  return updateObj(state, {
    loading: action.flag,
  });
};

export const addCryptoToWatchlist = (state: CryptoState, action: AnyAction) => {
  return updateObj(state, {
    watchlist: state.watchlist.concat(action.id),
  });
};

export const removeCryptoFromWatchlist = (
  state: CryptoState,
  action: AnyAction
) => {
  return updateObj(state, {
    watchlist: state.watchlist.filter((id) => id !== action.id),
  });
};

export const sortTable = (state: CryptoState, action: AnyAction) => {
  return updateObj(state, {
    sortDirection: action.sortDirection,
    sortBy: action.sortBy,
  });
};

const cryptoReducer = (
  state: CryptoState = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case cryptoTypes.START_CRYPTO_LOADING:
      return handleCryptoLoading(state, action);
    case cryptoTypes.END_CRYPTO_LOADING:
      return handleCryptoLoading(state, action);
    case cryptoTypes.FETCH_CRYPTO_SUCCESS:
      return fetchCryptoSuccess(state, action);
    case cryptoTypes.FETCH_CRYPTO_FAIL:
      return fetchCryptoFail(state, action);
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