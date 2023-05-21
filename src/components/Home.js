import { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Detail from "./Detail";

const Home = (props) => {
  const { authedUser, questionIds, questions } = props;

  let questionList = [];
  for (const element of questionIds) {
    questionList.push(questions[element]);
  }

  const haveAnswered = questionList.filter(
    (q) =>
      q.optionOne.votes.includes(authedUser) ||
      q.optionTwo.votes.includes(authedUser)
  );

  const noAnswer = questionList.filter(
    (q) =>
      !q.optionOne.votes.includes(authedUser) &&
      !q.optionTwo.votes.includes(authedUser)
  );

  const [questionsNoAnswer, setQuestionsNoAnswer] = useState(noAnswer);
  const [questionsHaveAnswer, setQuestionsHaveAnswer] = useState(haveAnswered);

  return (
    <div className="home">
      <div>
        <h1 className="h1-home">New Question</h1>
        {questionsNoAnswer.length > 0 ? (
          questionsNoAnswer.map((q) => (
            <li key={q.id}>
              <Link to={`/questions/:question_${q.id}`} className="none">
                <Detail id={q.id} />
              </Link>
            </li>
          ))
        ) : (
          <div>no available</div>
        )}
      </div>

      <div>
        <h1 className="h1-home">Done</h1>
        {questionsHaveAnswer.length > 0 ? (
          questionsHaveAnswer.map((q) => (
            <li key={q.id}>
              <Link to={`/questions/:question_${q.id}`} className="none">
                <Detail id={q.id} />
              </Link>
            </li>
          ))
        ) : (
          <div className="no-avai">no available</div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ questions, authedUser }) => ({
  questionIds: Object.keys(questions).sort(
    (a, b) => questions[b].timestamp - questions[a].timestamp
  ),
  authedUser,
  questions,
});

export default connect(mapStateToProps)(Home);
