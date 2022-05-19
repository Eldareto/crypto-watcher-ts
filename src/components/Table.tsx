import { useDispatch, useSelector } from 'react-redux';
import {
  addCryptoToWatchlist,
  removeCryptoFromWatchlist,
  sortTable,
} from '../store/actions/cryptoActions';

export default function Table(props: any) {
  const sortBy = useSelector((state) => state.cryptoReducer.sortBy);
  const sortDirection = useSelector(
    (state) => state.cryptoReducer.sortDirection
  );

  const sorted = props.toDraw.sort((a: any, b: any) => {
    if (sortDirection === 'asc') {
      return a[sortBy] - b[sortBy];
    }
    return b[sortBy] - a[sortBy];
  });

  const dispatch = useDispatch();

  const watched = useSelector((state) =>
    state.cryptoReducer.watchlist.length > 0
      ? state.cryptoReducer.watchlist
      : []
  );
  const handleChange = (id: string) => {
    !watched.includes(id)
      ? dispatch(addCryptoToWatchlist(id))
      : dispatch(removeCryptoFromWatchlist(id));
  };
  const keys = [
    'name',
    'symbol',
    'priceUsd',
    'volumeUsd24Hr',
    'vwap24Hr',
    'rank',
  ];
  return (
    <table>
      <thead>
        <tr>
          {keys.map((item) => (
            <th key={item}>
              {item}
              <button
                className='sort-asc'
                onClick={() => {
                  dispatch(sortTable(item, 'asc'));
                }}
              >
                &gt;
              </button>
              <button
                className='sort-desc'
                onClick={() => {
                  dispatch(sortTable(item, 'desc'));
                }}
              >
                &gt;
              </button>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sorted.map((ele: any) => {
          return (
            <tr key={ele.id}>
              {keys.map((item) => {
                return item === 'name' ? (
                  <td key={ele.id + item}>
                    <input
                      type='checkbox'
                      checked={watched.includes(ele.id)}
                      onChange={() => {
                        handleChange(ele.id);
                      }}
                    ></input>
                    {ele[item]}
                  </td>
                ) : (
                  <td key={ele.id + item}>{ele[item]}</td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
