import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Principal.css";
import isla from "../img/isla.jpeg"
import tienda from "../img/tienda.jpeg"
import atun from "../img/atun.jpeg"

const Carrusel= () => {
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
      <h2>Porductos a canjear</h2>
      <Slider {...settings}>
        <div>
          <img src= {isla} alt="" />
        </div>
        <div>
          <img src= {tienda} alt="" />
        </div>
        <div>
          <img src= {atun} alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default Carrusel;