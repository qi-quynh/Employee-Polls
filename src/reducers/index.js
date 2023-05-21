import { combineReducers } from "redux";
import authedUser from "./authedUser";
import users from "./user";
import questions from "./question";

export default combineReducers({
  authedUser,
  users,
  questions,
});
