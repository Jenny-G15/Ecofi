import React, { useState } from "react";
import "../Styles/Register.css";

const FormularioRegistro = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const avanzarPaso = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const retrocederPaso = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const enviarFormulario = () => {
    alert("Formulario enviado exitosamente");
    setCurrentStep(1); // Reinicia el formulario
  };

  return (
    <div className="containerRegistro">
      <header>Formulario de Registro</header>
      <div className="barraProgresoRegistro">
        {["Nombre", "Contacto", "Nacimiento", "Enviar"].map((etiqueta, idx) => (
          <div
            className={`pasoRegistro ${currentStep > idx ? "activo" : ""}`}
            key={idx}
          >
            <p>{etiqueta}</p>
            <div className="balaRegistro">
              <span>{idx + 1}</span>
            </div>
            <div className="checkRegistro fas fa-check"></div>
          </div>
        ))}
      </div>
      <div className="formularioExteriorRegistro">
        <form>
          {/* Paso 1 */}
          {currentStep === 1 && (
            <div className="paginaRegistro">
              <div className="tituloRegistro">Información Básica:</div>
              <div className="campoRegistro">
                <label className="etiquetaRegistro">Nombre</label>
                <input type="text" />
              </div>
              <div className="campoRegistro">
                <label className="etiquetaRegistro">Apellido</label>
                <input type="text" />
              </div>
              <div className="campoRegistro">
                <button
                  type="button"
                  className="botonRegistro"
                  onClick={avanzarPaso}
                >
                  Siguiente
                </button>
              </div>
            </div>
          )}
          {/* Paso 2 */}
          {currentStep === 2 && (
            <div className="paginaRegistro">
              <div className="tituloRegistro">Contacto:</div>
              <div className="campoRegistro">
                <label className="etiquetaRegistro">Correo Electrónico</label>
                <input type="email" />
              </div>
              <div className="campoRegistro">
                <label className="etiquetaRegistro">Número de Teléfono</label>
                <input type="text" />
              </div>
              <div className="campoRegistro botonesRegistro">
                <button
                  type="button"
                  className="botonRegistro anteriorRegistro"
                  onClick={retrocederPaso}
                >
                  Anterior
                </button>
                <button
                  type="button"
                  className="botonRegistro"
                  onClick={avanzarPaso}
                >
                  Siguiente
                </button>
              </div>
            </div>
          )}
          {/* Paso 3 */}
          {currentStep === 3 && (
            <div className="paginaRegistro">
              <div className="tituloRegistro">Nacimiento:</div>
              <div className="campoRegistro">
                <label className="etiquetaRegistro">Fecha de Nacimiento</label>
                <input type="date" />
              </div>
              <div className="campoRegistro">
                <label className="etiquetaRegistro">Género</label>
                <select>
                  <option>Masculino</option>
                  <option>Femenino</option>
                  <option>Otro</option>
                </select>
              </div>
              <div className="campoRegistro botonesRegistro">
                <button
                  type="button"
                  className="botonRegistro anteriorRegistro"
                  onClick={retrocederPaso}
                >
                  Anterior
                </button>
                <button
                  type="button"
                  className="botonRegistro"
                  onClick={avanzarPaso}
                >
                  Siguiente
                </button>
              </div>
            </div>
          )}
          {/* Paso 4 */}
          {currentStep === 4 && (
            <div className="paginaRegistro">
              <div className="tituloRegistro">Detalles de Acceso:</div>
              <div className="campoRegistro">
                <label className="etiquetaRegistro">Usuario</label>
                <input type="text" />
              </div>
              <div className="campoRegistro">
                <label className="etiquetaRegistro">Contraseña</label>
                <input type="password" />
              </div>
              <div className="campoRegistro botonesRegistro">
                <button
                  type="button"
                  className="botonRegistro anteriorRegistro"
                  onClick={retrocederPaso}
                >
                  Anterior
                </button>
                <button
                  type="button"
                  className="botonRegistro enviarRegistro"
                  onClick={enviarFormulario}
                >
                  Enviar
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default FormularioRegistro;
