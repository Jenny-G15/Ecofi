import React from 'react';
import '../Styles/ClasificarResiduos.css'; 
import ClasificarResiduos from "../IMG/ClasificarResiduos.png"

const ClasificarEcofi = () => {
  return (
    <div className="Clasfificar-container">
      <img 
        src= {ClasificarResiduos}
        alt="ClafificarResiduos" 
        className="ClasificarResiduos"
      />
    </div>
  );
};

export default ClasificarEcofi;