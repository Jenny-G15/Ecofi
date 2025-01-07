import React from "react";
import FormularioMateriales from "../Componentes/FormRecofi";
import TablaConversiones from "../Componentes/TablaConversiones";
import NavFormulario from "../Componentes/NavFormulario";


function FormRecofis() {
  return (
    <div id="page-form-recofis">
      <NavFormulario/>
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
