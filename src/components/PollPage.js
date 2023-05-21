import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import Detail from "./Detail";
import Error404 from "./Error404";

const PollPage = (props) => {
  const { questionsKey } = props;

  const { question_id } = useParams();
  const questionId = question_id.replace(":question_", "");

  return (
    <div className="result-page">
      {questionsKey.includes(questionId) ? (
        <Detail id={questionId} />
      ) : (
        <Error404 page="poll" />
      )}
    </div>
  );
};

const mapStateToProps = ({ questions }) => {
  const questionsKey = Object.keys(questions);
  return {
    questionsKey,
  };
};

export default connect(mapStateToProps)(PollPage);
