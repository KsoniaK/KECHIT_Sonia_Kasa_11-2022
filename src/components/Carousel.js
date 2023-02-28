import { useState } from "react";
import rightArrow from "../styles/img/left-arrow.png";
import leftArrow from "../styles/img/right-arrow.png";
import "../../src/styles/Carousel.css";

function Carrousel(props) {
  const picturesArray = props.logement.pictures;
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () =>
    currentIndex === picturesArray.length - 1
      ? setCurrentIndex(0)
      : setCurrentIndex(currentIndex + 1);
  const prevSlide = () =>
    currentIndex === 0
      ? setCurrentIndex(picturesArray.length - 1)
      : setCurrentIndex(currentIndex - 1);

  return (
    <div className="container-slider">
      <div className="slide">
        <img src={picturesArray[currentIndex]} alt="pictures_carrousel" />
      </div>
      <button>
        <img
          onClick={nextSlide}
          className="btn next"
          src={rightArrow}
          alt="next"
        />
      </button>
      <button>
        <img
          onClick={prevSlide}
          className="btn prev"
          src={leftArrow}
          alt="prev"
        />
      </button>
    </div>
  );
}
export default Carrousel;
