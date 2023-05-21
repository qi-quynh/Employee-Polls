import { useNavigate } from "react-router-dom";

const Error404 = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>Error 404</h1>
      <h2>Page not found</h2>
      <button className="back-home-button" onClick={onClick}>
        Go to Homepage
      </button>
    </div>
  );
};

export default Error404;
