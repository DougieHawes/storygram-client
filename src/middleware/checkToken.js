import { jwtDecode } from "jwt-decode";

const checkToken = () => {
  const token = localStorage.getItem("token");

  if (token) {
    const decoded = jwtDecode(token);
    const currentTime = Date.now() / 1000;

    if (decoded.exp < currentTime) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
};

export default checkToken;
