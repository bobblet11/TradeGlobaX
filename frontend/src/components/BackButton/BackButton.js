import React from "react";
import { Link } from "react-router-dom";
import { TbBackspaceFilled } from "react-icons/tb";
import "./BackButton.css";

const BackButton = ({ dest = "/" }) => {
  return (
    <div className="backButton-main">
      <Link to={dest} className="backbutton-link">
        <TbBackspaceFilled className="backButton" />
      </Link>
    </div>
  );
};

export default BackButton;
