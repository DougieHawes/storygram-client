import { useParams } from "react-router-dom";

import { Route3 } from "../../utils/routes";

const Story = () => {
  const params = useParams();

  return <Route3 content={<div>Story {params.storyid}</div>} />;
};

export default Story;
