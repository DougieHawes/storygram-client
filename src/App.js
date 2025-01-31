import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./components/routes/public/Home";
import Stories from "./components/routes/public/Story";
import Story from "./components/routes/public/Story";

import SignUp from "./components/routes/auth/SignUp";
import SignIn from "./components/routes/auth/SignIn";

import CreateStory from "./components/routes/private/CreateStory";
import Dashboard from "./components/routes/private/Dashboard";

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
        <Route path="/stories" element={<Stories />} />
        <Route path="/stories/:storyid" element={<Story />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-story" element={<CreateStory />} />
      </Routes>
    </div>
  );
};

export default App;
