import React from "react";
import { ImLocation2 } from "react-icons/im";
import { AiFillCaretRight } from "react-icons/ai";
import { BiSearchAlt, BiDownArrow } from "react-icons/bi";
// import { BsPersonCircle } from "react-icons/bs";
import "./Header.css";
const Header = () => {
  return (
    <div className="max-width header">
      <img
        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
        alt="Zomato-logo"
        className="header-logo"
      />
      <div className="header-right">
        <div className="header-location-search-container">
          <div className="location-wrapper">
            <div className="location-icon-name ">
              <ImLocation2 className="absolute-center location-icon" />
              <div className="location-name">Bengalore</div>
            </div>
            <AiFillCaretRight className="absolute-center" />
          </div>
          <div className="location-search-separator"></div>
          <div className="header-searchBar">
            <BiSearchAlt className="absolute-center search-icon" />
            <input
              placeholder="Search for restaurant, cuisine or a dish"
              className="search-input"
            />
          </div>
        </div>
        <div className="profile-wrapper">
          <img
            src="https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png?output-format=webp"
            alt="profile"
            className="header-profile-image"
          />
          <span className="header-username">sanjeev</span>
          <BiDownArrow className="absolute-center profile-options-icon" />
        </div>
      </div>
    </div>
  );
};

export default Header;
