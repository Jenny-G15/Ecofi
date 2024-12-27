import React from 'react';
import '../Styles/Beneficio.css'; 
import Beneficio from "../IMG/Beneficio.png"



const BeneficioReciclar = () => {
  return (
    <div id='PrincBeneficio'>
        <div className="beneficio-container">
        <img 
            src= {Beneficio}
            alt="Beneficio de Reciclar" 
            className="Beneficio"
        />
        </div>
    </div>
  );
};

export default BeneficioReciclar;