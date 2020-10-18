import UserActionTypes from "./user.types";

export const loginStart = (userCredential) => ({
  type: UserActionTypes.LOGIN_START,
  payload: userCredential,
});

export const loginSuccess = (user) => ({
  type: UserActionTypes.LOGIN_SUCCESS,
  payload: user,
});

export const loginFailure = (error) => ({
  type: UserActionTypes.LOGIN_FAILURE,
  payload: error,
});

export const logoutStart = () => ({
  type: UserActionTypes.LOGOUT_START,
});

export const logoutSuccess = () => ({
  type: UserActionTypes.LOGOUT_SUCCESS,
});

export const logoutFailure = (error) => ({
  type: UserActionTypes.LOGOUT_FAILURE,
  payload: error,
});

export const resetErrors = () => ({
  type: UserActionTypes.RESET_ERRORS,
});

export const getUserListStart = (payload) => ({
  type: UserActionTypes.GET_USER_LIST_START,
  payload: payload,
});

export const getUserListSuccess = (users) => ({
  type: UserActionTypes.GET_USER_LIST_SUCCESS,
  payload: users,
});

export const getUserListFailure = (error) => ({
  type: UserActionTypes.GET_USER_LIST_FAILURE,
  payload: error,
});

export const addUpdateUserStart = (user) => ({
  type: UserActionTypes.ADD_UPDATE_USER_START,
  payload: user,
});

export const addUpdateUserSuccess = () => ({
  type: UserActionTypes.ADD_UPDATE_USER_SUCCESS,
});

export const addUpdateUserFailure = (error) => ({
  type: UserActionTypes.ADD_UPDATE_USER_FAILURE,
  payload: error,
});

export const getUserDetailStart = (userId) => ({
  type: UserActionTypes.GET_USER_DETAIL_START,
  payload: userId,
});

export const getUserDetailSuccess = (user) => ({
  type: UserActionTypes.GET_USER_DETAIL_SUCCESS,
  payload: user,
});

export const getUserDetailFailure = (error) => ({
  type: UserActionTypes.GET_USER_DETAIL_FAILURE,
  payload: error,
});
