import React from "react";
import { NavLink, Link } from "react-router-dom";
import image from "../styles/img/logo.png";
import "../styles/Header.css";

function Header() {
  return (
    <header>
      <div className="div_logo">
        <Link to="/">
          <img className="logo_img" src={image} alt="logements" />
        </Link>
      </div>
      <div className="nav">
        <NavLink to="/">
          <p>Accueil</p>
        </NavLink>
        <NavLink to="/About">
          <p>A propos</p>
        </NavLink>
      </div>
    </header>
  );
}
export default Header;
