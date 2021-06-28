import { Link } from "react-router-dom";

import "./style.min.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-title-container">
        <Link to="/">
          <h1 className="header-title">StoryGram</h1>
        </Link>
      </div>
      <div className="header-search-container">
        <form className="header-search-form">
          <i className="fas fa-search open-search"></i>
          <input
            className="header-search-input"
            type="text"
            placeholder="search..."
          />
        </form>
      </div>
      <nav className="header-links-container">
        <ul className="header-links">
          <li className="header-link">
            <Link to="/">
              <i className="fas fa-home"></i>
            </Link>
          </li>
          <li className="header-link">
            <Link to="/inbox">
              <i className="far fa-paper-plane"></i>
            </Link>
          </li>
          <li className="header-link">
            <Link to="/explore">
              <i className="far fa-compass"></i>
            </Link>
          </li>
          <li className="header-link">
            <i className="far fa-heart"></i>
          </li>
          <li className="header-link">P</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
