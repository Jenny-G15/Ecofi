import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/QuienesSomos.css";
import imagen from "../img/1.jpeg"
import escudo from "../img/escudo.jpeg"
import ecofi from "../img/ecofi.jpeg"

const CarruselAbout= () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="carousel">
  
      <Slider {...settings}>
        <div>
          <img src= {imagen} alt="" />
        </div>
        <div>
          <img src= {escudo} alt="" />
        </div>
        <div>
          <img src= {ecofi} alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default CarruselAbout;