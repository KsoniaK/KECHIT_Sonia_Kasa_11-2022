import { useState } from "react";
import rightArrow from "../styles/img/left-arrow.png";
import leftArrow from "../styles/img/right-arrow.png";
import "../../src/styles/Carousel.css";

// Carousel
function Carrousel(props) {
  const picturesArray = props.logement.pictures;
  const [currentIndex, setCurrentIndex] = useState(0);

  // Bouton suivant
  const nextSlide = () =>
  // Si index = à la longueur du tableau -1 (valeur initiale à 0 donc length du tableau à 5) donc à la dernière image, afficher la  première
    currentIndex === picturesArray.length - 1
      ? setCurrentIndex(0)
      : setCurrentIndex(currentIndex + 1);
  // Si on est sur la première image, afficher la dernière
  const prevSlide = () =>
    currentIndex === 0
      ? setCurrentIndex(picturesArray.length - 1)
      : setCurrentIndex(currentIndex - 1);

  return (
    <div className="container-slider">
      <div className="slide">
        <img src={picturesArray[currentIndex]} alt="pictures_carrousel" />
      </div>
    {picturesArray.length > 1 &&
    <>
      <button>
        <img
          onClick={prevSlide}
          className="btn next"
          src={rightArrow}
          alt="next"
        />
      </button>
      <button>
        <img
          onClick={nextSlide}
          className="btn prev"
          src={leftArrow}
          alt="prev"
        />
        </button>
          <p className="p_div_compteur-carousel">{currentIndex + 1} / {picturesArray.length}</p>
       </>
      }
        </div>
  );
}
export default Carrousel;
