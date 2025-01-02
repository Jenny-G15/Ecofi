import React from 'react';
import "../Styles/Principal.css"
import Nav from '../Componentes/Nav';
import Footer from '../Componentes/Footer';
import Testimonios from '../Componentes/Testimonios';

function Principal() {
  return (
    <div id='principalConteiner'>
      <Nav />
        <Testimonios/>
      <div id='footerConteiner'><Footer /> </div>
    </div>

  )
}

export default Principal;