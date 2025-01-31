import { useParams } from "react-router-dom";

import { Route1 } from "../../utils/routes";

const Story = () => {
  const params = useParams();

  return <Route1 content={<div>Story {params.storyid}</div>} />;
};

export default Story;
