import React from "react";
import imageAccueil from "../styles/img/header_accueil.png";
import "../styles/Banner.css";

function Banner() {
  return (
    <section className="banner_accueil">
      <img src={imageAccueil} alt="logements" />
      <p>Chez vous, partout et ailleurs</p>
    </section>
  );
}
export default Banner;
