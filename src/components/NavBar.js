import { connect } from "react-redux";
import NavCollapse from "./NavCollapse";
import User from "./User";

const NavBar = (props) => {
  return (
    <div className="navbar-nav">
      <NavCollapse />
      {props.isLogin && <User />}{" "}
    </div>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  isLogin: authedUser !== null,
});

export default connect(mapStateToProps)(NavBar);
