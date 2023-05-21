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

  const [display, setDisplay] = useState(noAnswer);
  const [isDisplay, setIsDisplay] = useState(true);

  const showHaveQuestion = () => {
    setDisplay(haveAnswered);
    setIsDisplay(false);
  };
  const showNoQuestion = () => {
    setDisplay(noAnswer);
    setIsDisplay(true);
  };
  return (
    <div className="home">
      <h1 className="dashboard-heading">
        <button
          className={isDisplay ? "button active" : "button"}
          onClick={showNoQuestion}
        >
          Unanswered
        </button>
        <button
          className={isDisplay ? "button" : "button active"}
          onClick={showHaveQuestion}
        >
          Answered
        </button>
      </h1>
      <ul>
        {display.length > 0 ? (
          display.map((q) => (
            <li key={q.id}>
              <Link to={`/questions/:question_${q.id}`} className="none">
                <Detail id={q.id} />
              </Link>
            </li>
          ))
        ) : (
          <div>no value</div>
        )}
      </ul>
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
