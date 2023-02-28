import React from "react";
import image from "../styles/img/a_propos.png";
import Accordion from "../components/Accordion";
import "../styles/About.css";
import "../styles/Banner.css";
import "../styles/Accordion.css";

function AboutPage() {
  const fiabiliteContent = `Les annonces postées sur Kasa garantissent une fiabilité totale. 
    Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées 
    par nos équipes.`;
  const respectContent = `La bienveillance fait partie des valeurs fondatrices de Kasa. Tout 
    comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre 
    plateforme.`;
  const serviceContent = `Nos équipes se tiennent à votre disposition pour vous fournir une 
    expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.`;
  const responsabiliteContent = `La sécurité est la priorité de Kasa. Aussi bien pour nos 
    hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos 
    services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de 
    vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité 
    domestique pour nos hôtes.`;

  return (
    <main className="main-accordion_about">
      <div className="banner_about">
        <img src={image} alt="logements" />
      </div>
      <section>
        <div className="about_container">
          <Accordion
            id="about_accordion"
            title="Fiabilité"
            content={fiabiliteContent}
          />
          <Accordion
            id="about_accordion"
            title="Respect"
            content={respectContent}
          />
          <Accordion
            id="about_accordion"
            title="Service"
            content={serviceContent}
          />
          <Accordion
            id="about_accordion"
            title="Responsabilité"
            content={responsabiliteContent}
          />
        </div>
      </section>
    </main>
  );
}

export default AboutPage;
