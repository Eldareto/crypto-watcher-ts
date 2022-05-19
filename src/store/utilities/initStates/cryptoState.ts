import { CryptoState } from '../../interfaces/crypto.type';

export const initCryptoState: CryptoState = {
  loading: false,
  data: [],
  watchlist: [],
  error: null,
  isFetchCryptoSuccess: false,
  sortDirection: 'asc',
  sortBy: 'rank',
};
