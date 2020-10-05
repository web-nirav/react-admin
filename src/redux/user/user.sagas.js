import { all, call, put, takeLatest } from "redux-saga/effects";

import {
  loginFailure,
  loginSuccess,
  logoutSuccess,
  logoutFailure,
} from "./user.actions";

import UserActionTypes from "./user.types";

export function* login({ payload: { username, password } }) {
  try {
    const user = {};
    yield put(loginSuccess(user));
  } catch (error) {
    yield put(loginFailure(error));
  }
}

export function* logout() {
  try {
    yield put(logoutSuccess());
  } catch (error) {
    yield put(logoutFailure(error));
  }
}

export function* onLoginStart() {
  yield takeLatest(UserActionTypes.LOGIN_START, login);
}

export function* onLogoutStart() {
  yield takeLatest(UserActionTypes.LOGOUT_START, logout);
}

export function* userSagas() {
  yield all([call(onLoginStart), call(onLogoutStart)]);
}
