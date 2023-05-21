import { _getInitialData } from "../utils/_DATA";
import { receiveUsers } from "./user";
import { getQuestions } from "./question";
import { setAuthedUser } from "./authedUser";

export function handleDataInitial() {
  return (dispatch) => {
    return _getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(getQuestions(questions));
    });
  };
}

export function handleLogin(username, password) {
  return (dispatch, getState) => {
    const { users } = getState();
    const user = Object.values(users).find(
      (user) => user.id === username && user.password === password
    );
    if (user) {
      return dispatch(setAuthedUser(user.id));
    } else {
      return dispatch(setAuthedUser(null));
    }
  };
}
