import React from "react";
import "../Styles/TablaConversiones.css";
import aluminio from "../IMG/aluminio.png"
import PapelyCarton from "../IMG/PapelyCarton.png"
import Plastico from "../IMG/Plástico.png"
import Vidrio from "../IMG/Vidrio.png"






function TablaConversiones() {
  return (
    <div id="tabla-conversiones-container">
      <h2>Tabla de Conversiones</h2>
      <div className="conversion-image">
        <img src={Plastico} alt="Tabla de Conversión 1" />
      </div>
      <div className="conversion-image">
        <img src={PapelyCarton} alt="Tabla de Conversión 2" />
      </div>
      <div className="conversion-image">
        <img src={aluminio} alt="Tabla de Conversión 3" />
      </div>
      <div className="conversion-image">
        <img src= {Vidrio} alt="Tabla de Conversión 4" />
      </div>
    </div>
  );
}

export default TablaConversiones;
