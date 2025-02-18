import { Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";

import Home from "./components/routes/public/Home";

import SignIn from "./components/routes/auth/SignIn";
import SignUp from "./components/routes/auth/SignUp";

import CreateStory from "./components/routes/private/CreateStory";
import Dashboard from "./components/routes/private/Dashboard";
import Story from "./components/routes/private/Story";
import Stories from "./components/routes/private/Story";

import "./style/style.scss";

const App = () => {
  return (
    <div className="app app-lightmode">
      <Header />
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
