import { useParams } from "react-router-dom";

import { Route1 } from "../../utils/routes";

const Gallery = () => {
  const params = useParams();

  return <Route1 content={<div>gallery {params.galleryid}</div>} />;
};

export default Gallery;
