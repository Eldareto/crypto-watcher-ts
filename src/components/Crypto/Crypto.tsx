import { CryptoType } from '../../models/crypto';

import { useSelector } from 'react-redux';
import Table from '../Table/Table';

function Crypto() {
  const crypto: CryptoType[] = useSelector((state) => state.cryptoReducer.data);
  const loading = useSelector((state) => state.cryptoReducer.loading);

  return <div>{!loading ? <Table toDraw={crypto.map((item: CryptoType) => item)} /> : <p>Loading...</p>}</div>;
}
export default Crypto;
