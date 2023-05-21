export const GET_USERS = "GET_USERS";
export const UPDATE_ANSWERS_DISPLAY = "UPDATE_ANSWERS_DISPLAY";
export const UPDATE_QUESTIONS_DISPLAY = "UPDATE_QUESTIONS_DISPLAY";

export function receiveUsers(users) {
  return {
    type: GET_USERS,
    users,
  };
}

export function updateAnswersOfUser({ authedUser, qid, answer }) {
  return {
    type: UPDATE_ANSWERS_DISPLAY,
    authedUser,
    qid,
    answer,
  };
}

export function updateQuestionsOfUser(question) {
  return {
    type: UPDATE_QUESTIONS_DISPLAY,
    authedUser: question.author,
    id: question.id,
  };
}
