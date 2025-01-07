import React from 'react';
import "../Styles/Principal.css"
import Nav from '../Componentes/Nav';
import Footer from '../Componentes/Footer';
import Carrusel from '../Componentes/Carrusel';
import CardsPrincipal from '../Componentes/CardsPrincipal';
import InfografiaEcofi from '../Componentes/Infografia';


function Principal() {
  return (
    <div id='principalConteiner'>
      <Nav />
      <Carrusel />
      <CardsPrincipal/>
      <InfografiaEcofi/>
      <div className='FooterP'><Footer /> </div>
    </div>

  )
}

export default Principal;
