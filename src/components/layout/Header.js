import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(true); // hard coded

  return (
    <header className="header">
      <Link to="/">
        <div className="title-container">
          <h1 className="heading header-title">StoryGram</h1>
          <p className="subtitle header-subtitle">your life, your Storygram</p>
        </div>
      </Link>
      {userLoggedIn ? (
        <Link to="/dashboard">dashboard</Link>
      ) : (
        <Link to="/signin">signin</Link>
      )}
    </header>
  );
};

export default Header;
