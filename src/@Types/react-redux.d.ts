import 'react-redux';

/* Store */
import { ReduxRootState } from '../store/reducers/index';

declare module 'react-redux' {
  export declare const useSelector: <T>(selector: (state: ReduxRootState) => T) => T;
}
