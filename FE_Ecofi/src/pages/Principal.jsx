import React from 'react';
import "../Styles/inicio.css"
import Nav from '../Componentes/Nav';
import Footer from '../Componentes/Footer';
import Carrusel from '../Componentes/Carrusel';

function Principal() {
  return (
    <div id='principalConteiner'>
      <Nav />
      <Carrusel />
      <div id='footerConteiner'><Footer /> </div>
    </div>

  )
}

export default Principal;
