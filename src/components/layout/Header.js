import React from "react";

import { Link } from "react-router-dom";

import Navbar from "./Navbar";

const Header = ({ onSigninClick, onSignupClick, onNewClick }) => {
  return (
    <div className="header">
      <div className="header-content">
        <div className="header-title-box">
          <Link to="/">
            <h1 className="header-title">StoryGram</h1>
          </Link>
        </div>
        <Navbar
          onSigninClick={onSigninClick}
          onSignupClick={onSignupClick}
          onNewClick={onNewClick}
        />
      </div>
    </div>
  );
};

export default Header;
