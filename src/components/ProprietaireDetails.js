import React from "react";
import redStar from "../styles/img/Vector.png";
import greyStar from "../styles/img/Vector-2.png";
import "../styles/ProprietaireDetails.css";

// Identité de l'hôte
export default function ProprietaireDetails(props) {
  const endofname = props.logement.host.name.indexOf(" ");
  const name = props.logement.host.name.slice(0, endofname);
  const lastname = props.logement.host.name.slice(endofname);
  const picture = props.logement.host.picture;
  const rating = props.logement.rating;
  const title = props.logement.title;
  const location = props.logement.location;
  const tags = props.logement.tags;

  return (
    <>
      <div>
        <h1 className="logement_title">{title}</h1>
        <p className="logement_location">{location}</p>
      </div>
      <div id="tags_mobile" className="tags">
        {tags.map((tag, index) => (
          <p className="tag_description" key={index}>
            {tag}
          </p>
        ))}
      </div>
      <article className="container_note-proprietaire-mobile">
        <div className="note_mobile">
          {[...Array(5)].map((star, index) => {
            const ratingValue = index + 1;
            return (
              <img
                key={index}
                src={ratingValue <= rating ? redStar : greyStar}
                alt="star"
              />
            );
          })}
        </div>
        <div className="picture-name_proprietaire">
          <h1 className="name_proprietaire">
            {name} <br /> {lastname}
          </h1>
          <img className="picture-proprietaire" src={picture} alt="" />
        </div>
      </article>
    </>
  );
}
