import { useState, useEffect } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { RiDashboardFill } from "react-icons/ri";
import { Link } from "react-router-dom";

import checkToken from "../../middleware/checkToken";

import "./style.scss";

const Header = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  useEffect(() => {
    const isUserLoggedIn = async () => {
      try {
        if (checkToken()) {
          setUserLoggedIn(true);
        } else {
          setUserLoggedIn(false);
        }
      } catch (error) {
        console.log(error.message);
        setUserLoggedIn(false);
      }
    };

    isUserLoggedIn();
  }, []);

  return (
    <header className="header">
      <Link to="/">
        <div className="title-container">
          <h1 className="heading header-title">StoryGram</h1>
          <p className="subtitle header-subtitle">your life, your StoryGram</p>
        </div>
      </Link>
      {userLoggedIn ? (
        <Link style={{ minWidth: "42px" }} to="/dashboard">
          <RiDashboardFill size={42} />
        </Link>
      ) : (
        <Link style={{ minWidth: "42px" }} to="/signin">
          <FaSignInAlt size={42} />
        </Link>
      )}
    </header>
  );
};

export default Header;
