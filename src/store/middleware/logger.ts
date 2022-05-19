import { take, select } from 'redux-saga/effects';

export default function* logger(): any {
  while (true) {
    const action = yield take('*');
    const state = yield select();

    console.log('====================================');
    console.log('The action is:', action);
    console.log('The new state is:', state);
    console.log('====================================');
  }
}
