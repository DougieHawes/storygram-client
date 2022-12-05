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
          <div onClick={onNewClick}>
            <FaPenFancy />
          </div>
          <div>
            <Link to={`/dashboard/${42}`}>PROFILE</Link>
          </div>
        </>
      ) : (
        <>
          <div onClick={onSignupClick}>
            <FiUserPlus />
          </div>
          <div onClick={onSigninClick}>
            <FiUser />
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
