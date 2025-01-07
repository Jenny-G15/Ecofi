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
<<<<<<< HEAD
      <div className='FooterP'><Footer /> </div>
=======
      <Footer/>
>>>>>>> 91172f3b3b055c8d399df5a11ef4b9aa2d211a4e
    </div>

  )
}

export default Principal;