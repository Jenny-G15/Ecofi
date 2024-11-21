import React, { useState } from "react";
import "./SignupForm.css";

const FormRegister = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    Nombre_Usuario: "",
    Apellido_Usuario: "",
    Cedula: "",
    Email_Usuario: "",
    Contraseña_Usuario: "",
    Telefono_Usuario: "",
    Bicolones: 0,
    Canton: "",
    Distrito: "",
    OtrasSenias: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log(formData); // Aquí lo puedes enviar a tu backend
    alert("Formulario enviado exitosamente");
    setCurrentStep(1); // Resetear al primer paso
  };

  return (
    <div className="containerRegister">
      <header>Formulario de Registro</header>
      <div className="progress-barRegister">
        {["Información Personal", "Datos de Contacto", "Dirección", "Detalles de Cuenta"].map((label, index) => (
          <div className="stepRegister" key={index}>
            <p className={currentStep >= index + 1 ? "activeRegister" : ""}>{label}</p>
            <div className={`bulletRegister ${currentStep >= index + 1 ? "activeRegister" : ""}`}>
              <span>{index + 1}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="form-outerRegister">
        <form onSubmit={submitForm}>
          <div className={`pageRegister ${currentStep === 1 ? "activeRegister" : ""}`}>
            <div className="titleRegister">Información Personal:</div>
            <div className="fieldRegister">
              <div className="labelRegister">Nombre de Usuario</div>
              <input
                className="inputRegister"
                type="text"
                name="Nombre_Usuario"
                value={formData.Nombre_Usuario}
                onChange={handleChange}
              />
            </div>
            <div className="fieldRegister">
              <div className="labelRegister">Apellido de Usuario</div>
              <input
                className="inputRegister"
                type="text"
                name="Apellido_Usuario"
                value={formData.Apellido_Usuario}
                onChange={handleChange}
              />
            </div>
            <div className="fieldRegister">
              <div className="labelRegister">Cédula</div>
              <input
                className="inputRegister"
                type="number"
                name="Cedula"
                value={formData.Cedula}
                onChange={handleChange}
              />
            </div>
            <div className="fieldRegister">
              <button type="button" className="buttonRegister" onClick={nextStep}>
                Siguiente
              </button>
            </div>
          </div>

          <div className={`pageRegister ${currentStep === 2 ? "activeRegister" : ""}`}>
            <div className="titleRegister">Datos de Contacto:</div>
            <div className="fieldRegister">
              <div className="labelRegister">Correo Electrónico</div>
              <input
                className="inputRegister"
                type="email"
                name="Email_Usuario"
                value={formData.Email_Usuario}
                onChange={handleChange}
              />
            </div>
            <div className="fieldRegister">
              <div className="labelRegister">Teléfono</div>
              <input
                className="inputRegister"
                type="number"
                name="Telefono_Usuario"
                value={formData.Telefono_Usuario}
                onChange={handleChange}
              />
            </div>
            <div className="fieldRegister btnsRegister">
              <button type="button" className="buttonRegister prev" onClick={prevStep}>
                Anterior
              </button>
              <button type="button" className="buttonRegister next" onClick={nextStep}>
                Siguiente
              </button>
            </div>
          </div>

          <div className={`pageRegister ${currentStep === 3 ? "activeRegister" : ""}`}>
            <div className="titleRegister">Dirección:</div>
            <div className="fieldRegister">
              <div className="labelRegister">Cantón</div>
              <input
                className="inputRegister"
                type="text"
                name="Canton"
                value={formData.Canton}
                onChange={handleChange}
              />
            </div>
            <div className="fieldRegister">
              <div className="labelRegister">Distrito</div>
              <input
                className="inputRegister"
                type="text"
                name="Distrito"
                value={formData.Distrito}
                onChange={handleChange}
              />
            </div>
            <div className="fieldRegister">
              <div className="labelRegister">Otras Señas</div>
              <input
                className="inputRegister"
                type="text"
                name="OtrasSenias"
                value={formData.OtrasSenias}
                onChange={handleChange}
              />
            </div>
            <div className="fieldRegister btnsRegister">
              <button type="button" className="buttonRegister prev" onClick={prevStep}>
                Anterior
              </button>
              <button type="button" className="buttonRegister next" onClick={nextStep}>
                Siguiente
              </button>
            </div>
          </div>

          <div className={`pageRegister ${currentStep === 4 ? "activeRegister" : ""}`}>
            <div className="titleRegister">Detalles de Cuenta:</div>
            <div className="fieldRegister">
              <div className="labelRegister">Contraseña</div>
              <input
                className="inputRegister"
                type="password"
                name="Contraseña_Usuario"
                value={formData.Contraseña_Usuario}
                onChange={handleChange}
              />
            </div>
            <div className="fieldRegister">
              <div className="labelRegister">Confirmar Contraseña</div>
              <input
                className="inputRegister"
                type="password"
                name="ConfirmarContraseña"
                onChange={handleChange}
              />
            </div>
            <div className="fieldRegister btnsRegister">
              <button type="button" className="buttonRegister prev" onClick={prevStep}>
                Anterior
              </button>
              <button type="submit" className="buttonRegister">
                Registrar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormRegister;
