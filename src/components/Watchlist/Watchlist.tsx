import Table from '../Table/Table';
import { useSelector } from 'react-redux';

export default function Watchlist() {
  const crypto = useSelector((state) => state.cryptoReducer.data);
  const watched = useSelector((state) => state.cryptoReducer.watchlist);
  return <div>{watched.length > 0 ? <Table toDraw={crypto.filter((ele: any) => watched.includes(ele.id))} /> : <p>No crypto is selected</p>}</div>;
}
