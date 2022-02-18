import React from "react";
import "./Header.css";
import punkLogo from "../../assets/header/cryptopunk-logo.png";
import searchIcon from "../../assets/header/search.png";
import themeSwitchIcon from "../../assets/header/theme-switch.png";

function Header({ setSearchText }) {
  return (
    <div className="header">
      <div className="logoContainer">
        <img src={punkLogo} className="punkLogo" alt="cryptoPunkLogo" />
      </div>
      <div className="searchBar">
        <div className="searchIconContainer">
          <img src={searchIcon} alt="" />
        </div>
        <input
          className="searchInput"
          placeholder="Collection, item or user ..."
          onChange={(event) => setSearchText(event.target.value)}
        />
      </div>
      <div className="headerItems">
        <p>
          <a
            href="https://opensea.io/explore-collections"
            target="_blank"
            className="urlLink"
          >
            Marketplace
          </a>
        </p>
        <p>
          <a
            href="https://opensea.io/login?referrer=%2Fasset%2Fcreate"
            target="_blank"
            className="urlLink"
          >
            Create
          </a>
        </p>
      </div>
      <div className="headerActions">
        <div className="themeSwitchContainer">
          <img src={themeSwitchIcon} alt="themeSwitchIcon" />
        </div>
      </div>
      <div className="loginButton">GET IN</div>
    </div>
  );
}

export default Header;
