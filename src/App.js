import { useState, useEffect } from "react";

import axios from "axios";

import "./style.scss";

const App = () => {
  const [message, setMessage] = useState("");

  const getMessage = async () => {
    const message = await axios.get("http://localhost:5000");

    setMessage(message.data.msg);
  };

  useEffect(() => {
    getMessage();
  }, []);

  return (
    <div>
      <h1>StoryGram</h1>
      <p>{message ? message : null}</p>
    </div>
  );
};

export default App;
