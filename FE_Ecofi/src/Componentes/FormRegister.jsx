import React, { useState, useEffect } from "react";
import "../Styles/Register.css";
import { PostUsers } from "../services/userServices";
import { useNavigate } from "react-router-dom";

const FormularioRegistro = () => {
  const [currentStep, setCurrentStep] = useState(1);

  // Estados para la lógica de registro
  const [username, setUsername] = useState("");
  const [lastName, setLastName] = useState("")
  const [dni, setDni] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userNumber, setUserNumber] = useState("");
  const [bicolones, setBicolones] = useState(0);
  const [rol, setRol] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  // const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     try {
  //       const data = await getUsers();
  //       setUsers(data);
  //     } catch (error) {
  //       console.error("Error al obtener los usuarios:", error);
  //     }
  //   };
  //   fetchUsers();
  // }, []);

  const avanzarPaso = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const retrocederPaso = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const guardarUser = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!username || !lastName || !dni || !email || !password || !userNumber) {
      setMessage("No dejes campos en blanco");
      return;
    }

    // const validarUser = username.find((user) => user.correo === email);

    // if (validarUser) {
    //   setMessage("El correo ya está registrado");
    //   return;
    // }

    try {
      setBicolones(0)
      setRol('usuario')
      await PostUsers(username, lastName, dni, email, password, userNumber, bicolones, rol);
      setMessage("¡Registro exitoso!");
      navigate("/login");



      // Reinicia los campos del formulario
      setUsername("");
      setEmail("");
      setPassword("");
      setDni("");
      setLastName("");
      setUserNumber("");


    } catch (error) {
      console.error("Error en el Registro", error);
      setMessage("Error al registrar el usuario");
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
          {/* Paso 1 */}
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
                <label className="etiquetaRegistro">DNI:</label>
                <input
                  type="text"
                  value={dni}
                  onChange={(e) => setDni(e.target.value)}
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
          {/* Paso 2 */}
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
          {/* Paso 3 */}
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
      {message && <div className="mensajeRegistro">{message}</div>}
    </div>
  );
};

export default FormularioRegistro;
