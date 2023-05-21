const Card = (props) => {
  const { avatar, name, answersLength, questionsLength } = props;

  return (
    <div className="card">
      <div className="card-left">
        <img src={avatar} alt={name} width="40" height="40" />
        <p>{name}</p>
      </div>
      <div className="card-right">
        <p>{questionsLength} - Questions</p>
        <p>{answersLength} - Answers</p>
      </div>
    </div>
  );
};

export default Card;
