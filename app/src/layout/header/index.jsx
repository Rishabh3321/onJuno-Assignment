import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Header = () => {
  return (
    <div className="header">
      <h1>ColleaguesDB</h1>
      <div>
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/add">
          Add
        </Link>
      </div>
    </div>
  );
};

export default Header;
