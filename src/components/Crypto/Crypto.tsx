import { FC, ReactElement } from 'react';

/* Redux */
import { useSelector } from 'react-redux';

/* Components */
import { CryptoType } from '../../models/crypto';
import Table from '../Table/Table';

const Crypto: FC = (): ReactElement => {

  /* TODO :: minimize spreading of necessery data */
  const crypto = useSelector((state) => state.cryptoReducer.data);

  const loading = useSelector((state) => state.cryptoReducer.loading);

  return <div>
    {
      !loading 
        ? <Table toDraw={crypto.map((item: CryptoType) => item)} /> 
        : <p>Loading...</p>
    }
    </div>;
};

export default Crypto;
