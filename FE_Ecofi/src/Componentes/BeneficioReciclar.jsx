// Importamos React y los estilos necesarios
import React from 'react';
import '../Styles/Beneficio.css'; 
import Beneficio from "../IMG/Beneficio.png"

// Componente principal para mostrar el beneficio de reciclar
const BeneficioReciclar = () => {
  return (
        <div className="beneficio-container">
            {/* Imagen que muestra el beneficio de reciclar */}
            <img 
                src= {Beneficio}
                alt="Beneficio de Reciclar" 
                className="Beneficio"
            />
        </div>
  );
};


export default BeneficioReciclar;
