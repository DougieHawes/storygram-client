import { useState } from "react";

import { Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";

import Home from "./components/routes/public/Home";
import Profile from "./components/routes/public/Profile";
import SinglePost from "./components/routes/public/SinglePost";

import Dashboard from "./components/routes/private/Dashboard";
import UpdateProfile from "./components/routes/private/UpdateProfile";

import "./style.scss";
import { Modal1 } from "./components/utils/modals";

const App = () => {
  const [state, setState] = useState({
    showModal: false,
  });

  const toggleModal = () => {
    setState({ showModal: !state.showModal });

    console.log(state);
  };

  const { showModal } = state;

  return (
    <div className="app">
      <Header
        onSigninClick={toggleModal}
        onSignupClick={toggleModal}
        onNewClick={toggleModal}
      />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/post/:id" element={<SinglePost />} />
        <Route exact path="/profile/:id" element={<Profile />} />
        {/* {private routes} */}
        <Route exact path="/dashboard/:id" element={<Dashboard />} />
        <Route exact path="/updateprofile/:id" element={<UpdateProfile />} />
      </Routes>
      {showModal && <Modal1 onCloseClick={toggleModal} />}
    </div>
  );
};

export default App;
