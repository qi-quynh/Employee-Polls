import { connect } from "react-redux";
import Card from "./Card";

const LeaderBoard = (props) => {
  const { users, usernames } = props;

  const objectNumber = (user, answerLength, questionLength, sum) => {
    return {
      ...user,
      answerLength,
      questionLength,
      sum,
    };
  };

  let userList = [];
  for (let i = 0; i < usernames.length; i++) {
    const user = users[usernames[i]];

    const { questions, answers } = user;

    const questionLength = questions.length;
    const answerLength = Object.keys(answers).length;
    const sum = answerLength + questionLength;

    const member = objectNumber(user, answerLength, questionLength, sum);
    userList.push(member);
  }
  const result = userList.sort((a, b) => b.sum - a.sum);
  return (
    <div className="charts">
      <h1 className="charts-h1"> Leaderboard </h1>
      <div></div>
      <ul className="charts-body">
        {result.map((u) => {
          return (
            <li key={u.id}>
              <Card
                answerLength={u.answerLength}
                questionLength={u.questionLength}
                avatar={u.avatarURL}
                name={u.name}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = ({ users }) => {
  const usernames = Object.keys(users);

  return { users, usernames };
};

export default connect(mapStateToProps)(LeaderBoard);
