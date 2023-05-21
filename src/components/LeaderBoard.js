import { connect } from "react-redux";
import Card from "./Card";

const LeaderBoard = (props) => {
  const { users, userIds } = props;

  const addToUser = (user, answersLength, questionsLength, total) => {
    return {
      ...user,
      answersLength,
      questionsLength,
      total,
    };
  };

  let usersList = [];
  for (const element of userIds) {
    const user = users[element];
    const { questions, answers } = user;
    const questionsLength = questions.length;
    const answersLength = Object.keys(answers).length;
    const total = answersLength + questionsLength;
    const information = addToUser(user, answersLength, questionsLength, total);
    usersList.push(information);
  }

  const sortedList = usersList.sort((a, b) => b.sum - a.sum);
  return (
    <div className="charts">
      <h1 className="charts-h1"> Leaderboard </h1>
      <div></div>
      <ul className="charts-body">
        {sortedList.map((user) => {
          return (
            <li key={user.id}>
              <Card
                answersLength={user.answersLength}
                questionsLength={user.questionsLength}
                avatar={user.avatarURL}
                name={user.name}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = ({ users }) => {
  const userIds = Object.keys(users);

  return { users, userIds };
};

export default connect(mapStateToProps)(LeaderBoard);
