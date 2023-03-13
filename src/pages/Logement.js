import React from "react";
import { Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Datas from "../service/logements.json";
import Carousel from "../components/Carousel";
import Accordion from "../components/Accordion";
import ProprietaireDetails from "../components/ProprietaireDetails";
import TagsRate from "../components/TagsRate";
import "../styles/Logement.css";

// Description logement
function Logement() {
  // On isole l'id de l'URL
  const { id } = useParams();
  // Comparaison : id du propriétaire qui correspond à l'id présent dans l'URL
  const logement = Datas.find((location) => location.id === id);
  // // Dans le cas où l'id dans l'URL est incorrect / modifié
  if(!logement){
    return <Navigate to="/404" />
  }
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
