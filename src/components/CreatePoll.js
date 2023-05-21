import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleAddQuestion } from "../actions/question";

const CreatePoll = (props) => {
  const navigate = useNavigate();
  const { authedUser, dispatch } = props;

  const data = {
    author: authedUser,
    optionOneText: "",
    optionTwoText: "",
  };

  const [newQuestion, setNewQuestion] = useState(data);
  const [isDisabled, setIsDisabled] = useState(true);

  const checkInput = () => {
    if (newQuestion.optionOneText !== "" && newQuestion.optionTwoText !== "") {
      setIsDisabled(false);
    }
  };

  useEffect(() => {
    checkInput();
  }, [newQuestion]);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(handleAddQuestion(newQuestion)).then(() => {
      setIsDisabled(true);
      setNewQuestion(data);
      navigate("/");
    });
  };

  const onValueChange = (e) => {
    const { name, value } = e.target;
    setNewQuestion({ ...newQuestion, [name]: value });
  };

  return (
    <div className="create">
      <h1 className="create-header">Create Poll</h1>
      <form className="create-form" onSubmit={handleSubmit}>
        <span className="create-display">Would you rather</span> <br />
        <input
          name="optionOneText"
          className="input"
          type="text"
          size="70"
          value={newQuestion.optionOneText}
          onChange={onValueChange}
        />
        or <br />
        <input
          name="optionTwoText"
          className="input"
          size="70"
          type="text"
          onChange={onValueChange}
          value={newQuestion.optionTwoText}
        />
        ?
        <br />
        <button disabled={isDisabled} className="button-create">
          Create
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = ({ authedUser }) => {
  return { authedUser };
};

export default connect(mapStateToProps)(CreatePoll);
