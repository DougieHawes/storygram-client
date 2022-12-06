import { useState } from "react";

import { Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";

import Home from "./components/routes/public/Home";
import Profile from "./components/routes/public/Profile";
import SinglePost from "./components/routes/public/SinglePost";

import Dashboard from "./components/routes/private/Dashboard";
import UpdateProfile from "./components/routes/private/UpdateProfile";

import "./style.scss";
import {
  SignupModal,
  SigninModal,
  NewPostModal,
} from "./components/utils/modals";

const App = () => {
  const [state, setState] = useState({
    showModal: false,
    signupUser: false,
    signinUser: false,
    addPost: false,
  });

  const openSignupModal = () => {
    setState({
      ...state,
      showModal: true,
      signupUser: true,
    });
  };

  const openSigninModal = () => {
    setState({
      ...state,
      showModal: true,
      signinUser: true,
    });
  };

  const openNewpostModal = () => {
    setState({
      ...state,
      showModal: true,
      addPost: true,
    });
  };

  const closeModal = () => {
    setState({
      showModal: false,
      signupUser: false,
      signinUser: false,
      addPost: false,
    });
  };

  const { showModal, signupUser, signinUser, addPost } = state;

  return (
    <div className="app">
      <Header
        onSignupClick={openSignupModal}
        onSigninClick={openSigninModal}
        onNewClick={openNewpostModal}
      />
      <div className="routes">
        <Routes>
          {/* public routes */}
          <Route exact path="/" element={<Home />} />
          <Route exact path="/post/:id" element={<SinglePost />} />
          <Route exact path="/profile/:id" element={<Profile />} />
          {/* private routes */}
          <Route exact path="/dashboard/:id" element={<Dashboard />} />
          <Route exact path="/updateprofile/:id" element={<UpdateProfile />} />
        </Routes>
      </div>
      {showModal && signupUser ? (
        <SignupModal onCloseClick={closeModal} />
      ) : null}
      {showModal && signinUser ? (
        <SigninModal onCloseClick={closeModal} />
      ) : null}
      {showModal && addPost ? <NewPostModal onCloseClick={closeModal} /> : null}
    </div>
  );
};

export default App;
