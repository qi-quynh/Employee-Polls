import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleLogin } from "../actions/shared";

const User = (props) => {
  const navigate = useNavigate();
  const { avatarURL, name } = props;
  const logout = () => {
    props.dispatch(handleLogin(null, null));
    console.log("logout");
    navigate("/");
  };
  return (
    <div className="profile">
      <img src={avatarURL} alt={name} width="50" height="50" />
      <button className="logout-button" onClick={logout}>
        Logout
      </button>
      <div className="user-name">{name}</div>
    </div>
  );
};
const mapStateToProps = ({ authedUser, users }) => {
  const user = users[authedUser];
  if (user) {
    const { avatarURL, name } = user;
    return {
      avatarURL,
      name,
    };
  }
};

export default connect(mapStateToProps)(User);
