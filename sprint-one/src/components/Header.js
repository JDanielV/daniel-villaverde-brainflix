import React from "react";

function Header() {
  return (
    <header className="header">
      <img
        className="header__logo-img"
        src="../assets/Logo/Logo-brainflix.png"
        alt="brainflix logo"
      />
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
