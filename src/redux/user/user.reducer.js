import UserActionTypes from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  error: null,
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
    case UserActionTypes.LOGIN_FAILURE:
    case UserActionTypes.LOGOUT_FAILURE:
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
