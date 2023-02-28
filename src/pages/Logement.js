import React from "react";
import { useParams } from "react-router-dom";
import Datas from "../service/logements.json";
import Carousel from "../components/Carousel";
import Accordion from "../components/Accordion";
import ProprietaireDetails from "../components/ProprietaireDetails";
import TagsRate from "../components/TagsRate";
import "../styles/Logement.css";

function Logement() {
  const { id } = useParams();
  const logement = Datas.find((location) => location.id === id);
  const description = logement.description;
  const equipement = logement.equipments;

  return (
    <main>
      <section className="container_proprietaires">
        <Carousel logement={logement} />
        <div className="proprietaire_description">
          <ProprietaireDetails logement={logement} />
        </div>
        <div className="proprietaire_tag-rating">
          <TagsRate logement={logement} />
        </div>
        <div className="container_accordion-logement">
          <Accordion
            title="Description"
            logement={logement}
            content={description}
          />
          <Accordion
            title="Equipements"
            logement={logement}
            content={equipement.map((equi, index) => (
              <p className="p-equipement" key={index}>
                {equi}
              </p>
            ))}
          />
        </div>
      </section>
    </main>
  );
}
export default Logement;
