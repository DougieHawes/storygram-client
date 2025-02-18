import axios from "axios";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Route2 } from "../../utils/routes";

import { Button2 } from "../../utils/buttons";
import { Input1 } from "../../utils/inputs";

import "../style.scss";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

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

      navigate("/dashboard");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Route2
      content={
        <div>
          <form className="form" onSubmit={handleSubmit}>
            <Link to="/signup">signup</Link>
            <Input1
              name="email"
              onChange={handleChange}
              placeholder="enter email"
              value={email}
            />
            <Input1
              name="password"
              onChange={handleChange}
              placeholder="enter password"
              value={password}
            />
            <Button2 text="submit" />
          </form>
        </div>
      }
    />
  );
};

export default SignIn;
