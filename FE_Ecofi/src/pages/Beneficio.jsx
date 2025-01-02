import React from 'react';
import Nav from '../Componentes/Nav';
import Footer from '../Componentes/Footer';
import BeneficioReciclar from '../Componentes/BeneficioReciclar';
import "../Styles/PageBeneficio.css"



function Beneficio() {
  return (
    <div id='principalConteiner'>
      <div id='Nav'> <Nav/></div>
       <div id='DivBeneficio'><BeneficioReciclar/></div>
      <div id='footerConteiner'><Footer /> </div>
    </div>

  )
}

export default Beneficio;
