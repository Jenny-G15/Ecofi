import React, { useState } from "react";
import "../Styles/Register.css";
import { PostUsers, getUsers } from "../services/userServices";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";




const FormularioRegistro = () => {

  // Estados para manejar los pasos y datos del formulario
  const [currentStep, setCurrentStep] = useState(1);
  const [username, setUsername] = useState("");
  const [lastName, setLastName] = useState("");
  const [cedula, setCedula] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userNumber, setUserNumber] = useState("");

  const navigate = useNavigate();

  // Función para avanzar y retroceder entre pasos
  const avanzarPaso = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const retrocederPaso = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  // Función para guardar el usuario tras validar datos
  const guardarUser = async (e) => {
    e.preventDefault();

    if (!username || !lastName || !cedula || !email || !password || !userNumber) {
      toast.error("Por favor, completa todos los campos obligatorios.");
      return;
    }

    try {
      const users = await getUsers();

      // Verificar si la cédula o el correo ya están registrados
      if (users.some((user) => user.Cedula === cedula)) {
        toast.error("Ya existe un usuario registrado con esta cédula.");
        setCurrentStep(1);
        return;
      }

      if (users.some((user) => user.Email_Usuario === email)) {
        toast.error("Ya existe un usuario registrado con este correo electrónico.");
        setCurrentStep(1);
        return;
      }

      // Crear objeto de usuario y enviarlo a la API
      const userData = {
        Nombre_Usuario: username,
        Apellido_Usuario: lastName,
        Cedula: cedula,
        Email_Usuario: email,
        Contraseña_Usuario: password,
        Telefono_Usuario: userNumber,
        Rol_Usuario: "usuario",
        Bicolones: 0,
      };

      await PostUsers(userData);
      toast.success("¡Registro exitoso! Redirigiendo al login...");
      setTimeout(() => navigate("/Login"), 3000);

      // Limpiar los campos del formulario
      setUsername("");
      setLastName("");
      setCedula("");
      setEmail("");
      setPassword("");
      setUserNumber("");
    } catch (error) {
      console.error("Error en el registro:", error);
      toast.error("Error al registrar el usuario. Por favor, inténtalo de nuevo.");
    }
  };

  // Renderizado del formulario dividido en pasos
  return (
    <div className="contenedorCentro">
      <div className="containerRegistro">
        <div>
          <h6>BIENVENIDO A ECOFI</h6>
        </div>
        <header>Formulario de Registro</header>
        <div className="barraProgresoRegistro">
          {[
            "Información",
            "Contacto",
            "Confirmar",
          ].map((etiqueta, idx) => (
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
          <form onSubmit={guardarUser}>
            {currentStep === 1 && (
              <div className="paginaRegistro">
                <div className="tituloRegistro">Información Básica</div>
                <div className="campoRegistro">
                  <label className="etiquetaRegistro">Nombre:</label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="campoRegistro">
                  <label className="etiquetaRegistro">Apellido:</label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div className="campoRegistro">
                  <label className="etiquetaRegistro">Cédula:</label>
                  <input
                    type="text"
                    value={cedula}
                    onChange={(e) => setCedula(e.target.value)}
                  />
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
            {currentStep === 2 && (
              <div className="paginaRegistro">
                <div className="tituloRegistro">Información de Contacto</div>
                <div className="campoRegistro">
                  <label className="etiquetaRegistro">Correo Electrónico:</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="campoRegistro">
                  <label className="etiquetaRegistro">Teléfono:</label>
                  <input
                    type="text"
                    value={userNumber}
                    onChange={(e) => setUserNumber(e.target.value)}
                  />
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
            {currentStep === 3 && (
              <div className="paginaRegistro">
                <div className="tituloRegistro">Digite una Contraseña </div>
                <div className="campoRegistro">
                  <label className="etiquetaRegistro">Contraseña:</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="campoRegistro botonesRegistro">
                  <button
                    type="button"
                    className="botonRegistro anteriorRegistro"
                    onClick={retrocederPaso}
                  >
                    Anterior
                  </button>
                  <button type="submit" className="botonRegistro enviarRegistro">
                    Enviar
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default FormularioRegistro;

