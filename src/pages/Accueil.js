// import { useState, useEffect } from "react";
import React from "react";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import "../styles/Accueil.css";

function Accueil({ houses }) {
  return (
    <main className="main_accueil">
      <div>
        <Banner />
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
