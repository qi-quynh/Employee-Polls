const Card = (props) => {
  const { avatar, name, answerLength, questionLength } = props;

  return (
    <div className="card">
      <div className="card-left">
        <img src={avatar} alt={name} width="45" height="45" />
        <p>{name}</p>
      </div>
      <div className="card-right">
        <p>Number of Questions - {questionLength}</p>
        <p>Number of Answers - {answerLength}</p>
      </div>
    </div>
  );
};

export default Card;
