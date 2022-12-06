import { useState } from "react";

import { FaPenFancy } from "react-icons/fa";
import { FiUser, FiUserPlus } from "react-icons/fi";
import { Link } from "react-router-dom";

import "./style.scss";

const Navbar = ({ onSigninClick, onSignupClick, onNewClick }) => {
  const [signedIn, setSignedIn] = useState(true);

  return (
    <nav className="navbar">
      {signedIn ? (
        <>
          <div className="navbar-link" onClick={onNewClick}>
            <FaPenFancy />
          </div>
          <div className="navbar-link navbar-link-circle">
            <Link to={`/dashboard/${42}`}>
              <FiUser />
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="navbar-link" onClick={onSignupClick}>
            <FiUserPlus />
          </div>
          <div
            className="navbar-link  navbar-link-circle"
            onClick={onSigninClick}
          >
            <FiUser />
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
