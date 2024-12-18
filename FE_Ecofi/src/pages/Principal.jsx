import React from 'react';
import "../Styles/inicio.css"
import Nav from '../Componentes/Nav';
import Footer from '../Componentes/Footer';
import Carrusel from '../Componentes/Carrusel';
import CardsPrincipal from '../Componentes/CardsPrincipal';

function Principal() {
  return (
    <div id='principalConteiner'>
      <Nav />
      <Carrusel />
      <CardsPrincipal/>
      <div id='footerConteiner'><Footer /> </div>
    </div>

  )
}

export default Principal;
