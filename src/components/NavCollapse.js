import { Link } from "react-router-dom";
const NavCollapse = () => {
  return (
    <ul sty>
      <li style={{ display: "inline" }}>
        <Link to={"/"} className="item non">
          Home
        </Link>
      </li>
      <li style={{ display: "inline" }}>
        <Link to={"/leaderboard"} className="item non">
          Leaderboard
        </Link>
      </li>
      <li style={{ display: "inline" }}>
        <Link to={"/add"} className="item non">
          New Poll
        </Link>
      </li>
    </ul>
  );
};
export default NavCollapse;
