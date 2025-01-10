import React from 'react';
import Nav from '../Componentes/Nav';
import Footer from '../Componentes/Footer';
import BeneficioReciclar from '../Componentes/BeneficioReciclar';
import "../Styles/PageBeneficio.css"



function Beneficio() {
  return (
    <div id='BeneficioConteiner'>
       <Nav/>
       <BeneficioReciclar/>
      <Footer /> 
    </div>

  )
}

export default Beneficio;
