import Table from '../Table/Table';
import { useSelector } from 'react-redux';
import { FC, ReactElement } from 'react';
import { CryptoType } from '../../models/crypto';

const Watchlist: FC = (): ReactElement => {
  const crypto = useSelector((state) => state.cryptoReducer.data);
  const watched = useSelector((state) => state.cryptoReducer.watchlist);
  return (
    <div>
      {watched.length > 0 ? (
        <Table toDraw={crypto.filter((item: CryptoType) => watched.includes(item.id))} />
      ) : (
        <p>No crypto is selected</p>
      )}
    </div>
  );
};

export default Watchlist;
