import { delay, put, takeEvery } from 'redux-saga/effects';

export const LOGIN = 'USER/LOGIN';
export const CHANGE_USER = 'USER/CHANGE_USER';
export const CHANGE_USER_ASYNC = 'USER/CHANGE_USER_ASYNC';

export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case LOGIN:
      console.log('USER_LOGIN ACTION CATCH');
      console.log(action.payload);
      return {
        ...state,
        ...action.payload,
      };
    case CHANGE_USER:
      console.log('CHANGE_USER ACTION CATCH');
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}

export function doLogin(data) {
  return { type: LOGIN, payload: data };
}

export function changeUser(data) {
  console.log('CHANGER USER CALL');
  return { type: CHANGE_USER, payload: data };
}

export function* changeUserSaga(data) {
  console.log('call changeUser saga');
  yield delay(1000);
  yield put(changeUser(data));
}

export function* userSaga() {
  console.log('user saga call it');
  yield takeEvery(CHANGE_USER_ASYNC, changeUserSaga);
}
