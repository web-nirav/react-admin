import { all, call, put, takeLatest } from "redux-saga/effects";
import { commonApi } from "../../utils/utility";

import {
  loginFailure,
  loginSuccess,
  logoutSuccess,
  logoutFailure,
  getUserListSuccess,
  getUserListFailure,
  addUpdateUserSuccess,
  addUpdateUserFailure,
  getUserDetailFailure,
  getUserDetailSuccess,
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

export function* getUserList(action) {
  try {
    // console.log("action", action);
    const page = action.payload ?? 1;
    const response = yield call(
      commonApi,
      `users?page=${page}`,
      "",
      "GET",
      true
    );
    const users = yield response.data.success.data;
    // console.log("users", users);
    yield put(getUserListSuccess(users));
  } catch (error) {
    yield put(getUserListFailure(error.response.data));
  }
}

export function* addUpdateUser(action) {
  try {
    const apiUrl = `users`;
    const response = yield call(
      commonApi,
      apiUrl,
      action.payload,
      "POST",
      true
    );
    if (response && response.status === 200) {
      yield put(addUpdateUserSuccess());
    }
  } catch (error) {
    yield put(addUpdateUserFailure(error.response.data));
  }
}

export function* getUserDetail(action) {
  try {
    const response = yield call(
      commonApi,
      `users/${action.payload}`,
      "",
      "GET",
      true
    );
    const userDetail = yield response.data.success.data;
    yield put(getUserDetailSuccess(userDetail));
  } catch (error) {
    yield put(getUserDetailFailure(error));
  }
}

export function* onLoginStart() {
  yield takeLatest(UserActionTypes.LOGIN_START, login);
}

export function* onLogoutStart() {
  yield takeLatest(UserActionTypes.LOGOUT_START, logout);
}

export function* onGetUserListStart() {
  yield takeLatest(UserActionTypes.GET_USER_LIST_START, getUserList);
}

export function* onAddUpdateUserStart() {
  yield takeLatest(UserActionTypes.ADD_UPDATE_USER_START, addUpdateUser);
}

export function* onGetUserDetailStart() {
  yield takeLatest(UserActionTypes.GET_USER_DETAIL_START, getUserDetail);
}

export function* userSagas() {
  yield all([
    call(onLoginStart),
    call(onLogoutStart),
    call(onGetUserListStart),
    call(onAddUpdateUserStart),
    call(onGetUserDetailStart),
  ]);
}
