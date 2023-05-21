import { _saveQuestion, _saveQuestionAnswer } from "../utils/_DATA";
import { updateQuestionsOfUser } from "./user";
import { showLoading, hideLoading } from "react-redux-loading-bar";
export const GET_QUESTIONS = "GET_QUESTIONS";
export const ADD_ANSWER = "ADD_ANSWER";
export const ADD_QUESTION = "ADD_QUESTION";

export function getQuestions(questions) {
  return {
    type: GET_QUESTIONS,
    questions,
  };
}

function createAnswer({ authedUser, qid, answer }) {
  return {
    type: ADD_ANSWER,
    authedUser,
    qid,
    answer,
  };
}

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

export function handleAddAnswer({ authedUser, qid, answer }) {
  return (dispatch) => {
    dispatch(showLoading);
    return _saveQuestionAnswer({
      authedUser,
      qid,
      answer,
    })
      .then(() => {
        dispatch(createAnswer({ authedUser, qid, answer }));
      })
      .then(() => dispatch(hideLoading()));
  };
}

export function handleAddQuestion(question) {
  return (dispatch) => {
    return _saveQuestion(question)
      .then((res) => {
        dispatch(addQuestion(res));
        dispatch(updateQuestionsOfUser(res));
      })
      .catch((e) => console.log("Error from handleSaveQuestion: ", e));
  };
}
