import { _getInitialData } from "../utils/_DATA";
import { receiveUsers } from "./user";
import { getQuestions } from "./question";
import { setAuthedUser } from "./authedUser";
import { showLoading, hideLoading } from "react-redux-loading-bar";
export function handleDataInitial() {
  return (dispatch) => {
    dispatch(showLoading());
    return _getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(getQuestions(questions));
      dispatch(hideLoading());
    });
  };
}

export function handleLogin(AUTHED_ID) {
  return (dispatch) => {
    dispatch(setAuthedUser(AUTHED_ID));
  };
}
