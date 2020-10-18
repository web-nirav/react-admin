import UserActionTypes from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  error: null,
  users: null,
  userDetail: null,
  isSuccessfulAddUpdate: false,
  // loading: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };
    case UserActionTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
      };
    case UserActionTypes.GET_USER_LIST_SUCCESS:
      return {
        ...state,
        users: action.payload,
        error: null,
      };
    case UserActionTypes.ADD_UPDATE_USER_SUCCESS:
      return {
        ...state,
        isSuccessfulAddUpdate: true,
        error: null,
      };
    case UserActionTypes.GET_USER_DETAIL_SUCCESS:
      return {
        ...state,
        userDetail: action.payload,
        error: null,
      };
    case UserActionTypes.LOGIN_FAILURE:
    case UserActionTypes.LOGOUT_FAILURE:
    case UserActionTypes.GET_USER_LIST_FAILURE:
    case UserActionTypes.ADD_UPDATE_USER_FAILURE:
    case UserActionTypes.GET_USER_DETAIL_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case UserActionTypes.RESET_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export default userReducer;
