import React from 'react';
import './Infografia.css'; // Opcional: estilos personalizados para la imagen

const Infografia = () => {
  return (
    <div className="infografia-container">
      <img 
        src="/path/to/tu-imagen.jpg" 
        alt="Descripción de la infografía" 
        className="infografia"
      />
    </div>
  );
};

export default Infografia;
