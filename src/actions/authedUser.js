export const SET_AUTHED_USER = "SET_AUTHED_USER";
export const LOGOUT_AUTHED_USER = "LOGOUT_AUTHED_USER";

export function setAuthedUser(id) {
  return {
    type: SET_AUTHED_USER,
    id,
  };
}

export function logoutAutherUser() {
  return {
    type: LOGOUT_AUTHED_USER,
  };
}

export function handleLogin(username, password) {
  return (dispatch, getState) => {
    const { users } = getState();
    const user = Object.values(users).find(
      (u) => u.id === username && u.password === password
    );
    if (user) {
      return dispatch(setAuthedUser(user.id));
    } else {
      return dispatch(setAuthedUser(null));
    }
  };
}

export function handleLogout() {
  return (dispatch) => {
    return dispatch(logoutAutherUser);
  };
}
