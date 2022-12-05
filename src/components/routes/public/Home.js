import axios from "axios";

import { useState, useEffect } from "react";

import { Layout1 } from "../../utils/layouts";

const Home = () => {
  const [posts, setPosts] = useState();

  const getPosts = async () => {
    const data = await axios.get("http://localhost:5000/post");

    setPosts(data.data.msg);

    // console.log(data.data.msg);
  };

  useEffect(() => {
    getPosts();
  }, []);

  const content = <>{posts}</>;

  return <Layout1 content={content} />;
};

export default Home;
