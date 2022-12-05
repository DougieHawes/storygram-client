import { useParams, Link } from "react-router-dom";

import { Layout1 } from "../../utils/layouts";

const UpdateProfile = () => {
  const { id } = useParams();

  const content = <>UPDATE PROFILE {id}</>;

  return <Layout1 title="update-profile" content={content} />;
};

export default UpdateProfile;
