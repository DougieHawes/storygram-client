import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import checkToken from "../../middleware/checkToken";

import "./style.scss";

export const Route1 = ({ content }) => {
  return <div className="route">{content}</div>;
};

export const Route2 = ({ content }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("token");

      if (token) {
        try {
          if (checkToken()) {
            navigate("/dashboard");
          }
        } catch (error) {
          console.log(error.message);
          localStorage.removeItem("token");
        }
      }
    };

    checkAuth();
  }, [navigate]);

  return <div className="route">{content}</div>;
};

export const Route3 = ({ content }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const validateToken = async () => {
      const userToken = localStorage.getItem("token");

      if (!userToken) {
        navigate("/signin");
        return;
      }

      try {
        const decoded = jwtDecode(userToken);
        const currentTime = Date.now() / 1000;

        if (decoded.exp < currentTime) {
          localStorage.removeItem("token");
          navigate("/signin");
        }
      } catch (error) {
        console.log(error.message);
        localStorage.removeItem("token");
        navigate("/signin");
      }
    };

    validateToken();
  }, [navigate]);

  return <div className="route">{content}</div>;
};
