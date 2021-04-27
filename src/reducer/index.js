import { all } from '@redux-saga/core/effects';
import { combineReducers } from 'redux';
import user, { userSaga } from './user';

const rootReducer = combineReducers({
  user,
});

export function* rootSaga() {
  yield all([userSaga()]);
}

export default rootReducer;
