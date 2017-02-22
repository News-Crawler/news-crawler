import { takeEvery } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import { registerRequest, loginRequest } from '../api';

export const REGISTER = 'REGISTER';
export const REGISTER_TRIGGERED = 'REGISTER_TRIGGERED';
export const LOGIN = 'LOGIN';
export const LOGIN_TRIGGERED = 'LOGIN_TRIGGERED';

export const triggerRegistration = payload => ({
  type: REGISTER_TRIGGERED,
  payload,
});

export const triggerLogin = payload => ({
  type: LOGIN_TRIGGERED,
  payload,
});

function* register({ payload }) {
  yield put({ type: REGISTER, status: 'request' });
  try {
    const response = yield call(registerRequest, payload);
    yield put({ type: REGISTER, response, status: 'success' });
  } catch (e) {
    yield put({ type: LOGIN, message: e.message, status: 'failure', error: e });
  }
}

export function* registerSaga() {
  yield* takeEvery(REGISTER_TRIGGERED, register);
}

function* login({ payload }) {
  yield put({ type: LOGIN, status: 'request' });
  try {
    const response = yield call(loginRequest, payload);
    yield put({ type: LOGIN, response, status: 'success' });
  } catch (e) {
    yield put({ type: LOGIN, message: e.message, status: 'failure', error: e });
  }
}

export function* loginSaga() {
  yield* takeEvery(LOGIN_TRIGGERED, login);
}
