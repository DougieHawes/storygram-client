import axios from "axios";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Route2 } from "../../utils/routes";

import { Button1 } from "../../utils/buttons";
import { Input1 } from "../../utils/inputs";

import "../style.scss";

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const { email, username, password, confirmPassword } = formData;

  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/user/signup`,
        formData
      );

      setFormData({
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
      });

      navigate("/signin");
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
