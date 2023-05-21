import { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { handleDataInitial } from "../actions/shared";
import NavBar from "./NavBar";
import "../index.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import CreatePoll from "./CreatePoll";
import LeaderBoard from "./LeaderBoard";
import PollPage from "./PollPage";
import Error404 from "./Error404";
import Login from "./login";

const App = (props) => {
  const { isLogin } = props;
  useEffect(() => {
    props.dispatch(handleDataInitial());
  }, [isLogin]);
  return (
    <Fragment>
      <div className="container">
        <NavBar />
        {isLogin === true ? (
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/add" element={<CreatePoll />} />
            <Route path="/questions/:question_id" element={<PollPage />} />
            <Route path="/leaderboard" element={<LeaderBoard />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        ) : (
          <Login />
        )}
      </div>
    </Fragment>
  );
};
const mapStateToProps = ({ authedUser }) => ({
  isLogin: authedUser !== null,
});
export default connect(mapStateToProps)(App);
