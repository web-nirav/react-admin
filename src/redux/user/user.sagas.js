import { all, call, put, takeLatest } from "redux-saga/effects";
import { commonApi } from "../../utils/utility";

import {
  loginFailure,
  loginSuccess,
  logoutSuccess,
  logoutFailure,
} from "./user.actions";

import UserActionTypes from "./user.types";

export function* login({ payload: { email, password } }) {
  try {
    const request = {
      email,
      password,
      user_type: "buyer",
    };
    const response = yield call(commonApi, `users/login`, request, "post");
    const user = response.data.data;
    localStorage.setItem("auth_token", response.data.token);
    // we will check for login success and set some values in local storage and dispatch or put login success action
    yield put(loginSuccess(user));
  } catch (error) {
    yield put(loginFailure(error.response.data));
  }
}

export function* logout() {
  try {
    localStorage.setItem("auth_token", "");
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
