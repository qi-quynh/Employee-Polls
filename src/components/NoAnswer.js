import { connect } from "react-redux";
import format from "../utils/format";
import { handleAddAnswer } from "../actions/question";
import { updateAnswersOfUser } from "../actions/user";
import Creator from "./Creator";

const NoAnswer = (props) => {
  const { poll, users, authedUser } = props;
  const { id, author, optionOne, optionTwo, timestamp } = poll;
  const createdDate = format(timestamp);
  const createdName = users[author].name;
  const url = users[author].avatarURL;

  const chooseOption = (e) => {
    const answer = e.target.value;
    const qid = id;

    props.dispatch(handleAddAnswer({ authedUser, qid, answer }));
    props.dispatch(updateAnswersOfUser({ authedUser, qid, answer }));
  };

  return (
    <div className="result">
      <div className="result-left">
        <h1 className="result-header">
          Would you rather
          <div onChange={chooseOption}>
            <div className="padding">
              <input type="radio" name="options" value="optionOne" />
              {optionOne.text}
              <span> or</span>
            </div>{" "}
            <div className="padding">
              <input type="radio" name="options" value="optionTwo" />
              {optionTwo.text}
              <span> ?</span>
            </div>
          </div>
        </h1>
      </div>

      <div className="result-right">
        <Creator
          createdDate={createdDate}
          createdName={createdName}
          avatarURL={url}
        />
      </div>
    </div>
  );
};

const mapStateToProps = ({ users, authedUser }, { poll }) => {
  return {
    users,
    poll,
    authedUser,
  };
};

export default connect(mapStateToProps)(NoAnswer);
