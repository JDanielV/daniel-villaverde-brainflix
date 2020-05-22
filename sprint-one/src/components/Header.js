import React from "react";
import logo from "../Logo/Logo-brainflix.png";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to="/" className="header__logo-img">
        <img src={logo} alt="brainflix logo" />
      </Link>
      <div className="header__search-button-img-wrapper">
        <input
          className="header__search-bar"
          type="text"
          name="search-bar"
          placeholder="Search"
        />

        <div className="header__button-img-wrapper">
          <Link to="/video-upload" className="header__button">
            <span className="header__button-plus-sign">+</span>
            <span className="header__button-text">Upload</span>
          </Link>

          <div className="header__user-img"></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
