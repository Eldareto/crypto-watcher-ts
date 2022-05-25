import { FC, ReactElement } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { addCryptoToWatchlist, removeCryptoFromWatchlist, sortTable } from '../../store/actions/cryptoActions';
import { TableProps, TableKeys } from './Table.type';

import { sortArr } from '../../utilities/utils';

const Table: FC<TableProps> = ({ toDraw }): ReactElement => {
  const dispatch = useDispatch();

  const sortBy = useSelector((state) => state.cryptoReducer.sortBy);
  const sortDirection = useSelector((state) => state.cryptoReducer.sortDirection);

  const watchlist = useSelector((state) => state.cryptoReducer.watchlist);

  const sorted = sortArr(toDraw, sortBy, sortDirection);

  const keys = [TableKeys.name, TableKeys.rank, TableKeys.symbol, TableKeys.price, TableKeys.volume, TableKeys.vwap];

  const handleChange = (id: string) => {
    !watchlist.includes(id) ? dispatch(addCryptoToWatchlist(id)) : dispatch(removeCryptoFromWatchlist(id));
  };

  return (
    <table>
      <thead>
        <tr>
          <th></th>
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
              <td>
                <input
                  type='checkbox'
                  checked={watchlist.includes(ele.id)}
                  onChange={() => {
                    handleChange(ele.id);
                  }}
                ></input>
              </td>
              {keys.map((item) => {
                return <td key={ele.id + item}>{ele[item]}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
