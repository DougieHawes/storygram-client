import { Link } from "react-router-dom";

import "./style.scss";

export const Button1 = ({ to, text }) => {
  return (
    <Link to={to}>
      <button className="button button1" type="submit">
        {text}
      </button>
    </Link>
  );
};

export const Button2 = ({ text }) => {
  return (
    <button className="button button2" type="submit">
      {text}
    </button>
  );
};
