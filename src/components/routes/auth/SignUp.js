import axios from "axios";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Route2 } from "../../utils/routes";

import { Button2 } from "../../utils/buttons";
import { Input1 } from "../../utils/inputs";

import "./style.scss";

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
        <div className="auth-page">
          <form className="form" onSubmit={handleSubmit}>
            <Input1 name="email" onChange={handleChange} value={email} />
            <Input1 name="username" onChange={handleChange} value={username} />
            <Input1
              name="password"
              onChange={handleChange}
              type="password"
              value={password}
            />
            <Input1
              name="confirmPassword"
              onChange={handleChange}
              type="password"
              value={confirmPassword}
            />
            <Button2 text="begin your story" />
            <Link className="form-link" to="/signin">
              signin
            </Link>
          </form>
        </div>
      }
    />
  );
};

export default SignUp;
