// Importamos React y los estilos necesarios
import React from 'react';
import '../Styles/ClasificarResiduos.css'; 
import ClasificarResiduos from "../IMG/ClasificarResiduos.png"



// Componente principal para mostrar la imagen de clasificar residuos
const ClasificarEcofi = () => {
  return (
    <div className="Clasfificar-container">
      {/* Imagen que muestra cómo clasificar los residuos */}
      <img 
        src= {ClasificarResiduos}
        alt="ClasificarResiduos" 
        className="ClasificarResiduos"
      />
    </div>
  );
};

// Exportamos el componente para que pueda ser utilizado en otros archivos
export default ClasificarEcofi;
