import {
  GET_USERS,
  UPDATE_ANSWERS_DISPLAY,
  UPDATE_QUESTIONS_DISPLAY,
} from "../actions/user";

function addAnswer(state = {}, action) {
  const { qid, answer } = action;
  const { answers } = state;
  return {
    ...state,
    answers: {
      ...answers,
      [qid]: answer,
    },
  };
}
function addQuestion(state = {}, action) {
  const { id } = action;
  const { questions } = state;
  return {
    ...state,
    questions: questions.concat(id),
  };
}
export default function users(state = {}, action) {
  switch (action.type) {
    case GET_USERS: {
      return {
        ...state,
        ...action.users,
      };
    }
    case UPDATE_ANSWERS_DISPLAY: {
      const { authedUser } = action;
      return {
        ...state,
        [authedUser]: addAnswer(state[authedUser], action),
      };
    }
    case UPDATE_QUESTIONS_DISPLAY: {
      const { authedUser } = action;
      return {
        ...state,
        [authedUser]: addQuestion(state[authedUser], action),
      };
    }
    default:
      return state;
  }
}
