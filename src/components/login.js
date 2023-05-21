import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import { handleLogin } from "../actions/authedUser";

const Login = ({ dispatch, loggedIn }) => {
  const [username, setUsername] = useState("sarahedo");
  const [password, setPassword] = useState("password123");
  if (loggedIn) {
    const urlParams = new URLSearchParams(window.location.search);
    const redirectUrl = urlParams.get("redirectTo");
    return <Navigate to={redirectUrl ? redirectUrl : "/"} />;
  }
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(handleLogin(username, password));
    setUsername("");
    setPassword("");
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mt-9" data-testid="login-heading">
        Login
      </h1>
      <form onSubmit={onSubmit} className="login">
        <div>
          <label htmlFor="username">Username</label>
          <div>
            <input
              onChange={handleUsernameChange}
              value={username}
              data-testid="username"
              className="input"
              type="text"
              size={30}
              name="username"
              id="username"
            />
          </div>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <div>
            <input
              value={password}
              onChange={handlePasswordChange}
              data-testid="password"
              className="input"
              type="password"
              name="password"
              id="password"
              size={30}
            />
          </div>
        </div>
        <div>
          <button type="submit" data-testid="submit" className="button">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  loggedIn: !!authedUser,
});

export default connect(mapStateToProps)(Login);
