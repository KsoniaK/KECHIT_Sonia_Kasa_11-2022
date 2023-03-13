import React, { useState, useRef } from "react";
import image from "../styles/img/down-arrow.png";
import "../styles/Accordion.css";

// Accordeon
function Accordion(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [Height, setHeight] = useState("0px");
  const [toggle, setToggle] = useState(false);

  // useRef = connaître la hauteur de l'élément du DOM
  const content = useRef(null);

  // Appel de la fonction pour ouvrir ou fermer
  function toggleAccordion() {
    // S'assurer qu'il y a bien un contenu avant
    if (content && content.current) {
      setIsOpen(isOpen === false ? true : false);
      setHeight(isOpen === true ? "0px" : content.current.scrollHeight + "px");
    }
  }

  return (
    <article
      id="accordions"
      className="accordions margin"
      onClick={() => setToggle(!toggle)}
    >
      <div className="p_container">
        <button
          id="accordion_button"
          onClick={toggleAccordion}
          className="accordion_button"
        >
          <p id="accordion_title" className="accordion_title">
            {props.title}
          </p>
          <img
            className={toggle ? "arrow arrow_up" : "arrow arrow_down"}
            id="arrow"
            src={image}
            alt="drop-down"
          />
        </button>
        <div
          className="p_container"
          ref={content}
          style={{ maxHeight: `${Height}` }}
        >
          <div className="p_content">{props.content}</div>
        </div>
      </div>
    </article>
  );
}
export default Accordion;
