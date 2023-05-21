import { connect } from "react-redux";
import format from "../utils/format";
import Creator from "./Creator";

const HaveAnswered = (props) => {
  const { poll, authedUser, users } = props;
  const { author, optionOne, optionTwo, timestamp } = poll;
  const createdDate = format(timestamp);
  const createdName = users[author].name;
  const url = users[author].avatarURL;

  const numChoseOne = optionOne.votes.length;
  const numChoseTwo = optionTwo.votes.length;
  const numTotal = numChoseOne + numChoseTwo;
  const userChoseOne = optionOne.votes.includes(authedUser);

  return (
    <div className="result">
      <div className="result-left">
        <h1 className="result-header">
          Would you rather <br />
          <br />
          <span>{optionOne.text}</span>
          <br />
          or <span>{optionTwo.text}?</span>
          <br />
          <br />
        </h1>
        <h3 className="result-option">
          My answer: {userChoseOne ? optionOne.text : optionTwo.text}
        </h3>
        <p>
          Votes: {userChoseOne ? numChoseOne : numChoseTwo}
          <span className="percent-style">
            {userChoseOne
              ? Math.round((numChoseOne / numTotal) * 100)
              : Math.round((numChoseTwo / numTotal) * 100)}{" "}
            %
          </span>
        </p>
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

const mapStateToProps = ({ authedUser, users }, { poll }) => {
  return { authedUser, poll, users };
};

export default connect(mapStateToProps)(HaveAnswered);
