import { createSelector } from "reselect";

const selectUser = (state) => state.user;

export const selectCurrentUser = createSelector(
  selectUser,
  (user) => user.currentUser
);

export const selectLoginError = createSelector(
  selectUser,
  (user) => user.error
);

export const selectUsersList = createSelector(selectUser, (user) => user.users);

export const selectUserDetail = createSelector(
  selectUser,
  (user) => user.userDetail
);

export const selectIsSuccessfulAddUpdate = createSelector(
  selectUser,
  (user) => user.isSuccessfulAddUpdate
);
