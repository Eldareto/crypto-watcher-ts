import { FC } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import {
  addCryptoToWatchlist,
  removeCryptoFromWatchlist,
  sortTable,
} from '../store/actions/cryptoActions';
import { TableProps } from './Table.type';

const Table: FC<TableProps> = ({ toDraw }) => {
  const dispatch = useDispatch();

  const sortBy = useSelector((state) => state.cryptoReducer.sortBy);
  const sortDirection = useSelector((state) => state.cryptoReducer.sortDirection);

  /* TODO: Fix the condition */
  const watched = useSelector((state) =>
    state.cryptoReducer.watchlist.length > 0
      ? state.cryptoReducer.watchlist
      : []
  );

  const sorted = toDraw.sort((a: any, b: any) => {
    if (sortDirection === 'asc') {
      return a[sortBy] - b[sortBy];
    }
    return b[sortBy] - a[sortBy];
  });

  const handleChange = (id: string) => {
    !watched.includes(id)
      ? dispatch(addCryptoToWatchlist(id))
      : dispatch(removeCryptoFromWatchlist(id));
  };

  /* The place of it is not here :: insert into type */
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

export default Table;
