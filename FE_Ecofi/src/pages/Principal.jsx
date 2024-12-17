import React from 'react';
import "../Styles/Principal.css"
import Nav from '../Componentes/Nav';
import Footer from '../Componentes/Footer';
import Carrusel from '../Componentes/Carrusel';
import CardsInicio from '../Componentes/CardsPrincipal';

function Principal() {
  return (
    <div id='principalConteiner'>
      <Nav />
      <Carrusel />
      <CardsInicio/>
      <div id='footerConteiner'><Footer /> </div>
    </div>

  )
}

export default Principal;
