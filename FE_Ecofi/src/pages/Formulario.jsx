import React from "react";
import FormularioMateriales from "../Componentes/FormRecofi";
import TablaConversiones from "../Componentes/TablaConversiones";

function FormRecofis() {
  return (
    <div id="page-form-recofis">

      <div id="form-container">
        <FormularioMateriales />
      </div>


      <div id="carousel-unique-container">
        <TablaConversiones />
      </div>
    </div>
  );
}

export default FormRecofis;
