import { Link } from "react-router-dom";

const Card1 = ({ title, link }) => (
  <div className="card">
    <h3>{title}</h3>
    <Link to={link}>VIEW</Link>
  </div>
);

export { Card1 };
