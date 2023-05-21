import { connect } from "react-redux";
import HaveAnswered from "./HaveAnswered";
import NoAnswer from "./NoAnswer";

const Detail = (props) => {
  const { poll, authedUser } = props;
  const { optionOne, optionTwo } = poll;

  const selectOne = optionOne.votes.includes(authedUser);
  const selectTwo = optionTwo.votes.includes(authedUser);
  const isNoAnswered = !selectOne && !selectTwo;

  return (
    <div className="poll-container">
      {isNoAnswered ? <NoAnswer poll={poll} /> : <HaveAnswered poll={poll} />}
    </div>
  );
};

const mapStateToProps = ({ authedUser, questions }, { id }) => {
  const poll = questions[id];
  return { authedUser, poll };
};

export default connect(mapStateToProps)(Detail);
