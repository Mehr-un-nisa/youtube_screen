import React from "react";
import "./HeaderLeftContainer.css";
import { FaReply } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { BiMinus } from "react-icons/bi";
import { BiDuplicate } from "react-icons/bi";
import { BiX } from "react-icons/bi";

function HeaderLeftContainer() {
  return (
    <div className="HeaderLeftContainer">
      <div className="lefticonVisual">
        <FaReply />
      </div>
      <div id="visualtextheading">
        <p>StartPage-Microsoft Visual Studio</p>
      </div>
      <div className="containersearchbox">
        <input
          className="bg-white"
          type="Search Bar"
          placeholder="Quick Launch(Ctrl+Q)"
        />
      </div>
      <div className="RightIconsofContainer">
        <BiSearch />
        <BiMinus />
        <BiDuplicate />
        <BiX />
      </div>
    </div>
  );
}
export default HeaderLeftContainer;
