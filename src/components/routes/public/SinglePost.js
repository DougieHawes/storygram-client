import { useParams, Link } from "react-router-dom";

import { Layout1 } from "../../utils/layouts";

const SinglePost = () => {
  const { id } = useParams();

  const content = <>SINGLE POST</>;

  return <Layout1 title={`post ${id}`} content={content} />;
};

export default SinglePost;
