import React from "react";
import { Link } from "react-router-dom";
import image from "../styles/img/logo_footer.png";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer>
      <Link to="/">
        <img className="container_footer" src={image} alt="logements" />
      </Link>
      <p className="copyright_footer">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
export default Footer;
