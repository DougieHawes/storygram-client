import { Route3 } from "../../utils/routes";

import { Button2 } from "../../utils/buttons";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <Route3
      content={
        <div>
          <Link to="/create-story">create-story</Link>
        </div>
      }
    />
  );
};

export default Dashboard;
