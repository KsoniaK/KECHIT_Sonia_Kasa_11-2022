import React from "react";
import redStar from "../styles/img/Vector.png";
import greyStar from "../styles/img/Vector-2.png";
import "../styles/TagsRate.css";

// Localisation et tag de chaque logement
function TagsRate(props) {
  const rating = props.logement.rating;

  return (
    <div className="container_tags-note">
      <div className="tags">
        {props.logement.tags.map((tag, index) => (
          <p className="tag_description" key={index}>
            {tag}
          </p>
        ))}
      </div>
      <div className="note_desktop">
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
    </div>
  );
}
export default TagsRate;