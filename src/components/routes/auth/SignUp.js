import axios from "axios";

import { useState } from "react";
import { Link } from "react-router-dom";

import { Route2 } from "../../utils/routes";

import { Button1 } from "../../utils/buttons";
import { Input1 } from "../../utils/inputs";

import "../style.scss";

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
      await axios.post("http://localhost:5000/user/signup", formData);

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
    <Route2
      content={
        <div>
          <form className="form" onSubmit={handleSubmit}>
            <Link to="/signin">signin</Link>
            <Input1
              name="email"
              onChange={handleChange}
              placeholder="enter email"
              value={email}
            />
            <Input1
              name="username"
              onChange={handleChange}
              placeholder="enter username"
              value={username}
            />
            <Input1
              name="password"
              onChange={handleChange}
              placeholder="enter password"
              value={password}
            />
            <Input1
              name="confirmPassword"
              onChange={handleChange}
              placeholder="enter confirmPassword"
              value={confirmPassword}
            />
            <Button1 text="submit" />
          </form>
        </div>
      }
    />
  );
};

export default SignUp;
