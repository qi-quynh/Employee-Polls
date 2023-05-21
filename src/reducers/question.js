import { ADD_ANSWER, GET_QUESTIONS, ADD_QUESTION } from "../actions/question";

function choose(state = {}, action) {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case ADD_ANSWER:
      const { authedUser } = action;
      const { votes } = state;
      return {
        ...state,
        votes: votes.concat([authedUser]),
      };
  }
}
function addAnswer(state = {}, action) {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case ADD_ANSWER:
      const { answer } = action;

      return {
        ...state,
        [answer]: choose(state[answer], action),
      };
  }
}
export default function questions(state = {}, action) {
  switch (action.type) {
    case GET_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case ADD_QUESTION:
      const { question } = action;
      const { id } = question;
      return {
        ...state,
        [id]: question,
      };
    case ADD_ANSWER:
      const { qid } = action;

      return {
        ...state,
        [qid]: addAnswer(state[qid], action),
      };

    default:
      return state;
  }
}
