import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./components/routes/public/Home";
import Gallery from "./components/routes/public/Gallery";

import SignUp from "./components/routes/auth/SignUp";
import SignIn from "./components/routes/auth/SignIn";

import Dashboard from "./components/routes/private/Dashboard";

import "./style.scss";

const App = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  return (
    <div>
      <header className="header">
        <Link to="/">
          <h1>StoryGram</h1>
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
