import { useParams, Link } from "react-router-dom";

import { Layout1 } from "../../utils/layouts";

const Dashboard = () => {
  const { id } = useParams();

  const content = (
    <>
      <Link to={`/updateprofile/${id}`}>UPDATE PROFILE</Link>
    </>
  );

  return <Layout1 title="dashboard" content={content} />;
};

export default Dashboard;
