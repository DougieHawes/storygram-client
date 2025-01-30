import { Routes, Route, Link } from "react-router-dom";

import SignUp from "./components/routes/auth/SignUp";
import SignIn from "./components/routes/auth/SignIn";

import "./style.scss";

const App = () => {
  return (
    <div>
      <Link to="/signup">signup</Link>
      <Link to="/signin">signin</Link>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  );
};

export default App;
