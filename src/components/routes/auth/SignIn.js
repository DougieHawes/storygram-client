import axios from "axios";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Route2 } from "../../utils/routes";

import { Button2 } from "../../utils/buttons";
import { Input1 } from "../../utils/inputs";

import "./style.scss";

const SignIn = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = formData;

  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/user/signin`,
        formData
      );

      setFormData({
        email: "",
        password: "",
      });

      localStorage.setItem("token", response.data.token);

      window.location.reload();
      navigate("/dashboard");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Route2
      content={
        <div className="auth-page">
          <form className="form" onSubmit={handleSubmit}>
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
              type="password"
              value={password}
            />
            <Button2 text="continue your story" />
            <Link className="form-link" to="/signup">
              signup
            </Link>
          </form>
        </div>
      }
    />
  );
};

export default SignIn;
