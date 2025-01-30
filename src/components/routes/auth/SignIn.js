import axios from "axios";

import { useState } from "react";
import { Link } from "react-router-dom";

import { Route2 } from "../../utils/routes";

import { Button1 } from "../../utils/buttons";
import { Input1 } from "../../utils/inputs";

import "../style.scss";

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
            <Button1 text="submit" />
          </form>
        </div>
      }
    />
  );
};

export default SignIn;
