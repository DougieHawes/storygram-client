import axios from "axios";

import { useState } from "react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: "dougiehawes@hotmail.com",
    username: "DougieHawes",
    password: "Wittgenstein42",
    confirmPassword: "Wittgenstein42",
  });

  const { email, username, password, confirmPassword } = formData;

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/user/signup",
        formData
      );

      setFormData({
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log(error.message);
    } finally {
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
          name="username"
          onChange={handleChange}
          placeholder="enter username"
          value={username}
        />
        <input
          name="password"
          onChange={handleChange}
          placeholder="enter password"
          value={password}
        />
        <input
          name="confirmPassword"
          onChange={handleChange}
          placeholder="enter confirmPassword"
          value={confirmPassword}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default SignUp;
