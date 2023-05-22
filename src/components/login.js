import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import { handleLogin } from "../actions/shared";

const Login = (props) => {
  const { users, usernames } = props;

  let choose = [];
  for (let i = 0; i < usernames.length; i++) {
    choose.push(users[usernames[i]]);
  }

  const onLogin = (e) => {
    props.dispatch(handleLogin(e.target.value));
  };

  return (
    <div>
      <h1 className="signIn-heading">LOGIN</h1>
      <div className="signIn">
        <h1>Login</h1>
        <select name="signIn-select" onChange={(e) => onLogin(e)}>
          <option>Suggestion Member</option>
          {choose.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

const mapStateToProps = ({ users }) => {
  const usernames = Object.keys(users);

  return { users, usernames };
};

export default connect(mapStateToProps)(Login);
