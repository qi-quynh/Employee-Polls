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

export function handleLogin(AUTHED_ID) {
  return (dispatch) => {
    dispatch(setAuthedUser(AUTHED_ID));
  };
}
