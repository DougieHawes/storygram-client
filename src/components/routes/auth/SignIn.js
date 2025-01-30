import axios from "axios";

import { useState } from "react";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "dougiehawes@hotmail.com",
    password: "Wittgenstein42",
  });

  const { email, password } = formData;

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const response = await axios.post(
        "http://localhost:5000/user/signin",
        formData
      );

      setFormData({
        username: "",
        password: "",
      });

      localStorage.setItem("token", response.data.token);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          onChange={handleChange}
          placeholder="enter email"
          value={email}
        />
        <input
          name="password"
          onChange={handleChange}
          placeholder="enter password"
          value={password}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default SignIn;
