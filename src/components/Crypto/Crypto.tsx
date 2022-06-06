import { FC } from 'react';

/* Redux */
import { useSelector } from 'react-redux';

/* Components */
import Loading from '../Loading/Loading';
import Table from '../Table/Table';

const Crypto: FC = () => {
  const crypto = useSelector((state) => state.cryptoReducer.data);

  const loading = useSelector((state) => state.cryptoReducer.loading);

  return <div>{!loading ? <Table toDraw={crypto} /> : <Loading />}</div>;
};

export default Crypto;
