import { useSelector } from 'react-redux';
import Table from './Table';

function Crypto() {
  const crypto = useSelector((state) => state.cryptoReducer.data);
  return (
    <div>
      {crypto.length > 0 ? (
        <Table toDraw={crypto.map((item: Crypto) => item)} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
export default Crypto;
