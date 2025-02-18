import { Route3 } from "../../utils/routes";

import { Link } from "react-router-dom";

import SignOutButton from "../../layout/SignOutButton";

import "./style.scss";

const Dashboard = () => {
  return (
    <Route3
      content={
        <div>
          <Link to="/create-story">create-story</Link>
          <SignOutButton />
        </div>
      }
    />
  );
};

export default Dashboard;
