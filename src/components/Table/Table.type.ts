import { CryptoType } from '../../models/crypto';

export interface TableProps {
  toDraw: CryptoType[];
}

export enum TableKeys {
  name = 'name',
  symbol = 'symbol',
  price = 'priceUsd',
  volume = 'volumeUsd24Hr',
  vwap = 'vwap24Hr',
  rank = 'rank',
}
