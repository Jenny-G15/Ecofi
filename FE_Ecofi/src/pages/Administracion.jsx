import React from 'react'
import "../styles/Principal.css"
import Nav from '../Componentes/Nav';
import Footer from '../Componentes/Footer';
import CardsAdmin from '../Componentes/cardsAdmin';


function Administracion() {
  return (
    <div className='AdminBack'>
      
      <Nav />
      <CardsAdmin/>
  
      <div id='footerConteiner'><Footer /> </div>

    </div>
  )
}

export default Administracion
