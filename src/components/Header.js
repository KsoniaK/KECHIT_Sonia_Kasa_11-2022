import React from "react";
import { Link } from "react-router-dom";
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
        <Link to="/">
          <p>Accueil</p>
        </Link>
        <Link to="/About">
          <p>A propos</p>
        </Link>
      </div>
    </header>
  );
}
export default Header;
