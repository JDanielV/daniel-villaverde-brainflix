import React from "react";
import logo from "../Logo/Logo-brainflix.png";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <img className="header__logo-img" src={logo} alt="brainflix logo" />
      <div className="header__search-button-img-wrapper">
        <input
          className="header__search-bar"
          type="text"
          name="search-bar"
          placeholder="Search"
        />

        <div className="header__button-img-wrapper">
          {/* <a className="header__button" href="#"> */}
          <Link to="/video-upload" className="header__button">
            <span className="header__button-plus-sign">+</span>
            <span className="header__button-text">Upload</span>
          </Link>
          {/* </a> */}
          <div className="header__user-img"></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
