import { combineReducers } from 'redux';
import cryptoReducer from './cryptoReducer';

const reducer = combineReducers({
  cryptoReducer,
});

export type ReduxRootState = ReturnType<typeof reducer>;

export default reducer;
