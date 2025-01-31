import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./components/routes/public/Home";

import SignUp from "./components/routes/auth/SignUp";
import SignIn from "./components/routes/auth/SignIn";

import Dashboard from "./components/routes/private/Dashboard";
import Gallery from "./components/routes/private/Gallery";

import "./style/style.scss";

const App = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  return (
    <div className="app app-lightmode">
      <header className="header">
        <Link to="/">
          <div className="title-container">
            <h1 className="heading header-title">StoryGram</h1>
            <p className="subtitle header-subtitle">
              your life, your Storygram
            </p>
          </div>
        </Link>
        {userLoggedIn ? (
          <Link to="/dashboard">dashboard</Link>
        ) : (
          <Link to="/signin">signin</Link>
        )}
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:galleryid" element={<Gallery />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default App;
