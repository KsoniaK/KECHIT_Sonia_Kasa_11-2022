import React from "react";
import { Link } from "react-router-dom";
import imageAccueil from "../styles/img/header_accueil.png";
import "../styles/Accueil.css";

// Page d'Accueil
function Accueil({ houses }) {
  return (
    <main className="main_accueil">
      <div className="banner_accueil">
        <img src={imageAccueil} alt="logements" />
        <p>Chez vous, partout et ailleurs</p>
      </div>
      <section className="logements_container">
        <article className="logements_card">
          {houses.map((house, index) => (
            <Link to={`/logement/${house.id}`} key={index}>
              <div className="logement_et_titre">
                <h2>{house.title}</h2>
                <img
                  className="accueil_img"
                  src={house.cover}
                  alt="logements"
                />
              </div>
            </Link>
          ))}
        </article>
      </section>
    </main>
  );
}
export default Accueil;
