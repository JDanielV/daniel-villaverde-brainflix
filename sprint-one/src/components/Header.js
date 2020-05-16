import React from "react";
import logo from "../Logo/Logo-brainflix.png";

function Header() {
  return (
    <header className="header">
      <img className="header__logo-img" src={logo} alt="brainflix logo" />

      <input
        className="header__search-bar"
        type="text"
        name="search-bar"
        placeholder="Search"
      />

      <div className="header__button-img-wrapper">
        <a className="header__button" href="#">
          <span className="header__button-plus-sign">+</span>
          <span className="header__button-text">Upload</span>
        </a>
        <div className="header__user-img"></div>
      </div>
    </header>
  );
}

export default Header;
