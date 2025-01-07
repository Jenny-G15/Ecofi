import React, { useState } from "react";
import "../Styles/Register.css";
import { PostUsers, getUsers } from "../services/userServices";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";




const FormularioRegistro = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const [username, setUsername] = useState("");
  const [lastName, setLastName] = useState("");
  const [cedula, setCedula] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userNumber, setUserNumber] = useState("");

  const navigate = useNavigate();

  const avanzarPaso = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const retrocederPaso = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const guardarUser = async (e) => {
    e.preventDefault();
  
    if (!username || !lastName || !cedula || !email || !password || !userNumber) {
      toast.error("Por favor, completa todos los campos obligatorios.");
      return;
    }
  
    try {
      // Obtener todos los usuarios del servidor
      const users = await getUsers();
      console.log("Usuarios obtenidos:", users); // Verifica qué usuarios se están obteniendo
  
      // Verificar si la cédula ya existe
      const cedulaExists = users.some((user) => user.Cedula === cedula);
      console.log("Cédula ingresada:", cedula); // Verifica la cédula ingresada
      console.log("Cédula existente:", users.map(user => user.Cedula)); // Muestra todas las cédulas existentes
  
      if (cedulaExists) {
        toast.error("Ya existe un usuario registrado con esta cédula.");
        setCurrentStep(1); // Regresar al primer paso
        return;
      }
  
      // Verificar si el correo ya existe
      const emailExists = users.some((user) => user.Email_Usuario === email);
      if (emailExists) {
        toast.error("Ya existe un usuario registrado con este correo electrónico.");
        setCurrentStep(1); // Regresar al primer paso
        return;
      }
  
      // Crear el nuevo usuario
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
  
      const response = await PostUsers(userData);
      console.log("Respuesta del servidor:", response);
  
      toast.success("¡Registro exitoso! Redirigiendo al login...");
      setTimeout(() => navigate("/Login"), 3000);
  
      // Limpiar campos después del registro exitoso
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
  

  return (
    <div className="containerRegistro">
      <div>
        <h6>BIENVENIDO A ECOFI</h6>
      </div>
      <header>Formulario de Registro</header>
      <div className="barraProgresoRegistro">
        {["Información", "Contacto", "Confirmar"].map((etiqueta, idx) => (
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
              <div className="tituloRegistro">Confirmar Datos</div>
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
  );
};

export default FormularioRegistro;