import { CryptoType } from '../../models/crypto';
import { FC, ReactElement } from 'react';

import { useSelector } from 'react-redux';
import Table from '../Table/Table';

const Crypto: FC = (): ReactElement => {
  const crypto: CryptoType[] = useSelector((state) => state.cryptoReducer.data);
  const loading = useSelector((state) => state.cryptoReducer.loading);

  return <div>{!loading ? <Table toDraw={crypto.map((item: CryptoType) => item)} /> : <p>Loading...</p>}</div>;
};
export default Crypto;
