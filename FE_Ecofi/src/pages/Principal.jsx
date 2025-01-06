import React from 'react';
import "../Styles/Principal.css"
import Nav from '../Componentes/Nav';
import Footer from '../Componentes/Footer';
import Carrusel from '../Componentes/Carrusel';
import CardsPrincipal from '../Componentes/CardsPrincipal';
import InfografiaEcofi from '../Componentes/Infografia';
import Banner from "../IMG/Banner.png"


function Principal() {
  return (
    <div id='principalConteiner'>
      <Nav />
      <img id='Banner' src={Banner} alt="" />
      <Carrusel />
      <CardsPrincipal/>
      <InfografiaEcofi/>
      <div id='footerConteiner'><Footer /> </div>
    </div>

  )
}

export default Principal;